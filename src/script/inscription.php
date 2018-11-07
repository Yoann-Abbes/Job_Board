<?php

include 'connexionbdd.php';

header("Content-type: application/json; charset=utf-8");


$people_username = $_POST['people_username'];
$people_password = md5($_POST['people_password']);

$people_lastname = $_POST['people_lastname'];
$people_firstname =$_POST['people_firstname'];
$people_email= $_POST['people_email'];
$people_number = $_POST['people_number'];

$chain = "INSERT INTO people (people_username, people_password, people_lastname, people_firstname, people_email, people_number) VALUES ('$people_username', '$people_password', '$people_lastname', '$people_firstname', '$people_email', '$people_number')";

if($bdd->query($chain)){
	echo json_encode($chain);
	http_response_code(200);
}
else {
	echo json_encode($chain);
	http_response_code(400);
}

?>
