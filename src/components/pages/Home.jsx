import { useCallback, useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { weatherContext, WDispatchContext } from '../../context/weatherContext';
import { getWeather, clearWeather } from '../../actions/index';

const Home = () => {
    const weather = useContext(weatherContext);
    const dispatch = useContext(WDispatchContext);
    const [userForm, change] = useForm({ city: '' });

    const handleChange = useCallback((e) => change(e), [change]);

    // const handleSubmit = useCallback(
    //     (e) => {
    //         e.preventDefault();
    //         console.log(userForm);
    //     },
    //     [userForm]
    // );

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            getWeather(dispatch, userForm.city);
        },
        [dispatch, userForm.city]
    );

    // If there is no error and the weather for submited city exists then redirect to Weather.js
    if (!weather.error && weather.weather) {
        window.location.assign(`/weather/${userForm.city}/${weather.weather.coord.lon}&${weather.weather.coord.lat}`);
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-800 gap-8">
            {JSON.stringify(weather)}
            <h1 className="text-3xl text-white uppercase">Search for latest weather updates</h1>
            <form onSubmit={handleSubmit}>
                <input className="search-field" type="text" name="city" value={userForm.city} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Home;
