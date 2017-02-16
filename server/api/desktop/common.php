<?
	if (isset($_SERVER['HTTP_ORIGIN'])) { 
		header("Access-Control-Allow-Credentials: true"); 
		header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']); 
	}
	$username = "areyoual_deutsch";
	$password = "ucs6tqez";
	$hostname = "areyoual.mysql.ukraine.com.ua"; 

	//connection to the database
	if (isset($_SERVER['HTTP_ORIGIN'])) { 
		header("Access-Control-Allow-Credentials: true"); 
		header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']); 
	}
	
	$dbhandle = mysql_connect($hostname, $username, $password);
	$selected = mysql_select_db("areyoual_deutsch",$dbhandle);
	
	mysql_query('SET NAMES utf8 COLLATE utf8_general_ci');

	$nFields 	= $_GET['nfields'] ; // поля, которые необходимо получить из БД
	$sField 	= $_GET['sfield']; // поле, по которому идет проверка
	$sFieldValue= $_GET['sfieldValue']; // значение поля, по которому идет проверка
	$currentLang= $_GET['lang']? $_GET['lang'] : 'en';	// язык, который необходимо вернуть
		
		
	
	$locations = mysql_query("SELECT {$nFields} FROM Location WHERE {$sField}={$sFieldValue}");
	

	$rows_location = array();
	while($r = mysql_fetch_assoc($locations)) {	
		if(!empty($r['photo'])){
			$r['photo'] = unserialize($r['photo']);
		} 
		
		if(empty($r['excerpt']) && !empty($r['description'])) {
			
			$r['excerpt'] = preg_replace("/^\W*((\w[\w'-]*\b\W*){1,50}).*/ms", '\\1', $r['description']).'..';
		}
		if(!empty($r['websites'])) { 
			$r['websites'] = explode(',',$r['websites']);
		}
		foreach($r as $key=>$value){
			
			if(preg_match ("/[\\[]{1}(\\w+)[:]]/" , $value)){
				$splitedSTR = preg_split("/[\\[]{1}(\\w+)[:]]/", $value,-1,PREG_SPLIT_DELIM_CAPTURE); 
				$lang_numb = array_search($currentLang, $splitedSTR);
				$r[$key]= $splitedSTR[($lang_numb+1)];
			}
		}
		$rows_location = $r;
		
	} 
	 
		print_r($rows_location);
	?>