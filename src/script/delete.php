<?php
header("Content-type: application/json; charset=utf-8");

//*******************CONNEXION BDD *********************//

include 'connexionbdd.php';

$id = $_POST['id'];
$table = $_POST['table'];
//********************RECUPERATION Company
// echo $username;
$resultats = $bdd->query("DELETE FROM $table WHERE ".$table."_id = '$id'");
echo json_encode("DELETE FROM $table WHERE ".$table."_id = '$id'");
?>
