$("#addTourForm").submit(function(e){
	e.preventDefault();
	$.post("includes/addTourEntry.php", $("#addTourForm").serialize(), function(data){
		/*if(data == "unsuccessful"){
			$("#content").html(data);
		}
		else{
			//Reload page
			location.reload();
		}*/
		//$("#content").html(data);
	});	
});