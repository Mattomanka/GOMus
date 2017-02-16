$(document).ready(function(){
	
	$('#lang').change(function(){
		var currentLang = $(this).val();
		$.get("/desktop/ajax.php",{
			functionName: "setCurrentLang",
			sendValue: currentLang
		  },function (data){
			  if(data==1){
				location.reload();
			  }else {
				alert("Hmn.. It doesn't work :(")
			  }
			});
		
		
	});
	
});

	