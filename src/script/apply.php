<?php
header("Content-type: application/json; charset=utf-8");

//*******************CONNEXION BDD *********************//
include 'connexionbdd.php';





$people_lastname = $_POST['people_lastname'];
$people_firstname = $_POST['people_firstname'];
$people_email = $_POST['people_email'];
$people_number = $_POST['people_number'];




if ($_POST['type'] === '0')
{
	$ad_id = $_POST['ad_id'];

	$resultat = $bdd->query("SELECT ad_comp_id FROM ad WHERE ad_id='$ad_id'");
	while($donnees = $resultat->fetch()){
		$ad_comp_id = $donnees[ad_comp_id];
	}
	$resultat->closeCursor();
	$apply_message = str_replace("'","''",$_POST['apply_message']);
	$apply_message = str_replace(":", "\\:",$apply_message);
	$apply_message = str_replace("+", "\\+",$apply_message);
	$apply_message = str_replace("@", "\\@",$apply_message);



	$result =  $bdd->query("INSERT INTO people (people_lastname, people_firstname, people_email, people_number) VALUES ('$people_lastname', '$people_firstname', '$people_email', '$people_number')");
	
	$resultat=$bdd->query("SELECT people_id FROM people WHERE people_email='$people_email'");
	while($donnees = $resultat->fetch()){
		$people_id = $donnees[people_id];
	}

	$result =  $bdd->query("INSERT INTO apply (apply_comp_id, apply_people_id, apply_message, apply_ad_id)  VALUES ('$ad_comp_id','$people_id','$apply_message','$ad_id')");
}

if ($_POST['type'] === '1')
{
	$people_id = $_POST['people_id'];
	$ad_id = $_POST['ad_id'];

	$resultat=$bdd->query("SELECT ad_comp_id FROM ad WHERE ad_id='$ad_id'");
	while($donnees = $resultat->fetch()){
		$ad_comp_id = $donnees[ad_comp_id];
	}
	$resultat->closeCursor();
	$apply_message = str_replace("'","''",$_POST['apply_message']);
	$apply_message = str_replace(":", "\\:",$apply_message);
	$apply_message = str_replace("+", "\\+",$apply_message);
	$apply_message = str_replace("@", "\\@",$apply_message);
	
	$result =  $bdd->query("INSERT INTO apply ( apply_comp_id, apply_people_id, apply_message, apply_ad_id)  VALUES ('$ad_comp_id','$people_id','$apply_message','$ad_id')");
	
}

$resultat = $bdd->query("SELECT comp_email FROM comp WHERE comp_id = '$ad_comp_id'");
while($donnees = $resultat->fetch()){
		$comp_email = $donnees[comp_email];
	}
// TODO SEND MAIL AFTER BEING ONLINE

$subject = 'Someone applied to your ad';
$message = 'Bonjour, <br>'.$people_lastname.' '.$people_firstname.' à postulé en vous laissant le message suivant: <br>"'.$apply_message.'"<br>'.'Vous pouvez lui répondre à l\'adresse suivante : '.$people_email;

mail($comp_email, $subject, $message, 'Content-type: text/html');
echo json_encode($resultat);
?>

