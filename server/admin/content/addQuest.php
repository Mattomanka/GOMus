<?php

/*
 * addQuest.php
 * created by Ian Zablovschii
 *
 * ________________________________________________________________
 * | CHANGE LOG                                                   |
 * |______________________________________________________________|
 * | Date       | By              | Reason                        |
 * |--------------------------------------------------------------|
 * | 12.11.2015 | Ian Zablovschii | First version.                |
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
	<h1>Add Quest</h1>
	<form id="addQuestForm" class="addQuestForm" action="/admin/includes/addQuestEntry.php" method="POST">
		<div class="tabs">
			<ul>
				<li>English</li>
				<li>Ukrainian</li>
			</ul>
			<div>
				<div>
					<!-- English tab -->
					<textarea id="question" class="question inputLeft input textareaInput" type="text" name="question_Eng" autocomplate="off" placeholder="Question in english" required></textarea>
				</div>
				<div>
					<!-- Ukrainian tab -->
					<textarea id="question" class="question inputLeft input textareaInput" type="text" name="question_Rus" autocomplate="off" placeholder="Question in Ukrainian" required></textarea>
				</div>
			</div>            
		</div> <!-- END tabs -->
		<div style="clear: both"></div>
		Select Location for the Quest:<br/>
		<?php
			$locations = $db->getAllLocations();
			$locations->printLocationsSelect();
		?>
		<br/>or / and<br/>
		Select Tour for the Quest:<br/>
		<?php
			$tours = $db->getAllTours();
			$tours->printToursSelect();
		?>
		<div style="clear: both"></div>
		<input type="submit" class="submit_button" id="submit" value="Send" />
	</form>
</div>