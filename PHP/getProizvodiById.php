<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');  
header('Content-type: application/json');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
include("functions.php");

if(isset($_GET['proizvodi_ID'])){

	$proizvodi_ID = intval($_GET['proizvodi_ID']);
	echo getId($proizvodi_ID);

}
?>