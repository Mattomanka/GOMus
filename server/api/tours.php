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
	mysql_query('SET NAMES utf8 COLLATE utf8_general_ci'); 

	/*tours*/
	$tours = mysql_query("SELECT * FROM Tour");
	$rows_tour = array();
	while($r = mysql_fetch_assoc($tours)) {
		$rows_tour[] = $r;
	}
	//print_r($rows_tour);
	print json_encode($rows_tour);
?>