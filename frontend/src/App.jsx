// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Login from "./components/auth/Login";
// import EmployeeList from "./components/homepage/EmployeeList";
// import Navbar from "./components/Navbar/Navbar";

// const App = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const handleLoginSuccess = () => {
//         setIsAuthenticated(true);
//     };

//     return (
//         <Router>
//             <Routes>
//                 {/* หน้า Login */}
//                 <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />

//                 {/* หน้า Dashboard */}
//                 <Route
//                     path="/"
//                     element={
//                         isAuthenticated ? (
//                             <>
//                                 <Navbar />
//                                 <EmployeeList />
//                             </>
//                         ) : (
//                             <Navigate to="/" state={{ message: "โปรดเข้าสู่ระบบ" }} />
//                         )
//                     }
//                 />
//             </Routes>
//         </Router>
//     );
// };

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// // Components
// // import Login from "./components/auth/Login";
// import EmployeeList from "./components/homepage/EmployeeList";
// import Navbar from "./components/Navbar/Navbar";
// import Layout from "./components/sidebar/Layout";
// import Footer from "./components/Footer/Footer";
// import ProductDetail from "./components/Product_Detail/ProductDetail";



// const App = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false); // สถานะการเข้าสู่ระบบ

//     const handleLoginSuccess = () => {
//         setIsAuthenticated(true);
//     };

//     return (
//         <Router>
//             <Routes>
//                 {/* หน้า Login */}
//                 {/* <Route
//                     path="/"
//                     element={
//                         isAuthenticated ? (
//                             <Navigate to="/dashboard" replace />
//                         ) : (
//                             <Login onLoginSuccess={handleLoginSuccess} />
//                         )
//                     }
//                 /> */}

//                 {/* หน้า Dashboard */}
//                 {/* <Route
//                     path="/dashboard"
//                     element={
//                         isAuthenticated ? (
//                             <Layout>
//                                 <Navbar />
//                                 <EmployeeList />
//                                 <Footer />
//                             </Layout>
//                         ) : (
//                             <Navigate to="/" replace />
//                         )
//                     }
//                 /> */}
                
//                 <Route
//                 path="/dashboard"
//                 element={
//                 <Layout>
//                     <Navbar />
//                     <EmployeeList />
//                     <Footer />
//                     </Layout>
//                 }
//                 />


                
//                 <Route
//                     path="/product/:id"
//                     element={
//                         isAuthenticated ? (
//                             <Layout>
//                                 <Navbar />
//                                 <ProductDetail />
//                                 <Footer />
//                             </Layout>
//                         ) : (
//                             <Navigate to="/" replace />
//                         )
//                     }
//                 />

//             </Routes>
//         </Router>
//     );
// };

// export default App;




import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import EmployeeList from "./components/homepage/EmployeeList";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/sidebar/Layout";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./components/Product_Detail/ProductDetail";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* หน้า Dashboard */}
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Navbar />
                            <EmployeeList />
                            <Footer />
                        </Layout>
                    }
                />

                {/* หน้า Product Detail */}
                <Route
                    path="/product/:id"
                    element={
                        <Layout>
                            <Navbar />
                            <ProductDetail />
                            <Footer />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;

