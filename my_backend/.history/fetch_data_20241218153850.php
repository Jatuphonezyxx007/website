<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // อนุญาตการเชื่อมต่อจาก React

include 'db_config.php'; // นำเข้าการตั้งค่าฐานข้อมูล

$sql = "SELECT o.id, o.barcode, o.name, p.type_name, o.status FROM orders o inner join paymethod p on o.type_id = p.type_id"; // แทนที่ users ด้วยชื่อ table ของคุณ
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
