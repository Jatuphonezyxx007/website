// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// // import './assets/font/font.css';

// import Navbar from "./components/Navbar/Navbar";
// import EmployeeList from "./components/homepage/EmployeeList";
// // import Layout from "./components/layout/Layout";

// import {Button} from "@nextui-org/button";

// const App = () => {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route path="/" element={<EmployeeList />} /> {/* หน้า Home */}
//             </Routes>
//         </Router>
//     );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Login from "./components/auth/Login";
import EmployeeList from "./components/homepage/EmployeeList";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> {/* หน้า Login เป็นหน้าแรก */}
                <Navbar />
                <Route path="/dashboard" element={<EmployeeList />} /> {/* หน้า Dashboard */}
            </Routes>
        </Router>
    );
};

export default App;
