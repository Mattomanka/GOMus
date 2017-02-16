<?php
/*
 * InnerLocation.class.php
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
 
class InnerLocation
{
	public $entryArray;
	
	
	function __construct(array $entryArray) {
		
		$this->entryArray = $entryArray;
	}
	
	function printAllInnerLocations() {
		foreach($this->entryArray as &$entry){
			$entry->printShowAllInnerLocations();
		}
		unset($entry);
	}

	function printSaveFormInnerLocation() {
	
		foreach($this->entryArray as &$entry){
			$entry->printInnerLocationById();
		}
		unset($entry);
		
	}	
}

?>