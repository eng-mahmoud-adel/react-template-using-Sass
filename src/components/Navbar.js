import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <h2>Composition</h2>
                    <p>Free PSD Website Template</p>
                </div>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/home">Homepage</Link></li>
                        <li><Link to="/style">Style Demo</Link></li>
                        <li><Link to="/full">Full Width</Link></li>
                        <li><Link to="/drop">DropDown</Link></li>
                        <li><Link to="/link">LinkText</Link></li>
                    </ul>
                </nav>
                <div className="toggler">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default NavBar;