<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
include("config.php");
if(isset($_POST['proizvodi_ID']) && isset($_POST['username']) &&
 isset($_POST['NAZIV']) && isset($_POST['model']) && isset($_POST['cena'])&& isset($_POST['garancija'])){
$proizvodi_ID = $_POST['proizvodi_ID'];
$username = $_POST['username'];
$NAZIV = ($_POST['NAZIV']);
$model = ($_POST['model']);
$cena = ($_POST['cena']);
$garancija = ($_POST['garancija']);
$stmt = $conn->prepare("INSERT INTO korpa (proizvodi_ID, username, NAZIV, model, cena, garancija) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $proizvodi_ID, $username, $NAZIV, $model , $cena, $garancija);
$stmt->execute();
echo "ok";
}
?>