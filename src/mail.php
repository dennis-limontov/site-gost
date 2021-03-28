<?php

$to = 'piwiy62971@kindbest.com';
$subject = 'Заказ обратного звонка';
$message = "Name: {$_POST['name']}\r\n";
$message .= "Phone: {$_POST['phone']}";
$headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";
$headers .= 'From: gost@gost.gomel.by' . "\r\n";

if (mail($to, $subject, $message, $headers)) {
  echo '<p style="color: green;">Your message was sent!</p>';
} else {
  echo '<p style="color: red;">Error sending message!</p>';
}
