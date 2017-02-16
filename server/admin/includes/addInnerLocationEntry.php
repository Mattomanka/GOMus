<?php

/*
 * addExhibitEntry.php
 * created by Ian Zablovschii
 *
 * ________________________________________________________________
 * | CHANGE LOG                                                   |
 * |______________________________________________________________|
 * | Date       | By              | Reason                        |
 * |--------------------------------------------------------------|
 * | 25.10.2015 | Ian Zablovschii | First version.                |
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

	//name
	$name_rus 			= $_POST['innerLocationTitle_Rus'];
	$name_eng 			= $_POST['innerLocationTitle_Eng'];
	$name 				= '[ru:]'.$name_rus.'[en:]'.$name_eng;
	
	//description
	$description_rus 	= $_POST['innerLocationDescription_Rus'];
	$description_eng 	= $_POST['innerLocationDescription_Eng'];
	$description 		= '[ru:]'.$description_rus.'[en:]'.$description_eng;
	
	//location ID
	$locationID		= $_POST['locationsSelected'];
	
	//position color
	$positionColor	= $_POST['positionColor'];
	
	
	for($i=0; $i<count($_FILES['locationImage']['name']); $i++){
		if($_FILES['locationImage']['name'][$i]!='') {
			copy($_FILES['locationImage']['tmp_name'][$i],"/home/areyoual/areyoualive.ru/gid/temp/".basename($_FILES['locationImage']['name'][$i]));
			$images[] = "http://gid.areyoualive.ru/temp/".basename($_FILES['locationImage']['name'][$i]);	
		}
	}
	
	$flag = 'true';
	
	
	$gbInnerLocationEntry = new InnerLocationEntry($flag, $locationID, $name, $images, $description, $positionColor);
	$db->addInnerLocationEntry($gbInnerLocationEntry);
	
	/* Close connection */ 
	$db = NULL;
?>