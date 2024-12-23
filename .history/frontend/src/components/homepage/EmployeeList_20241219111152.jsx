import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../api";
import "./EmployeeList.css";

import {Button} from "@nextui-org/react";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    // โหลดภาพทั้งหมดจากโฟลเดอร์ assets/img
    const images = import.meta.glob("../../assets/img/*", { eager: true });

    useEffect(() => {
        // ดึงข้อมูลพนักงานจาก API
        axios
            .get(API_URL.FETCH_DATA) // ใช้ URL ของ API
            .then((response) => {
                const sorted = response.data.sort((a, b) => a.id - b.id);
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
            <h1>Products List</h1>

            {/* <div className="flex flex-wrap gap-4 items-center">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div> */}

            <table>
                <thead>
                    <tr>
                        <th className="text-center">รายการ</th>
                        <th className="text-center">ID</th>
                        <th className="text-center">Barcode</th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th className="text-center">ประเภทสินค้า</th>
                        <th className="text-center">สถานะ</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((employee) => {
                        // ค้นหา path ของภาพจาก employee.id และ employee.img
                        const imagePath = images[`../../assets/img/${employee.id}.${employee.img}`]?.default || "";

                        return (
                            <tr key={employee.id}>
                                <td size="sm"><Button color="warning">แก้ไข</Button></td>
                                <td className="text-center">{employee.id}</td>
                                <td className="text-center">{employee.barcode}</td>
                                <td>
                                    {imagePath ? (
                                        <img
                                            src={imagePath}
                                            alt={employee.name}
                                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                        />
                                    ) : (
                                        "No Image"
                                    )}
                                </td>
                                <td>{employee.name}</td>
                                <td className="text-center">{employee.type_name}</td>
                                <td className="text-center">
                                    <span className={`status ${employee.status.toLowerCase()}`}>
                    {employee.status}
                </span></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
