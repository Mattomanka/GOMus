<?php
    require "../../defines.php";
	require "../../classes.php";
	require "../../database.php";
	
	
	$idElem				= $_POST['idElem'];
	$curr				= $_POST['requestUrl'];
	
	// name
	$name_rus 			= $_POST['innerLocationTitle_Rus'];
	$name_eng 			= $_POST['innerLocationTitle_Eng'];
	$name 				= '[ru:]'.$name_rus.'[en:]'.$name_eng;

	// description
	$description_rus	= $_POST['innerLocationDescription_Rus'];
	$description_eng	= $_POST['innerLocationDescription_Eng'];
	$description		= '[ru:]'.$description_rus.'[en:]'.$description_eng;	
	
	//location ID
	$locationID		= $_POST['locationsSelected'];
	
	// images
	for($i=0; $i<count($_FILES['locationImage']['name']); $i++){
		if($_FILES['locationImage']['name'][$i]!='') {
			copy($_FILES['locationImage']['tmp_name'][$i],"/home/areyoual/areyoualive.ru/gid/temp/".basename($_FILES['locationImage']['name'][$i]));
			$images[] = "http://gid.areyoualive.ru/temp/".basename($_FILES['locationImage']['name'][$i]);	
		}
	}

	if(!empty($images)) {
		$images = array_merge($_POST['locationImageResult'], $images);	
	} else {
		$images = $_POST['locationImageResult'];	
	}
	
	//print_r($images);
	//print_r($_FILES['locationImage']);
	
	$stmt = $db->dbHandler->prepare('UPDATE InnerLocation SET name = :name, description = :description, idLocation = :locationID, photo = :images WHERE ID = :idElem');    
	$stmt->bindParam(':name', $name);
	$stmt->bindParam(':description', $description);
	$stmt->bindParam(':locationID', $locationID);
	$stmt->bindParam(':idElem', $idElem);
	$stmt->bindParam(':images', serialize($images));
	$stmt->execute();
	
	/* Close connection */ 
	$db = NULL;	
	header( 'Refresh: 0; '.$curr.'' );
?>