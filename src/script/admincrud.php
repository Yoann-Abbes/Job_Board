<?php
header("Content-type: application/json; charset=utf-8");

//*******************CONNEXION BDD *********************//
include 'connexionbdd.php';


if ($_POST['mymodal'] === '1')
{
	$ad_comp_id = $_POST['ad_comp_id'];
	$ad_description = str_replace("'","''",$_POST['ad_description']);
	$ad_description = str_replace(":", "\\:",$ad_description);
	$ad_description = str_replace("+", "\\+",$ad_description);
	$ad_description = str_replace("@", "\\@",$ad_description);
	$ad_title = $_POST['ad_title'];
	$ad_id = $_POST['ad_id'];

	$chain="UPDATE ad SET  ad_comp_id='".$ad_comp_id."', ad_description='".$ad_description."', ad_title = '".$ad_title."'  WHERE ad_id='".$ad_id."'";
	$result =  $bdd->query($chain);
	echo json_encode($result);
}

if ($_POST['mymodal'] === '2')



{
	$comp_name = $_POST['comp_name'];
	$comp_address = $_POST['comp_address'];
	$comp_email = $_POST['comp_email'];
	$comp_id = $_POST['comp_id'];
	$result =  $bdd->query("UPDATE comp SET  comp_name='$comp_name', comp_address='$comp_address', comp_email = '$comp_email'  WHERE comp_id='$comp_id'");
	echo json_encode($result);
}

if ($_POST['mymodal'] === '3')
{
	// echo ("LOL");

	$people_username = $_POST['people_username'];
	$people_password = md5($_POST['people_password']);
	$people_lastname = $_POST['people_lastname'];
	$people_firstname = $_POST['people_firstname'];
	$people_email = $_POST['people_email'];
	$people_number = $_POST['people_number'];
	$people_admin = $_POST['people_admin'];
	$people_id = $_POST['people_id'];
	$result =  $bdd->query("UPDATE people SET  people_username='$people_username', people_password='$people_password', people_lastname = '$people_lastname', people_firstname = '$people_firstname', people_email = '$people_email', people_number = '$people_number', people_admin = '$people_admin'  WHERE people_id='$people_id'");
	echo json_encode($result);
}

if ($_POST['mymodal'] === '4')
{
	$apply_message = str_replace("'","''",$_POST['apply_message']);
	$apply_message = str_replace(":", "\\:",$apply_message);
	$apply_message = str_replace("+", "\\+",$apply_message);
	$apply_message = str_replace("@", "\\@",$apply_message);
	$apply_comp_id = $_POST['apply_comp_id'];
	$apply_people_id = $_POST['apply_people_id'];
	$apply_ad_id = $_POST['apply_ad_id'];
	$apply_id = $_POST['apply_id'];
	$result =  $bdd->query("UPDATE apply SET  apply_message='$apply_message', apply_comp_id='$apply_comp_id', apply_people_id = '$apply_people_id' , apply_ad_id = '$apply_ad_id' WHERE apply_id='$apply_id'");
	echo json_encode($result);
}

if ($_POST['mymodal'] === '5')
{
	if($_POST['create'] === 'ad')
	{	
		$ad_comp_id = $_POST['ad_comp_id'];
		$ad_description = str_replace("'","''",$_POST['ad_description']);
		$ad_description = str_replace(":", "\\:",$ad_description);
		$ad_description = str_replace("+", "\\+",$ad_description);
		$ad_description = str_replace("@", "\\@",$ad_description);

		$ad_title = $_POST['ad_title'];
		$result =  $bdd->query("INSERT INTO ad (ad_comp_id, ad_description, ad_title) VALUES ('$ad_comp_id','$ad_description','$ad_title')");
		echo json_encode($result);
	}
	if($_POST['create'] === 'people')
	{
		$people_username = $_POST['people_username'];
		$people_password = $_POST['people_password'];
		$people_lastname = $_POST['people_lastname'];
		$people_firstname = $_POST['people_firstname'];
		$people_email = $_POST['people_email'];
		$people_number = $_POST['people_number'];
		$people_admin = $_POST['people_admin'];
		$result =  $bdd->query("INSERT INTO people (people_username,people_password,people_lastname,people_firstname, people_email, people_number, people_admin) VALUES ('$people_username','$people_password','$people_lastname','$people_firstname','$people_email','$people_number', '$people_admin')");
		echo json_encode($result);
	}
	if($_POST['create'] === 'apply')
	{

		$apply_message = str_replace("'","''",$_POST['apply_message']);
		$apply_message = str_replace(":", "\\:",$apply_message);
		$apply_message = str_replace("+", "\\+",$apply_message);
		$apply_message = str_replace("@", "\\@",$apply_message);
		$apply_comp_id = $_POST['apply_comp_id'];
		$apply_people_id = $_POST['apply_people_id'];
		$apply_ad_id = $_POST['apply_ad_id'];
		$result =  $bdd->query("INSERT INTO apply (apply_message, apply_comp_id, apply_people_id, apply_ad_id) VALUES ('$apply_message','$apply_comp_id','$apply_people_id','$apply_ad_id')");
		echo json_encode($result);

	}
	if($_POST['create'] === 'comp')
	{
		$comp_name = $_POST['comp_name'];
		$comp_address = $_POST['comp_address'];
		$comp_email = $_POST['comp_email'];
		$result =  $bdd->query("INSERT INTO comp (comp_name,comp_address, comp_email) VALUES ('$comp_name','$comp_address','$comp_email')");
		echo json_encode($result);
	}
}

?>


