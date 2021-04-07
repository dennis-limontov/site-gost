<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './Exception.php';
require './PHPMailer.php';
require './SMTP.php';

$email = new PHPMailer(true);

try {
   $mail->setFrom('darth@empire.com', 'Darth Vader');

   $mail->addAddress('piwiy62971@kindbest.com', 'Emperor');

   $mail->Subject = 'Force';

   $mail->Body = 'There is a great disturbance in the Force.';

   $mail->send();
}
catch (Exception $e)
{
   echo $e->errorMessage();
}
catch (\Exception $e)
{
   echo $e->getMessage();
}

/* $from = 'Darth Vader <darth@empire.com>';
$to = 'Emperor <piwiy62971@kindbest.com>';
$subject = 'Force';
$message = 'There is a great disturbance in the Force.';
$message .= "Name: {$_POST['name']}\r\n";
$message .= "Phone: {$_POST['phone']}";
$headers = 'Content-type: text/plain; charset=utf-8' . "\r\n";
$headers = 'From: ' . $from;

if (mail($to, $subject, $message, $headers))
{
  echo '<p style="color: green;">Your message was sent!</p>';
} else {
  echo '<p style="color: red;">Error sending message!</p>';
} */

?>
