<?php
    require "../../defines.php";
	require "../../classes.php";
	require "../../database.php";
	
	$idElem			= NULL;
	$requestUrl		= $_POST['requestUrl'];
	$imageElem		= '';
	$idElem			= $_POST['idElem'];

	if(isset($_FILES['tourImage'])) {
		//$imageElem		= $_POST['tourImage'];
		copy($_FILES['tourImage']['tmp_name'],"/home/areyoual/areyoualive.ru/gid/temp/".basename($_FILES['tourImage']['name']));
		$image_url = "http://gid.areyoualive.ru/temp/".basename($_FILES['tourImage']['name']);
		$imageElem = $image_url;
		if($imageElem == 'http://gid.areyoualive.ru/temp/') $imageElem = $_POST['tourImageResult'];
	}
	
	// name
	$name_rus 			= $_POST['tourTitleRus'];
	$name_eng 			= $_POST['tourTitleEng'];
	$name 				= '[ru:]'.$name_rus.'[en:]'.$name_eng;
		
	// description
	$description_rus	= $_POST['tourDescriptionRus'];
	$description_eng	= $_POST['tourDescriptionEng'];
	$description		= '[ru:]'.$description_rus.'[en:]'.$description_eng;
	
	//image
	

	$stmt = $db->dbHandler->prepare('UPDATE Tour SET description = :description, name = :name, photo = :imageElem WHERE ID = :idElem');   

	$stmt->bindParam(':description', $description);
	$stmt->bindParam(':idElem', $idElem);
	$stmt->bindParam(':name', $name);
	$stmt->bindParam(':imageElem', $imageElem);

	$stmt->execute();
	
	/* Close connection */
	$db = NULL;	
	
	header( 'Refresh: 0; '.$requestUrl.'' );
?>