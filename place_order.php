<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ecommerce";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle POST request
$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $name = $data['name'];
    $address = $data['address'];
    $product_name = $data['product_name'];
    $price = $data['price'];
    $payment_method = $data['payment_method'];

    // Insert order into database
    $stmt = $conn->prepare("INSERT INTO orders (name, address, product_name, price, payment_method) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssds", $name, $address, $product_name, $price, $payment_method);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Order placed successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to place the order."]);
    }

    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
}

$conn->close();
?>
