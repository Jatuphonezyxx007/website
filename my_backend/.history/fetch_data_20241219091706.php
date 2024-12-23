<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // อนุญาตการเชื่อมต่อจาก React

include 'db_config.php'; // นำเข้าการตั้งค่าฐานข้อมูล

$sql = "SELECT p.id, p.barcode, p.name, p.type_id, t.type_name, p.img, p.status FROM products p inner join type t on p.type_id = t.type_id"; // แทนที่ users ด้วยชื่อ table ของคุณ
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
