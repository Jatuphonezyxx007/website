import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import EmployeeList from "./components/homepage/EmployeeList";
import Layout from "./components/sidebar/Layout";

// NextUI Components
import { Button } from "@nextui-org/button";

const App = () => {
    return (
        <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<EmployeeList />} /> {/* หน้า Home */}
                </Routes>
        </Router>
    );
};

export default App;
