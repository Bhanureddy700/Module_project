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
    die(json_encode(array("status" => "error", "message" => "Connection failed: " . $conn->connect_error)));
}

// Retrieve login data from POST request
$data = json_decode(file_get_contents("php://input"));

// Check if data is valid JSON
if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
    die(json_encode(array("status" => "error", "message" => "Invalid JSON data")));
}

// Extract data
$userid = $data->userid;
$password = $data->password;

// SQL query to check login credentials
$sql = "SELECT * FROM login1 WHERE userid = '$userid' AND password = '$password'";

$result = $conn->query($sql);

if ($result === false) {
    die(json_encode(array("status" => "error", "message" => "Query execution failed: " . $conn->error)));
}

if ($result->num_rows > 0) {
    // Login successful
    echo json_encode(array("status" => "success"));
} else {
    // Login failed, check if it's a registration request
    // Check if the request is for registration
    if (isset($data->name) && isset($data->mobile) && isset($data->age) && isset($data->gender) && isset($data->address) && isset($data->doctorId)) {
        $name = $data->name;
        $mobile = $data->mobile;
        $age = $data->age;
        $gender = $data->gender;
        $address = $data->address;
        $doctorId = $data->doctorId;

        // SQL query to insert data into the database (login1 table)
        $sql = "INSERT INTO login1 (userid, name, password, mobile, age, gender, address, doctorId)
                VALUES ('$userid', '$name', '$password', '$mobile', '$age', '$gender', '$address', '$doctorId')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(array("status" => "success"));
        } else {
            echo json_encode(array("status" => "error", "message" => "Error: " . $sql . "<br>" . $conn->error));
        }
    } else {
        // Invalid request data
        die(json_encode(array("status" => "error", "message" => "Invalid request data")));
    }
}

// Close connection
$conn->close();
?>
