<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');

include("functions.php");

if(isset($_POST['firstName']) && isset($_POST['lastName']) && isset($_POST['username']) &&
isset($_POST['password']) && isset($_POST['adresa']) && isset($_POST['ulica']) && isset($_POST['telefon'])){

$firstname = $_POST['firstName'];
$lastname = $_POST['lastName'];
$username = $_POST['username'];
$password = $_POST['password'];
$adresa = $_POST['adresa'];
$ulica = $_POST['ulica'];
$telefon = $_POST['telefon'];

echo register($username,$password,$firstname,$lastname,$adresa,$ulica,$telefon);
}
?>