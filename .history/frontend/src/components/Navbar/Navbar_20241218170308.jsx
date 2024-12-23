import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">My Website</Link>
            </div>
            {/* กลุ่มลิงก์และโปรไฟล์ */}
            <div className="navbar-right">
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                {/* ไอคอนโปรไฟล์ */}
                <div className="profile-icon">
                    <Link to="/profile">
                        <img src="https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/Charlie_Puth_-_Publicity_01_-_07-30-19_akni02/charlie-puth-new-single-i-warned-myself-benny-blanco.jpg" alt="Profile" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
