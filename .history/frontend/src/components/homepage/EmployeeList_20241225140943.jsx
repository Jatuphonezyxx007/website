import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../api";
import "./EmployeeList.css";

import {Button} from "@nextui-org/react";

import productHeading from "../../assets/products/product_heading.png";

import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";


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



    export default function App() {
        const list = [
          {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
          },
          {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
          },
          {
            title: "Raspberry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
          },
          {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
          },
          {
            title: "Avocado",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
          },
          {
            title: "Lemon 2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
          },
          {
            title: "Banana",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
          },
          {
            title: "Watermelon",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
          },
        ];
      
        return (
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {list.map((item, index) => (
              /* eslint-disable no-console */
              <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
                <CardBody className="overflow-visible p-0">
                  <Image
                    alt={item.title}
                    className="w-full object-cover h-[140px]"
                    radius="lg"
                    shadow="sm"
                    src={item.img}
                    width="100%"
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <p className="text-default-500">{item.price}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        );
      }
      
    return (

        <>

        

                <div className="container-img-header">
            <img src={productHeading} alt="heading" />
        </div>

        <div className="container">
        {/* <img src={productHeading} alt="heading" /> */}
            <h1 className="text-center">Products List</h1>

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
                                <td><Button size="sm" color="warning">แก้ไข</Button></td>
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

        </>
    );
};



export default EmployeeList;
