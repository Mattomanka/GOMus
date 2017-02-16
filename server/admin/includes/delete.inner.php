<?php
    require "../../defines.php";
	require "../../classes.php";
	require "../../database.php";
	
	$idElem			= NULL;
	
	$idElem			= $_GET['id'];
	$currPage		= $_GET['curr'];
	
	$stmt = $db->dbHandler->prepare('DELETE FROM InnerLocation WHERE ID = :idElem'); 
	$stmt->bindParam(':idElem', $idElem);
	$stmt->execute();
	
	/* Close connection */ 
	$db = NULL;	
	
	die("<script>location.href = '".$currPage."'</script>");
	
?>