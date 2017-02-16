<?php

/*
 * addTour.php
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
require_once "../header.php";
?>
<div class="content contentAdd">
	<h1>Add Tour</h1>
	<form id="addTourForm" class="addTourForm" action="/admin/includes/addTourEntry.php" method="POST" enctype="multipart/form-data" >	
		<div class="tabs">
			<ul>
				<li>English</li>
				<li>Ukrainian</li>
			</ul>
			<div>
				<div>
					<!-- English tab -->
					<input class="tourTitle inputLeft input" type="text" name="tourTitleEng" autocomplate="off" placeholder="English tour title" required />
					<br /><textarea class="tourDescription description inputLeft input textareaInput" type="text" name="tourDescriptionEng" autocomplate="off" placeholder="English description" required></textarea>
				</div>
				<div>
					<!-- Ukrainian tab -->
					<input class="tourTitle inputLeft input" type="text" name="tourTitleRus" autocomplate="off" placeholder="Ukrainian tour title" required />
					<br /><textarea class="tourDescription description inputLeft input textareaInput" type="text" name="tourDescriptionRus" autocomplate="off" placeholder="Ukrainian description" required></textarea>
				</div>
			</div>            
		</div>
		Add image:
		<br /><input id="tourImage" class="tourImage inputRight input" type="file" name="tourImage" required /><br />
		<div style="clear: both"></div>
		<input type="submit" class="submit_button" id="submit" value="Send" />
	</form>
</div>