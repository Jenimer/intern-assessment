<?php
  // info the visitor provides in the input fields.
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $email_from = 'mockpage@mockpage.com';

  $email_subject = 'New form submission';

  $email_body = "User Name: $name.\n".
                  "User Email: $visitor_email.\n".
                    "User Phone: $phone.\n".  
                      "User Message: $message.\n";


$to = "jeniffer.broadhead@gmail.com";

$headers = "From: $\r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html")

?>
