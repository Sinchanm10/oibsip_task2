<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Send email
    $to = "sinchanmallick631@gmail.com";
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
}
?>
