<?php

/*
 * showLocations.php
 * created by Ian Zablovschii
 *
 * ________________________________________________________________
 * | CHANGE LOG                                                   |
 * |______________________________________________________________|
 * | Date       | By              | Reason                        |
 * |--------------------------------------------------------------|
 * | 11.11.2015 | Ian Zablovschii | First version.                |
 * |--------------------------------------------------------------|
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |______________________________________________________________|
 */
require "../../defines.php";
require "../../classes.php";
require "../../database.php"; 
require_once "../header.php";
?>
<script>
$(document).ready(function(){
 	$('.saveBut').click(function(){
		var parent = $(this).parents('.showing');
		
		var idElem = parent.find('.idElem').text();
		var titleElem = parent.find('.titleElem').text();
		var addressElem = parent.find('.addressElem').text();
		var coordinatesElem = parent.find('.coordinatesElem').text();
		var excerptElem = parent.find('.excerptElem').text();
		var descriptionElem = parent.find('.descriptionElem').text();
		
		$.ajax({
			type: 'post',
			url:  'http://gid.areyoualive.ru/admin/includes/update.location.php',
			data: {'addressElem': addressElem, 'titleElem': titleElem, 'coordinatesElem': coordinatesElem, 'excerptElem': excerptElem, 'descriptionElem': descriptionElem, 'idElem': idElem},
			success: function(data) {
				console.log(data);
			}
		});
	});
});
</script>
<div class="content contentAdd">
	<h1>Locations</h1>
	<?php
		$locations = $db->getAllLocations();
		$locations->printAllLocations();
	?>
</div>