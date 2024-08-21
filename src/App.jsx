import { Routes, Route, Link } from 'react-router-dom';
import MainContainer from './components/container/mainContainer';
import Home from './components/pages/Home';

// Providers
import { WeatherProvider } from './context/weatherContext';

export default function App() {
    return (
        <div>
            <WeatherProvider>
                <Routes>
                    <Route path="/" element={<MainContainer />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </WeatherProvider>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
