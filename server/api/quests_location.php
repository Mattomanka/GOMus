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
	
	$questId	=	$_GET['questID'];
	
	if($questId) {
		$quests = mysql_query("SELECT * FROM Quest WHERE idLocation=".$questId."");
		$rows_quest = array();
		while($r = mysql_fetch_assoc($quests)) {
			foreach($r as $key=>$value){
				if(preg_match ("/[\\[]{1}(\\w+)[:]]/" , $value)){
					$splitedSTR = preg_split("/[\\[]{1}(\\w+)[:]]/", $value,-1,PREG_SPLIT_DELIM_CAPTURE); 
					$lang_numb = array_search($currentLang, $splitedSTR);
					$r[$key]= $splitedSTR[($lang_numb+1)];
				}
			}
			$rows_quest[] = $r;
		}
		print json_encode($rows_quest);
	}
?>