<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
include("functions1.php");

if(isset($_POST['model']) && isset($_POST['cena']) &&
   isset($_POST['garancija']) && isset($_POST['boja']) && 
   isset($_POST['tezina']) && isset($_POST['proizvodjac']) &&
   isset($_POST['tip_id']) && isset($_POST['proizvodi_ID'])){
	
$model = $_POST['model'];
$cena = $_POST['cena'];
$garancija = $_POST['garancija'];
$boja = $_POST['boja'];
$tezina = $_POST['tezina'];
$proizvodjac = $_POST['proizvodjac'];
$tip_id = $_POST['tip_id'];
$proizvodi_ID = $_POST['proizvodi_ID'];

echo updateProizvod($model, $cena, $garancija, $boja, $tezina, $proizvodjac, $tip_id, $proizvodi_ID);

}
?>