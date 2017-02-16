<?php
/*
 * Tours.class.php
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
 
class Tour
{
	public $entryArray;
	
	
	function __construct(array $entryArray) {
		
		$this->entryArray = $entryArray;
	}

	function printToursSelect() {
	
		echo '<div class="checkBoxContainer">';
		foreach($this->entryArray as &$entry){
			$entry->printTourSelectEntry();
		}		
		echo '</div>';
	}
	
	// admin panel "Show tours"
	function printShowTours() {
	
		foreach($this->entryArray as &$entry){
			$entry->printToursSelectToShow();
		}
		
		unset($entry);		
	}
	
	function printTourById() {
	
		foreach($this->entryArray as &$entry){
			$entry->printShowTourById();
		}
		
		unset($entry);		
	}
	
	function printSaveFormTour() {
	
		foreach($this->entryArray as &$entry){
			$entry->printShowSaveFormTour();
		}
		
		unset($entry);	
	}
}

?>