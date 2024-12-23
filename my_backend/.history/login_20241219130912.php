<?php
header("Content-Type: application/json");
include 'db_config.php'; // ไฟล์สำหรับเชื่อมต่อฐานข้อมูล

$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'];
$password = md5($data['password']); // เข้ารหัส MD5

$sql = "SELECT * FROM employees WHERE emp_user = ? AND emp_pwd = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid credentials"]);
}

$conn->close();
