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


	$innerID    = $_GET['ID'];
	$bool       = $_GET['bool'];

	if(!empty($innerID)){

		/*inner locations*/
		$innerLocations = mysql_query("SELECT id FROM  Quest WHERE idLocation ={$innerID}");
		$rows_location = array();
		while($r = mysql_fetch_assoc($innerLocations)) {
			$r['photo'] = unserialize($r['photo']);

			$rows_location[] = $r;
			
		}
	}
	if ($bool==1) {
		if (!empty($rows_location)) {
			print 1;
		}
	} else {
		print 0; //json_encode($rows_location);		
	}
	
?>
