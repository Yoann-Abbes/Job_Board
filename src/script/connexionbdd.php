<?php
header("Content-type: application/json; charset=utf-8");

//*******************CONNEXION BDD *********************//
$dsn = 'mysql:dbname=Job_board;host=127.0.0.1';
$user = 'root';
$password = 'root';

try {
	$bdd = new PDO($dsn, $user, $password);

} catch (PDOException $e) {
	echo 'Connexion échouée : ' . $e->getMessage();
}

?>
