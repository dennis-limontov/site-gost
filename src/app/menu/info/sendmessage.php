<?php
$sendto   = "gost@gost.gomel.by"; //where to send
$usermail = ""; //from whom 
$usermail1 = $_POST['email1'];
$username = $_POST['name'];
$userphone = $_POST['phone'];
$content  = nl2br($_POST['msg']);
$date = date("Y-m-d H:i:s");
//IP
$client  = @$_SERVER['HTTP_CLIENT_IP'];
$forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
$remote  = @$_SERVER['REMOTE_ADDR']; 
if(filter_var($client, FILTER_VALIDATE_IP)) $ip = $client;
elseif(filter_var($forward, FILTER_VALIDATE_IP)) $ip = $forward;
else $ip = $remote;
//IP
// The title of the letter
$subject  = "Новое сообщение с сайта";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Body of the letter 
$msg  = "<html><body style='font-family:Source Sans Pro;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Привет! Опять кто-то написал с сайта:)</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Номер телефона:</strong> ".$userphone."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$usermail1."</p>\r\n";
$msg .= "<p><strong>Сообщение:</strong> ".$content."</p>\r\n";
$msg .= "<p><strong>IP клиента:</strong> ".$ip."</p>\r\n";
$msg .= "<p><strong>Дата и время отправки меседжа:</strong> ".$date."</p>\r\n";

$msg .= "</body></html>";

// Send massage
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>