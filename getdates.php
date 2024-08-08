<?php

// Assuming you have already established a connection to your MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$database = "app_devolopment"; // Corrected typo

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch unique dates for a specific userId from the database
$userId = $_GET['userId']; // Assuming userId is sent as a query parameter
$sql = "SELECT DISTINCT DT FROM sectiona WHERE userid = $userId ORDER BY DT ASC";
$result = $conn->query($sql);

$dates = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        // Optionally, you can convert the varchar date to a specific format
        // For example, if the date is stored as 'YYYY-MM-DD HH:MM:SS', you can use:
        // $formattedDate = date('Y-m-d', strtotime($row['date_column']));
        $dates[] = $row['DT'];
    }
}

// Close the database connection
$conn->close();

// Return dates as JSON
echo json_encode($dates);
?>
