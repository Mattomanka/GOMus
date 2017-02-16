<?php 
/*
 * index.php
 * created by Ian Zablovschii
 * Admin Panel
 * ________________________________________________________________
 * | CHANGE LOG                                                   |
 * |______________________________________________________________|
 * | Date       | By              | Reason                        |
 * |--------------------------------------------------------------|
 * | 23.11.2014 | Ian Zablovschii | First version                 |
 * |--------------------------------------------------------------|
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |______________________________________________________________|
 */
	require "../defines.php";
	require "../classes.php";
	
	//Starts connection
	require "../database.php";
	require_once "header.php";
?>

			<div class="content homePage">
				<div class="oneBlockHome">
					<ul>
						<a href="content/addTour.php"><li>Add Tour</li></a>
						<a href="content/addLocation.php"><li>Add a Location to Tour</li></a>
						<a href="content/addInnerLocation.php"><li>Add InnerLocation to Location</li></a>
						<a href="#"><li>Add Quest to Tour</li></a>
					</ul>
				</div>
				<div class="oneBlockHome">
					<ul>
						<a href="content/showTour.php"><li>Show all of the tours</li></a>
						<a href="content/showLocations.php"><li>Show all of the locations</li></a>
						<a href="content/showInnerLocations.php"><li>Show all of the inner locations</li></a>
					</ul>
				</div>
				<div style="clear: both"></div>
			</div>
