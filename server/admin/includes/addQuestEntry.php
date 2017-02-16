<?php

/*
 * addQuestEntry.php
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

	//question
	$question_rus 			= $_POST['question_Rus'];
	$question_eng 			= $_POST['question_Eng'];
	$question 				= '[ru:]'.$question_rus.'[en:]'.$question_eng;
	
	//location ID
	$locationId		= $_POST['locationsSelected'];
	
	//tour ID
	$tourID 		= $_POST['tourSelected'];
	
	$gbQuestEntry = new QuestEntry($question, $locationId, $tourID);
	$db->addQuestEntry($gbQuestEntry);
	
	/* Close connection */
	$db = NULL; 
?>