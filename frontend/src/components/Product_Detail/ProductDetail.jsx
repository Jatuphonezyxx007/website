// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"; // ใช้ useParams สำหรับดึงข้อมูลจาก URL
// import axios from "axios";
// import { API_URL } from "../../api"; // ใช้ API_URL จากไฟล์ api.js

// import "./ProductDetail.css"; // นำเข้าไฟล์ CSS ที่สร้างขึ้น

// const ProductDetail = () => {
//     const { id } = useParams(); // ดึง id จาก URL
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProductDetail = async () => {
//             try {
//                 const response = await axios.get(`${API_URL.FETCH_DATA}/${id}`);
//                 setProduct(response.data);
//             } catch (error) {
//                 console.error("Error fetching product detail:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProductDetail();
//     }, [id]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <>


// <div class="container mx-auto px-4 py-8">
//   <div class="grid grid-cols-12 gap-6">
//     <div class="col-span-8">
//       <img
//         id="main-image"
//         class="w-full h-auto object-cover"
//         src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//         alt="p-1"
//       />
//     </div>

//     <div class="col-span-4">
//       <div class="mb-4">
//         <h2 class="text-xl font-bold">รายละเอียดสินค้า</h2>
//         <p class="text-gray-600">รายละเอียดเพิ่มเติมของสินค้าจะอยู่ที่นี่</p>
//       </div>
//     </div>
//   </div>

//   <div class="mt-6 grid grid-cols-4 gap-4">
//     <img
//       class="w-full h-auto object-cover cursor-pointer"
//       src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//       alt="thumb-1"
//       onclick="changeMainImage(this)"
//     />
//     <img
//       class="w-full h-auto object-cover cursor-pointer"
//       src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//       alt="thumb-2"
//       onclick="changeMainImage(this)"
//     />
//     <img
//       class="w-full h-auto object-cover cursor-pointer"
//       src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//       alt="thumb-3"
//       onclick="changeMainImage(this)"
//     />
//     <img
//       class="w-full h-auto object-cover cursor-pointer"
//       src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//       alt="thumb-4"
//       onclick="changeMainImage(this)"
//     />
//   </div>
// </div>
        
//         </>
//     );
// };




// export default ProductDetail;






// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"; 
// import axios from "axios"; 
// import { API_URL } from "../../api"; 

// import "./ProductDetail.css"; 

// const ProductDetail = () => {
//     const { id } = useParams(); 
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [mainImage, setMainImage] = useState(""); 

//     useEffect(() => {
//         const fetchProductDetail = async () => {
//             try {
//                 const response = await axios.get(`${API_URL.FETCH_DATA}/${id}`);
//                 setProduct(response.data);
//                 setMainImage(response.data.image || ""); 
//             } catch (error) {
//                 console.error("Error fetching product detail:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProductDetail();
//     }, [id]);

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     const changeMainImage = (imageUrl) => {
//         setMainImage(imageUrl); 
//     };

//     return (
//         <>
//             <div className="container mx-auto px-4 py-8">
//                 <div className="grid grid-cols-12 gap-6">
//                     <div className="col-span-8">
//                         <img
//                             id="main-image"
//                             className="main-image" // ใช้คลาส main-image ที่ได้กำหนด
//                             src={mainImage || "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"}
//                             alt="Main Product Image"
//                         />
//                     </div>

//                     <div className="col-span-4">
//                         <div class="mb-4">
//                             <h2 class="text-xl font-bold">รายละเอียดสินค้า</h2>
//                             <p class="text-gray-600">รายละเอียดเพิ่มเติมของสินค้าจะอยู่ที่นี่</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="image-gallery mt-6 grid grid-cols-4 gap-4">
//                     {product.images && product.images.map((image, index) => (
//                         <img
//                             key={index}
//                             className="thumbnail-image"
//                             src={image}
//                             alt={`thumb-${index + 1}`}
//                             onClick={() => changeMainImage(image)}
//                         />
//                     ))}
//                 </div>
                



//             </div>

            
//         </>
//     );
// };

// export default ProductDetail;





// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { API_URL } from "../../api";
// import "./ProductDetail.css";

// const ProductDetail = () => {
//     const { id } = useParams(); // ดึง ID ของสินค้าจาก URL
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [mainImage, setMainImage] = useState(""); // กำหนด state สำหรับภาพหลัก

//     // ดึงข้อมูลสินค้าจาก API
//     useEffect(() => {
//         const fetchProductDetail = async () => {
//             try {
//                 const response = await axios.get(`${API_URL.FETCH_DATA}/${id}`);
//                 setProduct(response.data); // เก็บข้อมูลสินค้าใน state
//                 setMainImage(response.data.image || ""); // ตั้งค่าภาพหลัก
//             } catch (error) {
//                 console.error("Error fetching product detail:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProductDetail();
//     }, [id]);

//     if (loading) {
//         return <p>Loading...</p>; // แสดงข้อความกำลังโหลด
//     }

//     const changeMainImage = (imageUrl) => {
//         setMainImage(imageUrl); // เปลี่ยนภาพหลักเมื่อผู้ใช้คลิกที่ภาพย่อย
//     };

//     return (
//         <>
//             <div className="container mx-auto px-4 py-8">
//                 <div className="grid grid-cols-12 gap-6">
//                     <div className="col-span-8">
//                         <img
//                             id="main-image"
//                             className="main-image" // ใช้คลาส main-image ที่ได้กำหนด
//                             src={mainImage || "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"} // ใช้ค่า default หากไม่มีภาพหลัก
//                             alt="Main Product Image"
//                         />
//                     </div>

//                     <div className="col-span-4">
//                         <div className="mb-4">
//                             <h2 className="text-xl font-bold">{product.name}</h2>
//                             <p className="text-gray-600">{product.description}</p> {/* แสดงรายละเอียดสินค้า */}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="image-gallery mt-6 grid grid-cols-4 gap-4">
//                     {product.images && product.images.map((image, index) => (
//                         <img
//                             key={index}
//                             className="thumbnail-image"
//                             src={image}
//                             alt={`thumb-${index + 1}`}
//                             onClick={() => changeMainImage(image)} // เมื่อคลิกที่ภาพย่อย จะเปลี่ยนภาพหลัก
//                         />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ProductDetail;





import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../api";
import "./ProductDetail.css";

const ProductDetail = () => {
    const { id } = useParams(); // ดึง id ของสินค้าใน URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState(""); // กำหนด state สำหรับภาพหลัก

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(`${API_URL.FETCH_DATA}/${id}`);
                setProduct(response.data); // เก็บข้อมูลสินค้าใน state
                setMainImage(response.data.image || ""); // ตั้งค่าภาพหลัก
            } catch (error) {
                console.error("Error fetching product detail:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>; // แสดงข้อความกำลังโหลด
    }

    const changeMainImage = (imageUrl) => {
        setMainImage(imageUrl); // เปลี่ยนภาพหลักเมื่อผู้ใช้คลิกที่ภาพย่อย
    };

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-8">
                        <img
                            id="main-image"
                            className="main-image" // ใช้คลาส main-image ที่ได้กำหนด
                            src={mainImage || "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"} // ใช้ค่า default หากไม่มีภาพหลัก
                            alt="Main Product Image"
                        />
                    </div>

                    <div className="col-span-4">
                        <div className="mb-4">
                            <article class="text-pretty ...">
                                <h3 className="text-bold">Beloved Manhattan soup stand closes</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </article>
                        </div>
                    </div>
                </div>

                <div className="image-gallery mt-6 grid grid-cols-4 gap-4">
                    {product.images && product.images.map((image, index) => (
                        <img
                            key={index}
                            className="thumbnail-image"
                            src={image}
                            alt={`thumb-${index + 1}`}
                            onClick={() => changeMainImage(image)} // เมื่อคลิกที่ภาพย่อย จะเปลี่ยนภาพหลัก
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductDetail;



