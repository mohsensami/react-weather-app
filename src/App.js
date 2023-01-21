import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    const API_KEY = "ab3d8a663bf1ef42a7f37d1641a6982e";
    const [city, setCity] = useState("");
    const handleSubmit = async () => {
        const result = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: city,
                appid: API_KEY,
                units: "metric",
                lang: "fa",
            },
        });
        console.log(result);
    };
    return (
        <div className="App">
            <div className="flex flex-col items-center mt-24 gap-16">
                <h1 className="text-4xl text-white">React Weather App</h1>
                <div className="flex md:w-1/2 w-3/4">
                    <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-l-lg flex items-center">
                        Submit
                    </button>
                    <input
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        type="text"
                        className="flex-1 block focus:outline-0 p-2.5 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Enter The City"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
