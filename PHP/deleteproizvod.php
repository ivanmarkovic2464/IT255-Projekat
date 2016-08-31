<?php
header('Access-Control-Allow-Methods: GET');  

include("functions1.php");

if(isset($_GET['id'])){
	
	$id = intval($_GET['id']);
	
	echo deleteProizvod($id);
}
?>