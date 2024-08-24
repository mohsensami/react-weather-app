import { Suspense, useContext, useEffect } from 'react';
import {
    getWeather,
    clearWeather,
    getFullWeather,
    clearFullWeather,
    saveCityToLs,
    deleteCityFromLs,
} from '../../actions/index';
import { fullWeatherContext, FWDispatchContext } from '../../context/fullWeatherContext';

// import { fullWeatherContext, FWDispatchContext } from '../../context/fullWeatherContext';
import { weatherContext, WDispatchContext } from '../../context/weatherContext';

export default function Weather() {
    const weather = useContext(weatherContext);
    const fullWeather = useContext(fullWeatherContext);
    const dispatch2 = useContext(FWDispatchContext);

    useEffect(() => {
        getFullWeather(dispatch2, 51.4215, 51.4215);

        // return () => clearFullWeather(dispatch2);
    }, []);

    if (weather.loading) {
        // if (!fullWeather.all || fullWeather.loading || !weather.weather || weather.loading) {
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
        <div className="weather-container">
            <div className="weather-wrapper">
                <div className="weather-left">
                    <div className="weather-left-container">
                        <div className="buttons">
                            <p>Back</p>
                            <div className="buttons-group">
                                <div className="button r" id="button-3">
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                        // onChange={toggleLanguage}
                                        // checked={language.current === 'English' ? false : true}
                                    />
                                    <div className="knobs"></div>
                                    <div className="layer"></div>
                                </div>
                            </div>
                        </div>
                        {/* <SelectSavedCities /> */}
                        <div className="main-title-wrapper">
                            <h1 className="main-title-text">
                                weatherLangs <span className="main-title-text-bold">weatherLangs</span>
                            </h1>
                        </div>
                        <p className="top-cities-title">weatherLangs</p>
                        {/* <CitiesList currentCityLon={lon} saveCity={handleCitySubmit} deleteCity={handleCityDelete} /> */}
                        <div className="daily">
                            <div className="daily-title">
                                <h2 className="daily-title-text">
                                    weatherLangs
                                    <div className="dot"></div>
                                </h2>
                                <Suspense fallback={<p>Loading</p>}>
                                    {/* <WeatherDaily data={fullWeather.all.daily} /> */}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="weather-right">
                    <i className="fas fa-cloud cloud-1"></i>
                    <i className="fas fa-cloud cloud-2"></i>
                    {/* <LiveClock /> */}
                    <img className="weather-draw" src="/weatherLangs" alt="" />
                    <div className="overview">
                        <div className="overview-header">
                            <div className="overview-header-today">
                                <h2 className="overview-header-today-title">weatherLangs</h2>
                                <p className="overview-header-today-date">weatherLangs</p>
                            </div>
                        </div>
                        <div className="overview-header-icon">
                            <img
                                src={`https://openweathermap.org/img/w/${fullWeather?.all?.current?.weather[0]?.icon}.png`}
                                alt=""
                            />
                        </div>
                        <div className="overview-temp">
                            <h1 className="overview-temp-current">currentTemp</h1>
                            <span className="over-view-temp-sign">°C</span>
                        </div>
                        <div className="overview-country">
                            <h4 className="overview-country-cityname">{weather?.weather?.name}</h4>
                            <small className="overview-country-timezone">{fullWeather?.all?.timezone}</small>
                        </div>
                        <div className="overview-humiditydew">
                            <div className="overview-humidity">
                                <p>weatherLangs</p>
                                <i className="fas fa-tint"></i>
                            </div>
                            <div className="overview-dewpoint">
                                <p>weatherLangs°C`</p>
                                <i className="fas fa-hand-holding-water"></i>
                            </div>
                        </div>
                        <div className="overview-more-info">
                            <p className="overview-more-info-feels-like"> weatherLangs°C</p>
                            {/* <p className="overview-more-info-sunset">Sunset {sunset}</p>
                <p className="overview-more-info-sunrise">Sunrise {sunrise}</p> */}
                        </div>
                    </div>
                    <Suspense fallback={<p>Loading</p>}>
                        {/* <WeatherHourly data={fullWeather?.all.hourly} /> */}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
