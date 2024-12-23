import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import EmployeeList from "./components/EmployeeList";

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
