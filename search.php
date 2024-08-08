<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "app_devolopment"; // Ensure this matches your actual database name

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Step 2: Execute query to fetch top ten user IDs
$query = "SELECT userid,image FROM login1 ORDER BY userid LIMIT 10"; // Change this query according to your criteria
try {
    $statement = $pdo->query($query);
    $topUsers = $statement->fetchAll(PDO::FETCH_ASSOC);

    // Append base URL to image path
    $baseUrl = "http://192.168.180.141/bhanu/";
    foreach ($topUsers as &$user) {
        if ($user['image']) {
            $user['image'] = $baseUrl . $user['image'];
        }
    }
} catch(PDOException $e) {
    die("Query failed: " . $e->getMessage());
}

// Step 3: Return JSON response
header('Content-Type: application/json');
echo json_encode($topUsers);
?>
