<?php

/*
 * addLocation.php
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

<div class="content contentAdd">
	<h1>Add Location</h1>
	<form id="addLocationForm" class="addLocationForm" action="/admin/includes/addLocationEntry.php" method="POST"  enctype="multipart/form-data">
		<div class="tabs">
			<ul>
				<li>English</li>
				<li>Ukrainian</li>
			</ul>
			<div>
				<div>
					<!-- English tab -->
					<br /><input id="locationTitle" class="locationTitle input inputTitle" type="text" name="locationTitle_Eng" autocomplate="off" placeholder="Title" required />
					<br /><input id="locationShortTitle" class="locationShortTitle inputRight input" type="text" name="locationShortTitle_Eng" autocomplate="off" placeholder="Short title" required />
					<input id="locationAddress" class="locationAddress inputRight input" type="text" name="locationAddress_Eng" autocomplate="off" placeholder="Address" required />
					<textarea id="locationDescription" class="locationDescription inputRight input textareaInput" type="text" name="locationDescription_Eng" autocomplate="off" placeholder="Description" required></textarea>
					<textarea class="locationExcerpt inputRight input textareaExcerpt" type="text" name="locationExcerpt_Eng" style="height:64px" autocomplate="off" placeholder="Excerpt" required></textarea>
					
				</div>
				<div>
					<!-- Ukrainian tab -->
					<br /><input id="locationTitle" class="locationTitle input inputTitle" type="text" name="locationTitle_Rus" autocomplate="off" placeholder="Title" required />
					<br /><input id="locationShortTitle" class="locationShortTitle inputRight input" type="text" name="locationShortTitle_Rus" autocomplate="off" placeholder="Short title" required />
					<input id="locationAddress" class="locationAddress inputRight input" type="text" name="locationAddress_Rus" autocomplate="off" placeholder="Address" required />
					<textarea id="locationDescription" class="locationDescription inputRight input textareaInput" type="text" name="locationDescription_Rus" autocomplate="off" placeholder="Description" required></textarea>
					<textarea class="locationExcerpt inputRight input textareaExcerpt" type="text" name="locationExcerpt_Rus" style="height:64px" autocomplate="off" placeholder="Excerpt" required></textarea>
				</div>
			</div>            
		</div> <!-- END tabs -->
		<input id="locationCoordinates" class="locationCoordinates inputLeft input" type="text" name="locationCoordinates" autocomplate="off" placeholder="Coordinates (Example: 46.485072,30.743927 from Google)" required />
		<input id="locationRating" class="locationRating inputLeft input" type="text" name="locationRating" autocomplate="off" placeholder="Rating (1 - 10)" disabled />		
		<input id="locationPhone" class="locationPhone inputLeft input" type="text" name="locationPhone" autocomplate="off" placeholder="Phone number" />
		<input id="locationWebsites" class="locationWebsites inputLeft input" type="text" name="locationWebsites" autocomplate="off" placeholder="Web site (link)" />
		<input id="locationPanorama" class="locationPanorama inputLeft input" type="text" name="locationPanorama" autocomplate="off" placeholder="Panorama (link)" />
		<div style="clear: both"></div>
		Add images:
		<br /><input  class="locationImage inputLeft input" type="file" name="locationImage[]" autocomplate="off" placeholder="Location image" required />
		<input type="button" class="more_fields" id="more_fields" onclick="add_fields();" value="Add More Images" />
		<div style="clear: both"></div>
		<div id="addMore"></div>		
		<div style="clear: both"></div>
		Select Tours for Location:<br/>
		<?php
			$tours = $db->getAllTours();
			$tours->printToursSelect();
		?>
		<div style="clear: both"></div>
		<input type="submit" class="submit_button" id="submit" value="Send" />
	</form>
</div>