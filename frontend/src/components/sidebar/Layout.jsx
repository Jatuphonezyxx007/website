import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flex: 1, padding: "0" }}>{children}</div>
        </div>
        // <>
        // </>
    );
};

export default Layout;
