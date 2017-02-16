<?php
	if (isset($_SERVER['HTTP_ORIGIN'])) { 
		header("Access-Control-Allow-Credentials: true"); 
		header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']); 
	}
	// DB connection
	require_once('db.php');
	
	// return JSONs
	$exhibit = mysql_query("SELECT id, name, description, image, rating FROM Exhibit");
	$rows_exhibit = array();
	while($r = mysql_fetch_assoc($exhibit)) {
		$rows_exhibit[] = $r;
	}
	echo 'Exhibits:<br/>';
	print json_encode($rows_exhibit);

	$tour = mysql_query("SELECT id, name, length_tour, map_tour, duration, rating FROM Tour");
	$rows_tour = array();
	while($r = mysql_fetch_assoc($tour)) {
		$rows_tour[] = $r;
	}
	echo '<br/><br/>Tours:<br/>';
	print json_encode($rows_tour);	

	$location = mysql_query("SELECT id, idExhibit, idTour, name, address, coordinates, rating, description FROM Location");
	$rows_location = array();
	while($r = mysql_fetch_assoc($location)) {
		$rows_location[] = $r;
	}
	echo '<br/><br/>Locations:<br/>';
	print json_encode($rows_location);	
	
	$quest = mysql_query("SELECT id, idTour, allAnswers, question, rightAnswer FROM Quest");
	$rows_quest = array();
	while($r = mysql_fetch_assoc($quest)) {
		$rows_quest[] = $r;
	}
	echo '<br/><br/>Quests:<br/>';
	print json_encode($rows_quest);	
	
?>