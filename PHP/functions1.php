<?php

include("config.php");
include("functions.php");

function getProizvodi(){
	global $conn;
	$rarray = array();
	
		$result = $conn->query("SELECT * FROM proizvodi");
		$num_rows = $result->num_rows;
		$servisi = array();
		if($num_rows > 0)
		{
			$result2 = $conn->query("SELECT * FROM proizvodi");
			while($row = $result2->fetch_assoc()) {
				$row['TIP_NAZIV'] = getTipById($row['TIP_ID']); 
				array_push($servisi,$row);
			}
		}
		$rarray['servisi'] = $servisi;
		return json_encode($rarray);
	
}

function getTipById($id){
	global $conn;
	$rarray = array();
	$id = intval($id);
	$result = $conn->query("SELECT * FROM TIP WHERE ID=".$id);
	$num_rows = $result->num_rows;
	$rowtoreturn = array();
	if($num_rows > 0)
	{
		$result2 = $conn->query("SELECT * FROM TIP WHERE ID=".$id);
		while($row = $result2->fetch_assoc()) {
			$rowtoreturn = $row;
		}
	}
	return $rowtoreturn['NAZIV'];
}

function deleteProizvod($id){  
	$error = "";
	global $conn;  
	$rarray = array();  
	  if ( !(checkIfLoggedIn()) ) { 
		$result = $conn->prepare("DELETE FROM proizvodi WHERE proizvodi_ID=?");   
		$result->bind_param("i",$id);   
		$result->execute();   
		$rarray['success'] = "Deleted successfully";  
	  } else {
			header('HTTP/1.1 401 Unauthorized');
		$rarray['error'] = "NOT AN ADMIN!!!";
	  }
	return json_encode($rarray); 
}

function getTipovi(){
	global $conn;
	$rarray = array();
	
		$result = $conn->query("SELECT * FROM tip");
		$num_rows = $result->num_rows;
		$tipovi = array();
		if($num_rows > 0)
		{
			$result2 = $conn->query("SELECT * FROM tip");
			while($row = $result2->fetch_assoc()) {
				array_push($tipovi,$row);
			}
		}
		$rarray['tipovi'] = $tipovi;
		return json_encode($rarray);
	
}

function addProizvod($model, $cena, $garancija, $boja, $tezina, $proizvodjac, $tip_id){
	
	global $conn;
	$rarray = array();
	$stmt = $conn->prepare("INSERT INTO proizvodi (model, cena, garancija, boja, tezina, proizvodjac, TIP_ID) VALUES (?, ?, ?, ?, ?, ?, ?)");
	$stmt->bind_param("sissssi", $model, $cena, $garancija, $boja, $tezina, $proizvodjac, $tip_id);
	if($stmt->execute()){
		$rarray['success'] = "ok";
	}else{
		$rarray['error'] = "Database connection error";
	}
	return json_encode($rarray);
		
}

function updateProizvod($model, $cena, $garancija, $boja, $tezina, $proizvodjac, $tip_id, $proizvodi_ID){
	
	global $conn;
	$rarray = array();
	$stmt = $conn->prepare("UPDATE proizvodi SET model=?, cena=?, garancija=?, boja=?, tezina=?, proizvodjac=?, TIP_ID=? WHERE proizvodi_ID=?");
	$stmt->bind_param("sissssii", $model, $cena, $garancija, $boja, $tezina, $proizvodjac, $tip_id, $proizvodi_ID);
	if($stmt->execute()){
		$rarray['success'] = "ok";
	}else{
		$rarray['error'] = "Database connection error";
	}
	return json_encode($rarray);
		
}

?>