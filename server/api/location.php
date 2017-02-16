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

	/*locations*/
	$locations = mysql_query("SELECT * FROM Location WHERE id ={$_GET['id']}");
	$rows_location = array();
	while($r = mysql_fetch_assoc($locations)) {	
		$r['photo'] = unserialize($r['photo']);
		if(empty($r['excerpt'])) { 
			$r['excerpt'] = preg_replace("/^\W*((\w[\w'-]*\b\W*){1,50}).*/ms", '\\1', $r['description']).'..';
		}
		if(!empty($r['websites'])) { 
			$r['websites'] = explode(',',$r['websites']);
		}
		 
		$rows_location[] = $r;
		
	}
	
	/*inner locations*/
	$innerLocations = mysql_query("SELECT * FROM  InnerLocation WHERE idLocation ={$_GET['id']}");
	$rows_innerLocation = array();
	while($r = mysql_fetch_assoc($innerLocations)) {
		$r['photo'] = unserialize($r['photo']);
		$rows_innerLocation[] = $r;
		//print_r($r);
	}
	$rows_location['innerLocations']=$rows_innerLocation;
	print json_encode($rows_location);	
	
	
?>