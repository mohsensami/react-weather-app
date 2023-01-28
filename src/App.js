import { useState } from "react";
import "./App.css";
import axios from "axios";
import timeConvert from "./utils/unixTimeConvert.js";

function App() {
    const API_KEY = "ab3d8a663bf1ef42a7f37d1641a6982e";
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState("tehran");
    const [result, setResult] = useState([]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (city === "") {
            return false;
        }
        setLoading(true);
        await axios
            .get("https://api.openweathermap.org/data/2.5/weather", {
                params: {
                    q: city.trim(),
                    appid: API_KEY,
                    units: "metric",
                    lang: "en",
                },
            })
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                console.log(data);
                setResult((prev) => {
                    return [data];
                });
                setCity("");
            });
        setLoading(false);
    };
    return (
        <div className="App">
            <div className="flex flex-col items-center mt-24 gap-16">
                <h1 className="text-4xl text-white">Weather App</h1>
                <form className="flex md:w-1/2 w-3/4" onSubmit={handleSubmit}>
                    <button disabled={loading && "disable"} type="submit" className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-l-lg flex items-center ${loading && "cursor-not-allowed"}`}>
                        {loading && (
                            <svg v-if="loading" className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        {!loading ? "Submit" : "Loading ..."}
                    </button>
                    <input
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        type="text"
                        className="flex-1 block focus:outline-0 p-2.5 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Enter The City"
                    />
                </form>
                {result.map((item) => {
                    return (
                        <div className="p-4 w-full max-w-sm bg-white bg-opacity-30 rounded-lg border shadow-md sm:p-6" key={item.id}>
                            <h5 className="flex items-center mb-3 text-base text-gray-900 md:text-xl dark:text-white">
                                <span>
                                    <img className="mr-2" width="20" src={`http://openweathermap.org/images/flags/${item.sys.country.toLowerCase()}.png`} alt="state.result[0].name" />
                                </span>
                                <span> {item.name} </span>
                                <span>
                                    <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="item.name" />
                                </span>
                            </h5>
                            <ul className="my-4 space-y-3">
                                <li>
                                    <div className="flex items-center p-3 text-base text-gray-900 bg-white bg-opacity-50 rounded-lg hover:bg-opacity-60 group">
                                        <span className="flex-1 ml-3 whitespace-nowrap">
                                            <span>description: </span>
                                            <span>{item.weather[0].description} </span>
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <adiv className="flex items-center p-3 text-base text-gray-900 bg-white bg-opacity-50 rounded-lg hover:bg-opacity-60 group">
                                        <p className="flex-1 ml-3 whitespace-nowrap">
                                            <span>Temp: </span>
                                            <span dir="ltr" className="inline-block">
                                                {item.main.temp}
                                            </span>
                                        </p>
                                    </adiv>
                                </li>
                                <li>
                                    <adiv className="flex items-center p-3 text-base text-gray-900 bg-white bg-opacity-50 rounded-lg hover:bg-opacity-60 group">
                                        <span className="flex-1 ml-3 whitespace-nowrap">
                                            <span>Humidity: </span>
                                            <span>{item.main.humidity}</span>
                                        </span>
                                    </adiv>
                                </li>
                                <li>
                                    <adiv className="flex items-center p-3 text-base text-gray-900 bg-white bg-opacity-50 rounded-lg hover:bg-opacity-60 group">
                                        <span className="flex-1 ml-3 whitespace-nowrap">
                                            <span> Wind: </span>
                                            <span>{item.wind.speed}</span>
                                        </span>
                                    </adiv>
                                </li>
                                <li>
                                    <adiv className="flex items-center p-3 text-base text-gray-900 bg-white bg-opacity-50 rounded-lg hover:bg-opacity-60 group">
                                        <span className="flex-1 ml-3 whitespace-nowrap">
                                            <span>sunrise: </span>
                                            <span>{timeConvert(item.sys.sunrise)}</span>
                                        </span>
                                    </adiv>
                                </li>
                                <li>
                                    <adiv className="flex items-center p-3 text-base text-gray-900 bg-white bg-opacity-50 rounded-lg hover:bg-opacity-60 group">
                                        <span className="flex-1 ml-3 whitespace-nowrap">
                                            <span>sunset: </span>
                                            <span>{timeConvert(item.sys.sunset)}</span>
                                        </span>
                                    </adiv>
                                </li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
