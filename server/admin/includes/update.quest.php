<?php
    require "../../defines.php";
	require "../../classes.php";
	require "../../database.php";
	
	
	$idElem				= $_POST['idElem'];


	// question
	$question_rus	= $_POST['question_Rus'];
	$question_eng	= $_POST['question_Eng'];
	$question		= '[ru:]'.$question_rus.'[en:]'.$question_eng;	

	
	$stmt = $db->dbHandler->prepare('UPDATE Quest SET question = :question WHERE ID = :idElem');
	$stmt->bindParam(':question', $question);
	$stmt->bindParam(':idElem', $idElem);
	$stmt->execute();
	
	/* Close connection */ 
	$db = NULL;	
	
	header( 'Refresh: 0; http://gid.areyoualive.ru/admin/content/success.php' );
	
?>