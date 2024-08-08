<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "app_devolopment";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve user ID from the request URL
$userId = $_GET['userId'];

// Prepare SQL query to fetch user details based on user ID
$sql = "SELECT userid, name, mobile, gender, age, address FROM login1 WHERE userid = '$userId'";

$result = $conn->query($sql);

$response = array();

if ($result->num_rows > 0) {
    // User found, fetch user details
    $row = $result->fetch_assoc();
    
    // Close connection
    $conn->close();
    
    // Return user details as JSON response
    $response["details"] = $row; // Add user details to response
    echo json_encode($response);
} else {
    // User not found
    $response = array("status" => "error", "message" => "User not found");
    echo json_encode($response);
}

?>
