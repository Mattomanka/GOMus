<?php
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
	
	$currentLang = getCurrentLang();
	if(!empty($_GET['innerID'])){
		/*inner locations*/
		$innerLocations = mysql_query("SELECT * FROM  InnerLocation WHERE idLocation ={$_GET['id']} and id ={$_GET['innerID']}");
		$rows_innerLocation = array();
		while($r = mysql_fetch_assoc($innerLocations)) {
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
		$rows_innerLocation = $r;
			
		}
	}else {
		$innerLocations = mysql_query("SELECT * FROM  Location WHERE id ={$_GET['id']} ");
		$rows_innerLocation = array();
		while($r = mysql_fetch_assoc($innerLocations)) {
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
		$rows_innerLocation = $r;
			
		}
	}
	
?>

<div class="rooms_list">
	<div class="item item_<?=$_GET['number']; ?> cf">			
					<div class="popup_slider_wrapper">
				<ul class="popup_slider">
				<? foreach($rows_innerLocation['photo'] as $id => $imageSRC) {?>
					<li> <img src="<?=$imageSRC; ?>" alt="<?=$rows_innerLocation['name'];?>" > </li>
				<? } ?>
									</ul>
			</div>
		<? if(!empty($_GET['innerID'])){	?>
		<div class="number"><?=$_GET['number']; ?></div>
		<? } ?>
		<div class="text">
			<h3><?=$rows_innerLocation['name'];?></h3>
			<p><?=$rows_innerLocation['description'];?></p>
		</div>
	</div>
</div>
