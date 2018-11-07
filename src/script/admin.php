<?php
header("Content-type: application/json; charset=utf-8");

//*******************CONNEXION BDD *********************//
include 'connexionbdd.php';


$table=array( 'ad_id' => array(),'ad_comp_id' => array(), 'ad_title' => array(),'ad_description' => array(),
	'comp_id' => array(), 'comp_name' => array(), 'comp_address' => array(), 'comp_email' => array(), 
	'people_username' => array(), 'people_password' => array(), 'people_lastname' => array(), 'people_firstname' => array(),
	 'people_email' => array(), 'people_number' => array(), 'people_id' => array() ,'people_admin' => array(), 'apply_message' => array(),

	  'apply_comp_id' => array(), 'apply_people_id' => array(), 'apply_ad_id' => array(), 'apply_id' => array()) ;


//***********************RECUPERATION Ad
$resultats = $bdd->query('SELECT * FROM ad');

$i=0;
while ($donnees = $resultats->fetch())
{
	$table['ad_id'][$i] = $donnees[ad_id];
	$table['ad_comp_id'][$i] = $donnees[ad_comp_id];
	$table['ad_title'][$i] = $donnees[ad_title];
	$table['ad_description'][$i] = $donnees[ad_description];
	$i++;
}
$resultats->closeCursor();



//********************RECUPERATION Company
$resultats = $bdd->query('SELECT * FROM comp');

$i=0;

while ($donnees = $resultats->fetch())
{

	$table['comp_id'][$i] = $donnees[comp_id];
	$table['comp_name'][$i] = $donnees[comp_name];
	$table['comp_address'][$i] = $donnees[comp_address];
	$table['comp_email'][$i] = $donnees[comp_email];
	$i++;
}
$resultats->closeCursor();


//********************RECUPERATION People
$resultats = $bdd->query('SELECT * FROM people');

$i=0;
while ($donnees = $resultats->fetch())
{

	$table['people_id'][$i] = $donnees[people_id];
	$table['people_username'][$i] = $donnees[people_username];
	$table['people_password'][$i] = md5($donnees[people_password]);
	$table['people_lastname'][$i] = $donnees[people_lastname];
	$table['people_firstname'][$i] = $donnees[people_firstname];
	$table['people_email'][$i] = $donnees[people_email];
	$table['people_number'][$i] = $donnees[people_number];
	$table['people_admin'][$i] = $donnees[people_admin];

	$i++;
}


//***********************RECUPERATION Job
$resultats = $bdd->query('SELECT * FROM apply');

$i=0;
while ($donnees = $resultats->fetch())
{
	$table['apply_id'][$i] = $donnees[apply_id];
	$table['apply_message'][$i] = $donnees[apply_message];
	$table['apply_comp_id'][$i] = $donnees[apply_comp_id];
	$table['apply_ad_id'][$i] = $donnees[apply_ad_id];
	$table['apply_people_id'][$i] = $donnees[apply_people_id];
	$i++;
}
$resultats->closeCursor();

echo json_encode($table);

?>
