import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainContainer from './components/container/mainContainer';
import Home from './components/pages/Home';
import Weather from './components/pages/Weather';
import { FullWeatherProvider } from './context/fullWeatherContext';

// Providers
import { WeatherProvider } from './context/weatherContext';

export default function App() {
    return (
        <div>
            <WeatherProvider>
                <FullWeatherProvider>
                    <BrowserRouter>
                        <MainContainer>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                {/* <Route exact path="/weather/:city/:coord" component={<Weather />} /> */}
                                <Route path="weather" element={<Weather />} />
                                {/* <Route path="about" element={<About />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="*" element={<NoMatch />} /> */}
                            </Routes>
                        </MainContainer>
                    </BrowserRouter>
                </FullWeatherProvider>
            </WeatherProvider>
        </div>
    );
}

// function About() {
//     return (
//         <div>
//             <h2>About</h2>
//         </div>
//     );
// }

// function Dashboard() {
//     return (
//         <div>
//             <h2>Dashboard</h2>
//         </div>
//     );
// }

// function NoMatch() {
//     return (
//         <div>
//             <h2>Nothing to see here!</h2>
//             <p>
//                 <Link to="/">Go to the home page</Link>
//             </p>
//         </div>
//     );
// }
