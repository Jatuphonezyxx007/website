import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../api";
import "./EmployeeList.css";


const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // ดึงข้อมูลพนักงานจาก API
        axios
            .get(API_URL.FETCH_DATA) // ใช้ URL ของ API
            .then((response) => {
                setEmployees(response.data); // บันทึกข้อมูลพนักงาน
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching employees:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Barcode</th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>ประเภทสินค้า</th>
                        <th>สถานะ</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.barcode}</td>
                            <td><img src={require(`../assets/img/${employee.id}.${employee.img}`)} // ใช้ require รวม id และ img 
                            alt={employee.name} // ใช้ชื่อพนักงานเป็นข้อความ alt
                            style={{ width: "50px", height: "50px", objectFit: "cover" }} // กำหนดขนาดภาพ
                            /></td>
                            <td>{employee.name}</td>
                            {/* <td>{employee.emp_last}</td> */}
                            <td>{employee.type_name}</td>
                            <td>{employee.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
