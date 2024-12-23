import React from "react";
import { Box } from "@nextui-org/react";
import "./Sidebar.css"; // สำหรับเพิ่ม CSS

const Sidebar = () => {
    return (
        <Box
            css={{
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                left: 0,
                top: 0,
                height: "100vh",
                width: "250px",
                backgroundColor: "$blue900",
                padding: "20px",
                boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
            }}
        >
            <h3 style={{ color: "white", marginBottom: "30px" }}>My Sidebar</h3>
            <nav>
                <ul className="sidebar-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </Box>
    );
};

export default Sidebar;
