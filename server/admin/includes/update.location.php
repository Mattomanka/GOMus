<?php
    require "../../defines.php";
	require "../../classes.php";
	require "../../database.php";
	
	$idElem				= $_POST['idElem'];
	$curr				= $_POST['requestUrl'];
	
	// name
	$name_rus 			= $_POST['locationTitleRus'];
	$name_eng 			= $_POST['locationTitleEng'];
	$name 				= '[ru:]'.$name_rus.'[en:]'.$name_eng;

	// description
	$description_rus	= $_POST['locationDescription_Rus'];
	$description_eng	= $_POST['locationDescription_Eng'];
	$description		= '[ru:]'.$description_rus.'[en:]'.$description_eng;

	// excerpt
	$excerpt_rus		= $_POST['locationExcerpt_Rus'];
	$excerpt_eng		= $_POST['locationExcerpt_Eng'];
	$excerpt			= '[ru:]'.$excerpt_rus.'[en:]'.$excerpt_eng;	
	
	// short title
	$short_title_rus 			= $_POST['locationShortTitle_Rus'];
	$short_title_eng 			= $_POST['locationShortTitle_Eng'];
	$short_title 		= '[ru:]'.$short_title_rus.'[en:]'.$short_title_eng;

	// address
	$address_rus 			= $_POST['locationAddress_Rus'];
	$address_eng 			= $_POST['locationAddress_Eng'];
	$address 				= '[ru:]'.$address_rus.'[en:]'.$address_eng;
	
	// coordinates
	$coordinates		= $_POST['locationCoordinates'];	

	// rating	
	$rating				=	 $_POST['locationRating'];		

	// phone	
	$phone				= $_POST['locationPhone'];		
	
	// web sites
	$web_sites			= $_POST['locationWebsites'];		
	
	// panorama
	$panorama			= $_POST['locationPanorama'];		

	// images
	for($i=0; $i<count($_FILES['locationImage']['name']); $i++){
		if($_FILES['locationImage']['name'][$i]!='') {
			copy($_FILES['locationImage']['tmp_name'][$i],"/home/areyoual/areyoualive.ru/gid/temp/".basename($_FILES['locationImage']['name'][$i]));
			$images[] = "http://gid.areyoualive.ru/temp/".basename($_FILES['locationImage']['name'][$i]);	
		}
	}
	//if(empty($images)) $images = $_POST['locationImageResult'];
	
	if(!empty($images)) {
		$images = array_merge($_POST['locationImageResult'], $images);	
	} else {
		$images = $_POST['locationImageResult'];	
	}	
	
	
	$stmt = $db->dbHandler->prepare('UPDATE Location SET address = :address, name = :name, coordinates = :coordinates, description = :description, excerpt = :excerpt, shortname = :short_title, phone = :phone, websites = :web_sites, panorama = :panorama, photo = :images  WHERE ID = :idElem');    
	$stmt->bindParam(':idElem', $idElem);
	$stmt->bindParam(':name', $name);
	$stmt->bindParam(':address', $address);
	$stmt->bindParam(':coordinates', $coordinates);
	$stmt->bindParam(':description', $description);
	$stmt->bindParam(':excerpt', $excerpt);
	$stmt->bindParam(':short_title', $short_title);
	$stmt->bindParam(':phone', $phone);
	$stmt->bindParam(':web_sites', $web_sites);
	$stmt->bindParam(':panorama', $panorama);
	$stmt->bindParam(':images', serialize($images));
	$stmt->execute();
	
	/* Close connection */ 
	$db = NULL;	
	header( 'Refresh: 0; '.$curr.'' );
?>