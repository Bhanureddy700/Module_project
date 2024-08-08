<?php
$conn=mysqli_connect("localhost","root","","app_devolopment");
if($conn->connect_error){
    die("Connection failed ".$conn->connect_error);
}
else{
    echo "successfulll";
}
?>
