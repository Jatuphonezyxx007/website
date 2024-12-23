import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">My Company</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">About us</Link></li>
                <li><Link to="test">Test</Link></li>
            </ul>
            <div className="profile-icon">
                <img src="https://ntvb.tmsimg.com/assets/assets/866126_v9_bc.jpg" alt="profile"/>
            </div>
        </nav>
    );
};

export default Navbar;
