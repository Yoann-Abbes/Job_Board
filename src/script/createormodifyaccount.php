<?php
header("Content-type: application/json; charset=utf-8");

//*******************CONNEXION BDD *********************//

include 'connexionbdd.php';

$username = $_GET['Id'];
//********************RECUPERATION Company
// echo $username;
$resultats = $bdd->query("SELECT * FROM people WHERE people_username = '$username'");


$i=0;
$table=array( 'Id' => array(),  'Lastname' => array(),  'Firstname' => array(),  'Email' => array(),  'Number' => array(), 'Admin' =>array());
$pass=array('Password'=> array());
while ($donnees = $resultats->fetch())
{
	$table['Id'][$i] = $donnees[people_username];
	$pass['Password'][$i]= $donnees[people_password];
	$table['Lastname'][$i] = $donnees[people_lastname];
	$table['Firstname'][$i] = $donnees[people_firstname];
	$table['Email'][$i] = $donnees[people_email];
	$table['Number'][$i] = $donnees[people_number];
	$table['Admin'][$i] = $donnees[people_admin];
	$i++;
}
$resultats->closeCursor();


// echo json_decode($_GET['Password']);
if($_GET['Password']===$pass['Password'][0]){
	$_SESSION['Admin']=$table['Admin'][0];
	$_SESSION['Lastname']=$table['Lastname'][0];
	$_SESSION['Firstname']=$table['Firstname'][0];
	$_SESSION['Email']=$table['Email'][0];
	$_SESSION['Number']=$table['Number'][0];
	$_SESSION['Username']=$table['Id'][0];
	echo json_encode($table);
	http_response_code(200);
}
else{
	echo json_encode(false);
	http_response_code(401);
}
?>
