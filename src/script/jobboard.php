<?php
header("Content-type: application/json; charset=utf-8");

//*******************CONNEXION BDD *********************//
include 'connexionbdd.php';

//********************RECUPERATION Company


$table=array('ad_comp_id' => array(), 'ad_title' => array(), 'ad_description' => array() , 'comp_name' => array() , 'comp_email' => array() , 'comp_address' => array(), 'ad_id' => array());

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


//***********************RECUPERATION Ad
$resultats = $bdd->query('SELECT * FROM comp');


while ($donnees = $resultats->fetch())
{
	for($i=0;$i<sizeof($table[ad_comp_id]);$i++){
	if($table['ad_comp_id'][$i]==$donnees[comp_id])
	{
		$table['comp_name'][$i] = $donnees[comp_name];
		$table['comp_email'][$i] = $donnees[comp_email];
		$table['comp_address'][$i] = $donnees[comp_address];

	}
}

}
$resultats->closeCursor();


//**********************envoi des données au JS
echo json_encode($table);

?>
