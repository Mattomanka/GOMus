<? 	
	
	function setCurrentLang($langName){
		return setcookie("currentLang", $langName);
	}
	
	
	echo $_GET['functionName']($_GET['sendValue']);
	

?>