import React from 'react';
import './style.css';

const Header = () => {
    return (
        <header>
            <div>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <span>Weather App</span>
            </div>
        </header>
    );
};

export default Header;
