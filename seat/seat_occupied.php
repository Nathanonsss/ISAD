<?php
// Replace these with your actual database credentials
$servername = "localhost";
$username = "root";
$password = "";
$database = "cinema_db";

// Create a database connection
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to retrieve occupied seat IDs
$sql = "SELECT seat_id FROM seat WHERE status = 'occupied' AND show_id = ''";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $occupiedSeats = array();
    while ($row = $result->fetch_assoc()) {
        $occupiedSeats[] = $row["seat_id"];
    }
} else {
    $occupiedSeats = array(); // Empty array if no seats are occupied
}

// Close the database connection
$conn->close();

// Echo the occupied seat IDs as a JSON object
echo json_encode($occupiedSeats);
?>