import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../api";

const DataList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(API_URL.FETCH_DATA)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Data from PHP</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.emp_id}>
                        {item.emp_name} {item.emp_last} - {item.emp_phone} , {item.emp_email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataList;
