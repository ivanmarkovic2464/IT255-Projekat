<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');  
include("functions.php");
if(isset($_GET['korisnici_ID'])){
	
	$korisnici_ID = intval($_GET['korisnici_ID']);
	
	echo deleteKorisnika($korisnici_ID);
}
?>