<?php header("Location: http://spencernelson.online/thankyou.html");
  if($_POST) {
    print_r($_POST);

    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $email = $_POST["email"];
    $message = wordwrap($_POST["message"], 70);

    mail("kaydenvanrijnps@gmail.com", "ASDF", "Nigga");
  }
?>