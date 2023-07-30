import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import timeConvert from "./utils/unixTimeConvert";

function App() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<any>({});

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&APPID=6557810176c36fac5f0db536711a6c52`
    )
      .then((res) => res.json())
      .then((data) => setResult(data));
    setIsLoading(false);
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
        <p>Loading ...</p>
      ) : (
        Object.keys(result).length !== 0 && (
          <div>
            <p>name: {result.city.name}</p>
            <p>population: {result.city.population}</p>
            <p>sunrise: {timeConvert(result.city.sunrise)}</p>
            <p>sunrise: {timeConvert(result.city.sunset)}</p>
          </div>
        )
      )}
    </Layout>
  );
}

export default App;
