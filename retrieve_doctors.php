<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "app_devolopment"; // Corrected the database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL query to fetch all DTID
$sql = "SELECT DTID FROM admindt";
$result = $conn->query($sql);

$response = array();

if ($result->num_rows > 0) {
    // Fetch all DTID and add to response array
    while($row = $result->fetch_assoc()) {
        $response[] = $row;
    }
}

// Close connection
$conn->close();

// Return response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
