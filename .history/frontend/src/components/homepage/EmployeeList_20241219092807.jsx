// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { API_URL } from "../../api";
// import "./EmployeeList.css";


// const EmployeeList = () => {
//     const [employees, setEmployees] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // ดึงข้อมูลพนักงานจาก API
//         axios
//             .get(API_URL.FETCH_DATA) // ใช้ URL ของ API
//             .then((response) => {
//                 setEmployees(response.data); // บันทึกข้อมูลพนักงาน
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching employees:", error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="container">
//             <h1>Products List</h1>

            
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Barcode</th>
//                         <th>Picture</th>
//                         <th>Name</th>
//                         <th>ประเภทสินค้า</th>
//                         <th>สถานะ</th>
//                     </tr>
//                 </thead>

                
//                 <tbody>
//                     {employees.map((employee) => (
//                         <tr key={employee.id}>
//                             <td>{employee.id}</td>
//                             <td>{employee.barcode}</td>
//                             <td><img src={require(`../assets/img/${employee.id}.${employee.img}`)} alt={employee.name}></img></td>
//                             <td>{employee.name}</td>
//                             {/* <td>{employee.emp_last}</td> */}
//                             <td>{employee.type_name}</td>
//                             <td>{employee.status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default EmployeeList;



import React from "react";

const EmployeeTable = ({ employees }) => {
    const images = import.meta.glob('../assets/img/*', { eager: true });

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Barcode</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => {
                    const imagePath =
                        images[`../assets/img/${employee.id}.${employee.img}`]?.default || "";
                    return (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.barcode}</td>
                            <td>{employee.name}</td>
                            <td>{employee.type_name}</td>
                            <td>{employee.status}</td>
                            <td>
                                {imagePath ? (
                                    <img
                                        src={imagePath}
                                        alt={employee.name}
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            objectFit: "cover",
                                        }}
                                    />
                                ) : (
                                    "No Image"
                                )}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default EmployeeTable;