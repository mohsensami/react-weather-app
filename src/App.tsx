import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { timeConvert } from "./utils";
import Spinner from "./components/Spinner";

function App() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<any>({});
  const [dayIndices, setDayIndices] = useState<any>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getDayIndices = (data: any) => {
    // console.log(data);
    let dayIndices = [];
    dayIndices.push(0);
    let index = 0;
    let tmp = data.list[index].dt_txt.slice(8, 10);

    for (let i = 0; i < 4; i++) {
      while (
        tmp === data.list[index].dt_txt.slice(8, 10) ||
        data.list[index].dt_txt.slice(11, 13) !== "15"
      ) {
        index++;
      }
      dayIndices.push(index);
      tmp = data.list[index].dt_txt.slice(8, 10);
    }
    setDayIndices(dayIndices);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&APPID=6557810176c36fac5f0db536711a6c52`
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setIsLoading(false);
        getDayIndices(data);
        console.log(dayIndices);
      });
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <input disabled={!input} type="submit" value="Send" />
      </form>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(result).length !== 0 && (
          <div>
            <p>name: {result.city.name}</p>
            <p>population: {result.city.population}</p>
            <p>sunrise: {timeConvert(result.city.sunrise)}</p>
            <p>sunrise: {timeConvert(result.city.sunset)}</p>
            {result.list
              .filter((elm, index: number) => dayIndices.includes(index))
              .map((item: any) => (
                <>
                  <p>{item.dt_txt}</p>
                  <div>
                    <img
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                    />
                  </div>
                </>
              ))}
          </div>
        )
      )}
    </Layout>
  );
}

export default App;
