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



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { API_URL } from "../../api"; // ใช้ API_URL จากไฟล์ api.js
// import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// import productHeading from "../../assets/products/product_heading.png";

// const EmployeeList = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get(API_URL.FETCH_DATA); // ใช้ API_URL.FETCH_DATA
//                 setProducts(response.data); // บันทึกข้อมูลสินค้า
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <>
//             <div className="container-img-header">
//                 <img src={productHeading} alt="heading" />
//             </div>

//             {/* Main Content */}
//             <div className="container">
//                 <p className="text-start">{product.name || "Unnamed Product"}</p>
//                 <br />

//                 {/* Cards Grid */}
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                     {products.map((product) => (
//                         <Card key={product.id} isPressable shadow="sm">
//                             <CardBody className="flex justify-center items-center">
//                             <Image src={`/uploads/products${product.image_path}` || "/images/default-image.png"}
//                             alt={product.name || "Unnamed Product"}
//                             className="w-full object-contain h-[140px]"
//                             radius="lg"
//                             />

//                             </CardBody>
//                             <CardFooter className="flex flex-col items-center">
//                                 <p className="font-bold">{product.name || "Unnamed Product"}</p>
//                                 <p className="text-small text-default-500">
//                                     {product.installation_type || "Unknown"} - {product.screen_size || "Unknown"}
//                                 </p>
//                                 <p className="text-small text-default-500">
//                                     {product.resolution || "Unknown"}, {product.brightness || 0} nits
//                                 </p>
//                                 <p className="text-small text-default-500">
//                                     ฿{product.price || 0}
//                                 </p>
//                                 <p
//                                     className={`text-sm ${
//                                         product.status === "In Stock"
//                                             ? "text-green-500"
//                                             : "text-red-500"
//                                     }`}
//                                 >
//                                     {product.status || "Unknown"}
//                                 </p>
//                             </CardFooter>
//                         </Card>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default EmployeeList;






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { API_URL } from "../../api"; // ใช้ API_URL จากไฟล์ api.js
// import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// import productHeading from "../../assets/products/product_heading.png";

// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // ดึงข้อมูลสินค้า
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get(API_URL.FETCH_DATA);
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     // จัดกลุ่มสินค้าตามประเภท
//     const groupedProducts = products.reduce((acc, product) => {
//         const category = product.category_name || "Uncategorized"; // กำหนดชื่อหมวดหมู่
//         if (!acc[category]) {
//             acc[category] = [];
//         }
//         acc[category].push(product);
//         return acc;
//     }, {});

//     return (
//         <>
//             <div className="container-img-header">
//                 <img src={productHeading} alt="heading" />
//             </div>
//             <br></br>

//             {/* Main Content */}
//             <div className="container">
//                 {Object.keys(groupedProducts).map((category) => (
//                     <div key={category} className="mb-8">
//                         {/* ชื่อหมวดหมู่ */}
//                         <h2 className="text-2xl font-bold mb-4">{category}</h2>

//                         <br></br>
//                         {/* รายการสินค้าในหมวดหมู่ */}
//                         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                             {groupedProducts[category].map((product) => (
//                                 <Card key={product.id} isPressable shadow="sm">
//                                     <CardBody className="flex justify-center items-center">
//                                         <Image
//                                             src={`/uploads/products${product.image_path}` || "/images/default-image.png"}
//                                             alt={product.name || "Unnamed Product"}
//                                             className="w-full object-contain h-[140px]"
//                                             radius="lg"
//                                         />
//                                     </CardBody>
//                                     <CardFooter className="flex flex-col items-center">
//                                         <p className="font-bold">{product.name || "Unnamed Product"}</p>
//                                         <p className="text-small text-default-500">
//                                             {product.installation_type || "Unknown"} - {product.screen_size || "Unknown"}
//                                         </p>
//                                         <p className="text-small text-default-500">
//                                             {product.resolution || "Unknown"}, {product.brightness || 0} nits
//                                         </p>
//                                         <p className="text-small text-default-500">
//                                             ฿{product.price || 0}
//                                         </p>
//                                         <p
//                                             className={`text-sm ${
//                                                 product.status === "In Stock"
//                                                     ? "text-green-500"
//                                                     : "text-red-500"
//                                             }`}
//                                         >
//                                             {product.status || "Unknown"}
//                                         </p>
//                                     </CardFooter>
//                                 </Card>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default ProductList;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { API_URL } from "../../api"; // ใช้ API_URL จากไฟล์ api.js
// import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// import productHeading from "../../assets/products/product_heading.png";

// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
    

//     // ดึงข้อมูลสินค้า
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get(API_URL.FETCH_DATA);
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     // จัดกลุ่มสินค้าตามประเภท
//     const groupedProducts = products.reduce((acc, product) => {
//         const category = product.category_name || "Uncategorized"; // กำหนดชื่อหมวดหมู่
//         if (!acc[category]) {
//             acc[category] = [];
//         }
//         acc[category].push(product);
//         return acc;
//     }, {});

//     return (
//         <>

//         <br></br>
//             {/* Main Content */}
//             <div className="container flex gap-8">
//                 {/* Filter Form */}
//                 <div className="w-1/4 p-4 border rounded shadow-md bg-white">
//                     <h3 className="text-xl font-bold mb-4">Filter Products</h3>
//                     <form>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-2">Category</label>
//                             <select className="w-full border rounded px-3 py-2">
//                                 <option value="">All Categories</option>
//                                 <option value="Category1">Category 1</option>
//                                 <option value="Category2">Category 2</option>
//                             </select>
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-2">Price Range</label>
//                             <div className="flex gap-2">
//                                 <input
//                                     type="number"
//                                     className="w-1/2 border rounded px-3 py-2"
//                                     placeholder="Min"
//                                 />
//                                 <input
//                                     type="number"
//                                     className="w-1/2 border rounded px-3 py-2"
//                                     placeholder="Max"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium mb-2">Status</label>
//                             <select className="w-full border rounded px-3 py-2">
//                                 <option value="">All Statuses</option>
//                                 <option value="In Stock">In Stock</option>
//                                 <option value="Out of Stock">Out of Stock</option>
//                             </select>
//                         </div>
//                         <button
//                             type="button"
//                             className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//                         >
//                             Apply Filters
//                         </button>
//                     </form>
//                 </div>

//                 {/* Product List */}
//                 <div className="w-3/4">
//                     {Object.keys(groupedProducts).map((category) => (
//                         <div key={category} className="mb-8">
//                             {/* ชื่อหมวดหมู่ */}
//                             <h2 className="text-2xl font-bold mb-4">{category}</h2>
//                             <br />
//                             {/* รายการสินค้าในหมวดหมู่ */}
//                             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                                 {groupedProducts[category].map((product) => (
//                                     <Card key={product.id} isPressable shadow="sm">
//                                         <CardBody className="flex justify-center items-center">
//                                             <Image
//                                                 src={`/uploads/products${product.image_path}` || "/images/default-image.png"}
//                                                 alt={product.name || "Unnamed Product"}
//                                                 className="w-full object-contain h-[140px]"
//                                                 radius="lg"
//                                             />
//                                         </CardBody>
//                                         <CardFooter className="flex flex-col items-center">
//                                             <p className="font-bold">{product.name || "Unnamed Product"}</p>
//                                             <p className="text-small text-default-500">
//                                                 {product.installation_type || "Unknown"} - {product.screen_size || "Unknown"}
//                                             </p>
//                                             <p className="text-small text-default-500">
//                                                 {product.resolution || "Unknown"}, {product.brightness || 0} nits
//                                             </p>
//                                             <p className="text-small text-default-500"> ฿ {(parseFloat(product.price) || 0).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
//                                             <p
//                                                 className={`text-sm ${
//                                                     product.status === "In Stock" ? "text-green-500" : "text-red-500"
//                                                 }`}
//                                             >
//                                                 {product.status || "Unknown"}
//                                             </p>
//                                         </CardFooter>
//                                     </Card>

//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ProductList;





import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../api"; // ใช้ API_URL จากไฟล์ api.js
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom"; // ใช้ useNavigate สำหรับการเปลี่ยนเส้นทาง

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนเส้นทาง

    // ดึงข้อมูลสินค้า
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(API_URL.FETCH_DATA);
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    // จัดกลุ่มสินค้าตามประเภท
    const groupedProducts = products.reduce((acc, product) => {
        const category = product.category_name || "Uncategorized"; // กำหนดชื่อหมวดหมู่
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // เปลี่ยนเส้นทางไปที่หน้ารายละเอียดสินค้า
    };

    return (

        <>


                <br></br>
            {/* Main Content */}
            <div className="container flex gap-8">
                {/* Filter Form */}
                <div className="w-1/4 p-4 border rounded shadow-md bg-white">
                    <h3 className="text-xl font-bold mb-4">Filter Products</h3>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Category</label>
                            <select className="w-full border rounded px-3 py-2">
                                <option value="">All Categories</option>
                                <option value="Category1">Category 1</option>
                                <option value="Category2">Category 2</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Price Range</label>
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    className="w-1/2 border rounded px-3 py-2"
                                    placeholder="Min"
                                />
                                <input
                                    type="number"
                                    className="w-1/2 border rounded px-3 py-2"
                                    placeholder="Max"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Status</label>
                            <select className="w-full border rounded px-3 py-2">
                                <option value="">All Statuses</option>
                                <option value="In Stock">In Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                            </select>
                        </div>
                        <button
                            type="button"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Apply Filters
                        </button>
                    </form>
                </div>
                


        
        {/* <div className="container flex gap-8"> */}
            <div className="w-3/4">
                {Object.keys(groupedProducts).map((category) => (
                    <div key={category} className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">{category}</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {groupedProducts[category].map((product) => (
                                <Card
                                    key={product.id}
                                    isPressable
                                    shadow="sm"
                                    onClick={() => handleProductClick(product.id)} // เมื่อคลิกที่ card
                                >
                                    <CardBody className="flex justify-center items-center">
                                        <Image
                                            src={`/uploads/products${product.image_path}` || "/images/default-image.png"}
                                            alt={product.name || "Unnamed Product"}
                                            className="w-full object-contain h-[140px]"
                                            radius="lg"
                                        />
                                    </CardBody>
                                    <CardFooter className="flex flex-col items-center">
                                        <p className="font-bold">{product.name || "Unnamed Product"}</p>
                                        <p className="text-small text-default-500">
                                            {product.installation_type || "Unknown"} - {product.screen_size || "Unknown"}
                                        </p>
                                        <p className="text-small text-default-500">
                                            {product.resolution || "Unknown"}, {product.brightness || 0} nits
                                        </p>
                                        <p className="text-small text-default-500">฿{(parseFloat(product.price) || 0).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                        <p
                                            className={`text-sm ${product.status === "In Stock" ? "text-green-500" : "text-red-500"}`}
                                        >
                                            {product.status || "Unknown"}
                                        </p>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div> 
        </>
    );
};

export default ProductList;


