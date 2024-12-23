<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // อนุญาตการเชื่อมต่อจาก React

include 'db_config.php'; // นำเข้าการตั้งค่าฐานข้อมูล

$sql = "SELECT emp_id, emp_name, emp_last, emp_phone, emp_email FROM employees"; // แทนที่ users ด้วยชื่อ table ของคุณ
$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
echo json_encode($data);
$conn->close();
?>
