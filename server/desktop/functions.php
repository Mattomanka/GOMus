<?

	function setCurrentLang($langName){
		setcookie("currentLang", $langName);
	}
	
	function getCurrentLang(){
		$currentLang = 'en';
		if(empty($_COOKIE["currentLang"])){
			setCurrentLang('en');
		}else {
			$currentLang = $_COOKIE["currentLang"];
		}
		
		return $currentLang;
	}
		
	function openConDB(){
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
	}
	
	function countBdRows($tableName = ''){
		
		if(!empty($tableName)){
			openConDB();
			$result = mysql_query("SELECT COUNT(*) FROM {$tableName}");
			$result = mysql_fetch_assoc($result);
			print_r($result['COUNT(*)']);
		}
	}
	
	function printEntry($ListParametrs){
	//$nFields,$count = 1, $orderBy = '', $sField = '',$sFieldValue = '',$currentLang = 'en'
	//$nFields - поля, которые необходимо получить из БД
	//$sField - поле, по которому идет проверка
	//$sFieldValue -  значение поля, по которому идет проверка
	//$currentLang  - язык, который необходимо вернуть
	//ASC
	openConDB();
	
	$currentLang = getCurrentLang();
	

		
	if(!empty($ListParametrs['sField'])){
		$whereCondition = "WHERE {$ListParametrs['sField']}={$ListParametrs['sFieldValue']}";
	}else {
		$whereCondition = '';
	}
	if(!empty($ListParametrs['orderBy'])){
		$orderByCondition = "ORDER BY rating {$ListParametrs['orderBy']}";
	}else {
		$orderByCondition = '';
	}
	
	
	$locations = mysql_query("SELECT {$ListParametrs['nFields']} FROM {$ListParametrs['tableName']} {$whereCondition} {$orderByCondition} LIMIT 0,{$ListParametrs['count']} ");	
	 
	return requestHandler($locations,$currentLang);
	
	}
	
	function printTourLocaction($ListParametrs){
	//$nFields,$count = 1, $orderBy = '', $sField = '',$sFieldValue = '',$currentLang = 'en'
	//$nFields - поля, которые необходимо получить из БД
	//$sField - поле, по которому идет проверка
	//$sFieldValue -  значение поля, по которому идет проверка
	//$currentLang  - язык, который необходимо вернуть
	//ASC
	openConDB();
	
	$currentLang = getCurrentLang();
	

		
	if(!empty($ListParametrs['sField'])){
		$whereCondition = "WHERE {$ListParametrs['sField']}={$ListParametrs['sFieldValue']}";
	}else {
		$whereCondition = '';
	}
	if(!empty($ListParametrs['orderBy'])){
		$orderByCondition = "ORDER BY rating {$ListParametrs['orderBy']}";
	}else {
		$orderByCondition = '';
	}
	
	
	$locations = mysql_query("SELECT DISTINCT a.* FROM Location a INNER JOIN Location_Tour at ON at.location_id = a.id INNER JOIN Tour t ON t.id = at.tour_id WHERE t.id = {$ListParametrs['tourID']}");	
	 
	return requestHandler($locations,$currentLang);
	
	}
	
	function requestHandler($result,$currentLang){
		
	$rows_location = array();
	while($r = mysql_fetch_assoc($result)) {	
		if(!empty($r['photo'])){
			$temp = unserialize($r['photo']);
			if(!empty($temp )){
				$r['photo'] = $temp;
			}
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
		$rows_location[] = $r;
		
	} 
		return $rows_location;
	
	}
?>

