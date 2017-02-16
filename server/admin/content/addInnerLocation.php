<?php

/*
 * addInnerLocation.php
 * created by Ian Zablovschii
 *
 * ________________________________________________________________
 * | CHANGE LOG                                                   |
 * |______________________________________________________________|
 * | Date       | By              | Reason                        |
 * |--------------------------------------------------------------|
 * | 25.10.2015 | Ian Zablovschii | First version.                |
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

<script type='text/javascript'>
function add_fields() {
   $("#addMore").append('<input class="locationImage inputLeft input" type="file" name="locationImage[]" /><div style="clear: both"></div>');
}
$(function(){
	//Color
	var color 	 = $('#colorpicker').val();
		hexcolor = $('#hexcolor');

	hexcolor.html(color);

	$('#colorpicker').on('change', function() {
		hexcolor.html(this.value);
	});
});
</script>

<div class="content contentAdd">
	<h1>Add Inner Location</h1>
	<form id="addInnerLocationForm" class="addInnerLocationForm" action="/admin/includes/addInnerLocationEntry.php" method="POST" enctype="multipart/form-data">
		<div class="tabs">
			<ul>
				<li>English</li>
				<li>Ukrainian</li>
			</ul>
			<div>
				<div>
					<!-- English tab -->
					<br /><input id="innerLocationTitle" class="innerLocationTitle inputLeft input" type="text" name="innerLocationTitle_Eng" autocomplate="off" placeholder="English title" required />
					<textarea id="innerLocationDescription" class="innerLocationDescription inputRight input" type="text" name="innerLocationDescription_Eng" autocomplate="off" placeholder="English description" required></textarea>
				</div>
				<div>
					<!-- Ukrainian tab -->
					<br /><input id="innerLocationTitle" class="innerLocationTitle inputLeft input" type="text" name="innerLocationTitle_Rus" autocomplate="off" placeholder="Ukrainian title" required />
					<textarea id="innerLocationDescription" class="innerLocationDescription inputRight input" type="text" name="innerLocationDescription_Rus" autocomplate="off" placeholder="Ukrainian description" required></textarea>
				</div>
			</div>            
		</div> <!-- END tabs -->		
		<div>
			<label for="color">Position color:</label><input type="color" id="colorpicker" name="positionColor" value="#ff0000"><div id="hexcolor"></div>
		</div>
		<input  class="innerLocationImage inputLeft input" type="file" name="locationImage[]" autocomplate="off" required />
		<input type="button" class="more_fields" id="more_fields" onclick="add_fields();" value="Add More Images" />
		<div style="clear: both"></div>
		<div id="addMore"></div>		
		<div style="clear: both"></div>
		Select Location for Inner Location:<br/>
		<?php
			$locations = $db->getAllLocations();
			$locations->printLocationsSelect();
		?>
		<input type="submit" class="submit_button" id="submit" value="Send" />
	</form>
</div>