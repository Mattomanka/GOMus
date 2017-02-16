<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>GOMus</title>
		<link href="http://gid.areyoualive.ru/admin/styles/css/bootstrap.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="http://gid.areyoualive.ru/admin/styles/css/admin.css">
		<script src="http://code.jquery.com/jquery-latest.js"></script>
		<script src="http://gid.areyoualive.ru/admin/styles/js/bootstrap.js"></script>
		<script src="http://gid.areyoualive.ru/admin/js/tabs.js"></script>
		<link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
	</head>
	<body style="background-color: #e4f6f8;">
		<script type="text/javascript">
			function spoiler(class_spol) {
				$("#spoiler ."+class_spol+"").fadeToggle("fast");
			}
			$(document).ready(function(){
				$(".tabs").lightTabs();
			});
		</script>
		<script type='text/javascript'>
			function add_fields() {
			   $("#addMore").append('<input class="locationImage inputLeft input" type="file" name="locationImage[]" /><div style="clear: both"></div>');
			}
		</script>
		<script>
			$(document).ready(function(){
				$(document).on("click", ".remove-img", function () {
					$(this).parent().find('img').not(this).remove();
					$('input.tourImageResult').val('');
					$('input.tourImage').css("display","block");
					$("input.tourImage").prop('required',true);
					$("input.locationImage").css("display","block");
					$("input.more_fields").css("display","block");
					//$("input.locationImage").prop('required',true);
					
					$("input.innerLocationImage").css("display","block");
			
					
					
				});
			});
			
			function deleteInner(numb) {
				$('.locationImageResult'+numb).remove();
			}			
		</script>
		<div class="menu">
			<div class="title">
				<h1><a href="/admin/">GOMus</a></h1>
			</div>
			<ul>
				<li>Add:</li>
				<li><a href="/admin/content/addTour.php">Add new tour</a></li>
				<li><a href="/admin/content/addLocation.php">Add new location</a></li>
				<li><a href="/admin/content/addInnerLocation.php">Add new inner location</a></li>
				<li><a href="/admin/content/addQuest.php">Add new test</a></li>
			</ul>
			<hr>		
			<ul>
				<li>Show:</li>
				<li><a href="/admin/content/showTour.php">Tours & locations</a></li>
				<li><a href="/admin/content/showInnerLocations.php">Inner locations</a></li>
				<li><a href="/admin/content/showQuests.php">Quests</a></li>
			</ul>		
		</div>
		<nav>
			<ul>
				<a href="/admin/"><li>Home</li></a>
			</ul>
		</nav>