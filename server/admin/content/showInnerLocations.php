<?php

/*
 * showInnerLocations.php
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
		var descriptionElem = parent.find('.descriptionElem').text();
		
		$.ajax({
			type: 'post',
			url:  'http://gid.areyoualive.ru/admin/includes/update.inner.php',
			data: {'idElem': idElem, 'titleElem': titleElem, 'descriptionElem': descriptionElem},
			success: function(data) {
				console.log(data);
			}
		});
	});
});
</script>
<div class="content contentAdd">
	<h1>Inner locations</h1>
	<?php
		$locations = $db->getAllInnerLocations();
		$locations->printAllInnerLocations();
	?>
</div>