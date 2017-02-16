<?php

/*
 * editInnerLocation.php
 * created by Ian Zablovschii
 *
 * ________________________________________________________________
 * | CHANGE LOG                                                   |
 * |______________________________________________________________|
 * | Date       | By              | Reason                        |
 * |--------------------------------------------------------------|
 * | 06.12.2015 | Ian Zablovschii | First version.                |
 * |--------------------------------------------------------------|
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |______________________________________________________________|
 */

	require_once "../header.php";
	require "../../defines.php";
	require "../../classes.php";
	require "../../database.php";
	
	$id = $_GET['id'];
	$curr = $_SERVER['REQUEST_URI'];
?>
<div class="content contentAdd">
	<h1>Edit inner location</h1>
	
		<?php
			$locationById = $db->getInnerLocationById($id);
			$locationById->printSaveFormInnerLocation();	
		?>
		
	
</div>