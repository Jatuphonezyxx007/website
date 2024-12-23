import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "@nextui-org/react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // ตรวจสอบค่า username และ password กับ backend
            const response = await axios.post("http://localhost/your_api/login", {
                username,
                password, // ส่ง plain-text password
            });

            if (response.data.success) {
                // ถ้าเข้าสู่ระบบสำเร็จ
                navigate("/dashboard");
            } else {
                // ถ้า username หรือ password ไม่ถูกต้อง
                setError("Username หรือ Password ไม่ถูกต้อง");
            }
        } catch (err) {
            console.error(err);
            setError("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
        }
    };

    return (
        <div style={styles.container}>
            {error && (
                <Alert
                    color="danger"
                    title="เกิดข้อผิดพลาด"
                    closable
                    onClose={() => setError(null)}
                >
                    {error}
                </Alert>
            )}
            <form onSubmit={handleLogin} style={styles.form}>
                <h2 style={styles.title}>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Login
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
    },
    form: {
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        width: "300px",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ddd",
        borderRadius: "4px",
    },
    button: {
        width: "100%",
        padding: "10px",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "#007bff",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
    },
};

export default Login;
