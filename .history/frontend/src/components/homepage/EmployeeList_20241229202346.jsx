// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { API_URL } from "../../api";
// import "./EmployeeList.css";

// import {Button} from "@nextui-org/react";

// import productHeading from "../../assets/products/product_heading.png";



// const EmployeeList = () => {
//     const [employees, setEmployees] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // โหลดภาพทั้งหมดจากโฟลเดอร์ assets/img
//     const images = import.meta.glob("../../assets/img/*", { eager: true });

//     useEffect(() => {
//         // ดึงข้อมูลพนักงานจาก API
//         axios
//             .get(API_URL.FETCH_DATA) // ใช้ URL ของ API
//             .then((response) => {
//                 const sorted = response.data.sort((a, b) => a.id - b.id);
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

//         <>

        

//                 <div className="container-img-header">
//             <img src={productHeading} alt="heading" />
//         </div>

//         <div className="container">
//         {/* <img src={productHeading} alt="heading" /> */}
//             <h1 className="text-center">Products List</h1>

//             <table>
//                 <thead>
//                     <tr>
//                         <th className="text-center">รายการ</th>
//                         <th className="text-center">ID</th>
//                         <th className="text-center">Barcode</th>
//                         <th>Picture</th>
//                         <th>Name</th>
//                         <th className="text-center">ประเภทสินค้า</th>
//                         <th className="text-center">สถานะ</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {employees.map((employee) => {
//                         // ค้นหา path ของภาพจาก employee.id และ employee.img
//                         const imagePath = images[`../../assets/img/${employee.id}.${employee.img}`]?.default || "";

//                         return (
//                             <tr key={employee.id}>
//                                 <td><Button size="sm" color="warning">แก้ไข</Button></td>
//                                 <td className="text-center">{employee.id}</td>
//                                 <td className="text-center">{employee.barcode}</td>
//                                 <td>
//                                     {imagePath ? (
//                                         <img
//                                             src={imagePath}
//                                             alt={employee.name}
//                                             style={{ width: "50px", height: "50px", objectFit: "cover" }}
//                                         />
//                                     ) : (
//                                         "No Image"
//                                     )}
//                                 </td>
//                                 <td>{employee.name}</td>
//                                 <td className="text-center">{employee.type_name}</td>
//                                 <td className="text-center">
//                                     <span className={`status ${employee.status.toLowerCase()}`}>
//                     {employee.status}
//                 </span></td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>

//         </>
//     );
// };



// export default EmployeeList;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { API_URL } from "../../api";
// import "./EmployeeList.css";

// import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// import productHeading from "../../assets/products/product_heading.png";

// const productList = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // โหลดภาพทั้งหมดจากโฟลเดอร์ assets/img
//     const images = import.meta.glob("../../assets/uploads/*", { eager: true });

//     useEffect(() => {
//         // ดึงข้อมูลพนักงานจาก API
//         axios
//             .get(API_URL.FETCH_DATA) // ใช้ URL ของ API
//             .then((response) => {
//                 const sorted = response.data.sort((a, b) => a.id - b.id);
//                 setEmployees(sorted); // บันทึกข้อมูลพนักงาน
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
//         <>

//         <div className="container-img-header">
//             <img src={productHeading} alt="heading" />
//         </div>

//         {/* Main Content */}
//         <div className="container">
//             <h1 className="text-center">Products List</h1>
//             <br></br>

//             {/* Cards Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                 {employees.map((employee) => {
//                     // ค้นหา path ของภาพจาก employee.id และ employee.img
//                     const imagePath =
//                         images[`../../assets/img/${employee.id}.${employee.img}`]?.default || "";

//                     return (
//                         <Card key={employee.id} isPressable shadow="sm">
//                             <CardBody className="flex justify-center items-center">
//                                 <Image
//                                     src={imagePath || "/images/default-image.png"}
//                                     alt={employee.name}
//                                     className="w-full object-contain h-[140px]"
//                                     radius="lg"
//                                 />
//                             </CardBody>
//                             <CardFooter className="flex flex-col items-center">
//                                 <p className="font-bold">{employee.name}</p>
//                                 <p className="text-small text-default-500">
//                                     {employee.type_name}
//                                 </p>
//                             </CardFooter>
//                         </Card>
//                     );
//                 })}
//             </div>
//         </div>
//     </>
// );
// }

// export default EmployeeList;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import productHeading from "../../assets/products/product_heading.png";

const EmployeeList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // ดึงข้อมูลสินค้า
        axios
            .get("API_URL.FETCH_DATA") // URL ของ API
            .then((response) => {
                setProducts(response.data); // บันทึกข้อมูลสินค้า
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="container-img-header">
                <img src={productHeading} alt="heading" />
            </div>

            {/* Main Content */}
            <div className="container">
                <h1 className="text-center">Products List</h1>
                <br />

                {/* Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <Card key={product.id} isPressable shadow="sm">
                            <CardBody className="flex justify-center items-center">
                                <Image
                                    src={product.image || "/images/default-image.png"}
                                    alt={product.name}
                                    className="w-full object-contain h-[140px]"
                                    radius="lg"
                                />
                            </CardBody>
                            <CardFooter className="flex flex-col items-center">
                                <p className="font-bold">{product.name}</p>
                                <p className="text-small text-default-500">
                                    {product.installation_type} - {product.screen_size}
                                </p>
                                <p className="text-small text-default-500">
                                    {product.resolution}, {product.brightness} nits
                                </p>
                                <p className="text-small text-default-500">
                                    ฿{product.price}
                                </p>
                                <p
                                    className={`text-sm ${
                                        product.status === "In Stock"
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {product.status}
                                </p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default EmployeeList;
