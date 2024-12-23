import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import EmployeeList from "./components/homepage/EmployeeList";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <Routes>
                {/* หน้า Login */}
                <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />

                {/* หน้า Dashboard */}
                <Route
                    path="/home"
                    element={
                        isAuthenticated ? (
                            <>
                                <Navbar />
                                <EmployeeList />
                            </>
                        ) : (
                            <Navigate to="/" state={{ message: "โปรดเข้าสู่ระบบ" }} />
                        )
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
