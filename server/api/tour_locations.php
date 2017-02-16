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
	
	$tour_ID = $_GET['tour_id'];
	$currentLang= $_GET['lang']? $_GET['lang'] : 'en';
	
	/*locations*/
	$locations = mysql_query("SELECT DISTINCT a.* FROM Location a INNER JOIN Location_Tour at ON at.location_id = a.id INNER JOIN Tour t ON t.id = at.tour_id WHERE t.id = ".$tour_ID."");
	
	$rows_location = array();
	while($r = mysql_fetch_assoc($locations)) {

		if(!empty($r['photo'])){
			$r['photo'] = unserialize($r['photo']);
		} 
		
		foreach($r as $key=>$value){
			if(preg_match ("/[\\[]{1}(\\w+)[:]]/" , $value)){
				$splitedSTR = preg_split("/[\\[]{1}(\\w+)[:]]/", $value,-1,PREG_SPLIT_DELIM_CAPTURE); 
				$lang_numb = array_search($currentLang, $splitedSTR);
				$r[$key]= $splitedSTR[($lang_numb+1)];
			}
		}

		$rows_location[] = $r;
	}

	print json_encode($rows_location);	
	//print_r($rows_location);
	
?>