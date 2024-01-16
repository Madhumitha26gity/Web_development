<?php
session_start();

if (isset($_POST['update'])) {
    $db_hostname = "127.0.0.1";
    $db_username = "root";
    $db_password = "";
    $db_name = "pms";

    $conn = mysqli_connect($db_hostname, $db_username, $db_password, $db_name);
    if (!$conn) {
        echo "Connection failed: " . mysqli_connect_error();
        exit;
    }

    $email = $_POST['email'];
    $name = $_POST['name'];
    $qualification = $_POST['qualification'];
    $domain = $_POST['domain'];
    $city = $_POST['city'];
    $phone = $_POST["phone"];
    $new_password = $_POST['new_password'];
    $confirm_password = $_POST['confirm_password'];

    $sql = "UPDATE users SET name='$name', 
            qualification='$qualification',
            domain='$domain', 
            city='$city', 
            phone='$phone' ,
            new_password='$new_password',
            confirm_password='$confirm_password'  
            WHERE email='$email'";

    $result = mysqli_query($conn, $sql);
    if (!$result) {
        echo "Error: " . mysqli_error($conn);
        exit;
    } 
    mysqli_close($conn);
}
echo '<script>alert("Updated Successful");</script>';
    header('Location: update_profile.html');

?>