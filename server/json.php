<?php
	if (isset($_SERVER['HTTP_ORIGIN'])) { 
		header("Access-Control-Allow-Credentials: true"); 
		header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']); 
	}
	$username = "areyoual_deutsch";
	$password = "ucs6tqez";
	$hostname = "areyoual.mysql.ukraine.com.ua"; 

	//connection to the database
	$dbhandle = mysql_connect($hostname, $username, $password);
	$selected = mysql_select_db("areyoual_deutsch",$dbhandle);

	/*tours*/
	$tours = mysql_query("SELECT id, name FROM Tour");
	$rows_tour = array();
	while($r = mysql_fetch_assoc($tours)) {
		$rows_tour[] = $r;
	}
	print json_encode($rows_tour);
	
	/*locations*/
	$locations = mysql_query("SELECT id, idTour, name, address, coordinates, rating, description, photo FROM Location");
	$rows_location = array();
	while($r = mysql_fetch_assoc($locations)) {
		$rows_location[] = $r;
	}
	print json_encode($rows_location);	
	
	/*inner locations*/
	$innerLocations = mysql_query("SELECT id, idLocation, name, description, photo FROM InnerLocation");
	$rows_innerLocation = array();
	while($r = mysql_fetch_assoc($innerLocations)) {
		$rows_innerLocation[] = $r;
	}
	print json_encode($rows_innerLocation);	
?>