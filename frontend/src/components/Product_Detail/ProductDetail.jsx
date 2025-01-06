import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // ใช้ useParams สำหรับดึงข้อมูลจาก URL
import axios from "axios";
import { API_URL } from "../../api"; // ใช้ API_URL จากไฟล์ api.js

const ProductDetail = () => {
    const { id } = useParams(); // ดึง id จาก URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(`${API_URL.FETCH_DATA}/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product detail:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            {/* แสดงรายละเอียดสินค้าเพิ่มเติมที่ต้องการ */}
        </div>
    );
};

export default ProductDetail;
