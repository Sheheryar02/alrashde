<?php

$errorMSG = "";

// NAME
if (empty($_POST["uname"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["uname"];
}

// EMAIL
if (empty($_POST["uemail"])) {
    $errorMSG .= "Email is required ";
} else {
    $uemail = $_POST["uemail"];
}

// PHONE
if (empty($_POST["unumber"])) {
    $errorMSG = "Phone is required ";
} else {
    $unumber = $_POST["unumber"];
}

// Services
if (empty($_POST["uservices"])) {
    $errorMSG = "Services is required ";
} else {
    $services = $_POST["services"];
}

// Subject
// if (empty($_POST["subject"])) {
//     $errorMSG .= "Subject is required ";
// } else {
//     $subject = $_POST["guest"];
// }
// $subject = "Contact Us Email";

// MESSAGE
if (empty($_POST["umessage"])) {
    $errorMSG .= "Message is required ";
} else {
    $umessage = $_POST["umessage"];
}


$EmailTo = "info@alrashde.com";
$Subject = "New Message Received - Contact-us";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $uname;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $uemail;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $unumber;
$Body .= "\n";
$Body .= "Services: ";
$Body .= $services;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>