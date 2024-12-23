import React from "react";

const Sidebar = () => {
    return (
        <div style={{ width: "250px", backgroundColor: "#333", height: "100vh", color: "white" }}>
            <h3 style={{ textAlign: "center", padding: "10px" }}>Sidebar</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ padding: "10px 20px" }}>Menu 1</li>
                <li style={{ padding: "10px 20px" }}>Menu 2</li>
            </ul>
        </div>
    );
};

export default Sidebar;
