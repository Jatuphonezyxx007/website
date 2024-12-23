import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import './assets/font/font.css';

import Navbar from "./components/Navbar/Navbar";
import EmployeeList from "./components/homepage/EmployeeList";
// import Layout from "./components/layout/Layout";

import {Button} from "@nextui-org/button";

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


