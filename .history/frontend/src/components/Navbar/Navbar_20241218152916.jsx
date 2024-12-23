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
        </nav>
    );
};

export default Navbar;
