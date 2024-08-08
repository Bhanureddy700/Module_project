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

// Get userId and date from the query parameters
$userId = $_GET['userId'];
$date = $_GET['date'];

// Fetch question scores and answers for the given userId and date
$sql = "SELECT Q1, Q2, Q3, Q4, Q5, Q6, Q7, A1, A2, A3, A4, A5, A6, A7 FROM sectiona WHERE userid = '$userId' AND DT = '$date'";
$result = $conn->query($sql);

$responses = array();
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Assuming the columns are ordered in the same way in the database
    for ($i = 1; $i <= 7; $i++) {
        $responses[] = array(
            'question' => "Q$i",
            'score' => $row["Q$i"],
            'answer' => $row["A$i"]
        );
    }
}

// Close the database connection
$conn->close();

// Return responses as JSON
echo json_encode($responses);
?>
