<?php

/*
 * addLocationEntry.php
 * created by Ian Zablovschii
 *
 * ________________________________________________________________
 * | CHANGE LOG                                                   |
 * |______________________________________________________________|
 * | Date       | By              | Reason                        |
 * |--------------------------------------------------------------|
 * | 12.11.2015 | Ian Zablovschii | First version.                |
 * |--------------------------------------------------------------|
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |______________________________________________________________|
 */
 
	require "../../defines.php";
	require "../../classes.php";
	require "../../database.php";

	// name
	$name_rus 			= $_POST['locationTitle_Rus'];
	$name_eng 			= $_POST['locationTitle_Eng'];
	$name 				= '[ru:]'.$name_rus.'[en:]'.$name_eng;
	
	//address
	$address_rus 		= $_POST['locationAddress_Rus'];
	$address_eng 		= $_POST['locationAddress_Eng'];
	$address 			= '[ru:]'.$address_rus.'[en:]'.$address_eng;	
	
	//description
	$description_rus 	= $_POST['locationDescription_Rus'];
	$description_eng 	= $_POST['locationDescription_Eng'];
	$description 		= '[ru:]'.$description_rus.'[en:]'.$description_eng;	


	//coordinates
	$coordinates 	= $_POST['locationCoordinates'];
	
	//rating
	$rating 		= $_POST['locationRating'];
	
	//tour ID
	$tourID = [];
	$tourID 		= $_POST['tourSelected'];
	
	//shortname
	$locationShortTitle_Rus 	= $_POST['locationShortTitle_Rus'];
	$locationShortTitle_Eng 	= $_POST['locationShortTitle_Eng'];
	$shortname 		= '[ru:]'.$locationShortTitle_Rus.'[en:]'.$locationShortTitle_Eng;		

	//excerpt
	$locationExcerpt_Rus 	= $_POST['locationExcerpt_Rus'];
	$locationExcerpt_Eng 	= $_POST['locationExcerpt_Eng'];
	$excerpt 		= '[ru:]'.$locationExcerpt_Rus.'[en:]'.$locationExcerpt_Eng;		
	
	//phone
	$phone			=	$_POST['locationPhone'];
	
	//websites
	$websites		= $_POST['locationWebsites'];
	
	//panorama
	$panorama		= $_POST['locationPanorama'];



	
	for($i=0; $i<count($_FILES['locationImage']['name']); $i++){
		if($_FILES['locationImage']['name'][$i]!='') {
			copy($_FILES['locationImage']['tmp_name'][$i],"/home/areyoual/areyoualive.ru/gid/temp/".basename($_FILES['locationImage']['name'][$i]));
			$images[] = "http://gid.areyoualive.ru/temp/".basename($_FILES['locationImage']['name'][$i]);	
		}
	}
	
	$gbLocationEntry = new LocationEntry($name, $address, $coordinates, $description, $rating, $tourID, $images, $shortname, $excerpt, $phone, $websites, $panorama);
	$db->addLocationEntry($gbLocationEntry);
	
	/* Close connection */ 
	$db = NULL;
?>