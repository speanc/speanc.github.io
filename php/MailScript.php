<?php header("Location: http://spencernelson.online/thankyou.html");
  if($_POST) {
    print_r($_POST);

    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    mail("spencer.nelsongd@gmail.com", "$fname $lname sent you a message on 'Spencer Nelson Online'", "$message");
  }
?>