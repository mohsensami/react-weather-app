import { useState } from 'react';
import '../styles/components/Settings.scss';

function Settings() {
    const [openSettings, setOpenSettings] = useState(false);
    // const { dark, setDark, saveThemeToLocalStorage } = useContext(ThemeContextContext);
    const { dark, setDark, saveThemeToLocalStorage } = useState;
    // const { measurementSystem, setMeasurementSystem } = useContext(WeatherContext);

    // const changeMeasurementSystem = (system) => {};

    const toggleTheme = () => {};

    const MEASUREMENT_SYSTEMS = '';

    return (
        <div className="Settings">
            <div className="theme-toggler">
                <div className="theme-buttons" onClick={toggleTheme}>
                    <div className={`light-theme-btn ${dark ? '' : 'active'}`}>
                        <i className="bi bi-sun"></i>
                    </div>
                    <div className={`dark-theme-btn ${dark ? 'active' : ''}`}>
                        <i className="bi bi-moon"></i>
                    </div>
                </div>
            </div>
            <div className="settings-btn" onClick={() => setOpenSettings((prevVal) => !prevVal)}>
                <i className={`bi bi-gear${openSettings ? '-fill' : ''}`}></i>
            </div>
            <div className={`settings-menu ${openSettings ? 'open' : ''}`}>
                <div className="measurement-systems">
                    <h4>Measurement Systems:</h4>
                    <div className="systems">
                        {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
                            <div
                                className={`system ${system === measurementSystem ? 'active' : ''}`}
                                key={system}
                                onClick={() => changeMeasurementSystem(system)}
                            >
                                {system}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
