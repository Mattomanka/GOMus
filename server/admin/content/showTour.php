<?php

/*
 * showTour.php
 * created by Ian Zablovschii
 *
 * ________________________________________________________________
 * | CHANGE LOG                                                   |
 * |______________________________________________________________|
 * | Date       | By              | Reason                        |
 * |--------------------------------------------------------------|
 * | 10.11.2015 | Ian Zablovschii | First version.                |
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
		var description = parent.find('.descriptionElem').text();
		var titleElem = parent.find('.titleElem').text();
		var imageElem = parent.find('.imageElem').text();
		$.ajax({
			type: 'POST',
			url:  'http://gid.areyoualive.ru/admin/includes/update.tour.php',
			data: {'idElem': idElem, 'descriptionElem': description, 'titleElem': titleElem, 'imageElem': imageElem},
			success: function(data) {
				console.log(data);
			}
		});
	});
});

</script>
<div class="content contentAdd">
	<h1>Tours & locations</h1>
	<?php
		$tours = $db->getAllTours();
		$tours->printShowTours();
	?>
</div>