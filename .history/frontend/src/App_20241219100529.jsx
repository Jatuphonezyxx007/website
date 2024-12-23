import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import './assets/font/font.css';

import Navbar from "./components/Navbar/Navbar";
import EmployeeList from "./components/homepage/EmployeeList";

import {Button} from "@nextui-org/button";

const App = () => {
    return (
        // <Router>
        //     <Navbar />
        //     <Routes>
        //         <Route path="/" element={<EmployeeList />} /> {/* หน้า Home */}
        //     </Routes>
        // </Router>
        // <h1 className="text-3xl font-bold underline">
        // Hello world!</h1>
        
        <div className="flex flex-wrap gap-4 items-center">
            <Button color="default">Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            </div>
        
    );
};

export default App;
