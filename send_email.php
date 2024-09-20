<?php
header('Content-Type: text/html; charset=UTF-8');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if (!empty($name) && !empty($email) && !empty($message)) {
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'TEST EMAIL';
            $mail->Password = 'EMAIL PASSWORD';  
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;
				$mail->CharSet = "utf-8";


            $mail->setFrom($email, $name);
            $mail->addAddress('TEST EMAIL');


            $mail->isHTML(true);
            $mail->Subject = 'Message from the feedback form';
            $mail->Body = "Name: $name<br>Email: $email<br>Message: $message";

            $mail->send();

				header('Location: pages/thanks.html');
        } catch (Exception $e) {
			echo "<h1>Error when sending the letter: {$mail->ErrorInfo}</h1>
			<p>Please enter a valid email: example@gmail.com</p>
			<a href='" . $_SERVER['HTTP_REFERER'] . "'>Go back</a>";
        }
    } 
} else {
    echo 'Invalid query method.';
}
