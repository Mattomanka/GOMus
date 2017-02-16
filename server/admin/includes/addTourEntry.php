<?php

/*
 * addTourEntry.php
 * created by Ian Zablovschii
 *
 * ________________________________________________________________
 * | CHANGE LOG                                                   |
 * |______________________________________________________________|
 * | Date       | By              | Reason                        |
 * |--------------------------------------------------------------|
 * | 25.10.2015 | Ian Zablovschii | First version.                |
 * | 12.11.2015 | Max Kadatsky | Add image uploading.             |
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
	$name_rus 			= $_POST['tourTitleRus'];
	$name_eng 			= $_POST['tourTitleEng'];
	$name 				= '[ru:]'.$name_rus.'[en:]'.$name_eng;
		
	// description
	$description_rus	= $_POST['tourDescriptionRus'];
	$description_eng	= $_POST['tourDescriptionEng'];
	$description		= '[ru:]'.$description_rus.'[en:]'.$description_eng;


	// image
	$image 			= $_POST['tourImage'];
	copy($_FILES['tourImage']['tmp_name'],"/home/areyoual/areyoualive.ru/gid/temp/".basename($_FILES['tourImage']['name']));
	$image_url = "http://gid.areyoualive.ru/temp/".basename($_FILES['tourImage']['name']);
	//$flag	= 'true';
	
	//create data object
	$gbTourEntry = new TourEntry($name, $image_url, $description);
	$db->addTourEntry($gbTourEntry);
	
	/* Close connection */ 
	$db = NULL;
?>