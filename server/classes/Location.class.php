<?php
/*
 * Location.class.php
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
 
class Location
{
	public $entryArray;
	
	
	function __construct(array $entryArray) {
		
		$this->entryArray = $entryArray;
		
	}
	
	function printLocationsSelect() {
	
		echo '<select name="locationsSelected" class="input">';
		foreach($this->entryArray as &$entry){
			$entry->printLocationSelectEntry();
		}
		echo '</select>';
		unset($entry);
		
	}
	
	function printAllLocations() {
	
		foreach($this->entryArray as &$entry){
			$entry->printShowAllLocations();
		}
		unset($entry);
		
	}
	
	function printShowAllLocationsByTourId($id, $title, $curr) {
	
		echo '<div class="showing">';
        echo '  	<div id="spoiler" class="span12">';
        echo '  		<div class="head-spoiler" onClick="spoiler(\'row'.$id.'\')">' . $title . '<span>show all locations</span><a class="delete-link" href="/admin/includes/delete.tour.php?id='.$id.'&curr='.$curr.'">remove</a> <a class="edit-link" href="/admin/content/editTour.php?id='.$id.'">edit</a></div>';
		echo '			<div class="row'.$id.' row" id="alls">';
		
			if(!$this->entryArray) echo '<div class="single_location">Nothing found</div>';
			foreach($this->entryArray as &$entry){
				$entry->printShowAllLocationsByTourId();
			}
		echo '			</div>';
		echo ' 		</div><div style="clear:both; margin-bottom: -51px;"></div>';
		echo '</div>';
		unset($entry);
		
	}
	
	function printSaveFormLocation() {
	
		foreach($this->entryArray as &$entry){
			$entry->printShowSaveFormLocation();
		}
		unset($entry);	
		
	}	
}

?>