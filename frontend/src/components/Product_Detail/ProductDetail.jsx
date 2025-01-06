import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../api";

const ProductDetail = () => {
    const { id } = useParams(); // ดึง id จาก URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${API_URL.FETCH_DATA}/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Loading product details...</p>;
    }

    return (
        <div className="container">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <img
                src={`/uploads/products${product.image_path}` || "/images/default-image.png"}
                alt={product.name || "Unnamed Product"}
                className="w-full object-contain h-[300px] my-4"
            />
            <p>{product.description || "No description available."}</p>
            <p>Price: ฿{product.price || 0}</p>
            <p>Status: {product.status || "Unknown"}</p>
            {/* เพิ่มข้อมูลที่ต้องการ */}
        </div>
    );
};

export default ProductDetail;
