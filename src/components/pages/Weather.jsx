import { useContext } from 'react';
import {
    getWeather,
    clearWeather,
    getFullWeather,
    clearFullWeather,
    saveCityToLs,
    deleteCityFromLs,
} from '../../actions/index';

// import { fullWeatherContext, FWDispatchContext } from '../../context/fullWeatherContext';
import { weatherContext, WDispatchContext } from '../../context/weatherContext';

export default function Weather() {
    const weather = useContext(weatherContext);
    // const fullWeather = useContext(fullWeatherContext);

    if (!weather.weather || weather.loading) {
        return <p>Loading ...</p>;
        // } else if (fullWeather.error) {
        //     // if any error happens from fullWeather-fetch then show it on popup
        //     return <p>Error</p>;
    } else if (weather.error) {
        // if any error happens from weather-fetch then show it on popup
        return (
            <>
                <p>back</p>
                <p>Error</p>
            </>
        );
    } else if (
        // if the user changes city-name in the url then check the lon and lat to weather-fetch
        // if there is mis-match then show it on popup
        weather.weather.coord.lon !== Number(51.4215) ||
        weather.weather.coord.lat !== Number(51.4215)
    ) {
        // return (
        //     <>
        //         <p>back</p>
        //         <p>Error</p>
        //     </>
        // );
    }
    return (
        <div>
            <h4 className="overview-country-cityname">{weather.weather.name}</h4>
            {JSON.stringify(weather)}
        </div>
    );
}
