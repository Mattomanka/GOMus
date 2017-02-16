<?php
/*
 * Quest.class.php
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
 
class Quest
{
	public $entryArray;
	
	
	function __construct(array $entryArray) {
		
		$this->entryArray = $entryArray;
	}
	
	function printShowQuests() {
	
		foreach($this->entryArray as &$entry){
			$entry->printShowAllQuests();
		}
		
		unset($entry);		
	}
	
	function printSaveFormQuest() {
	
		foreach($this->entryArray as &$entry){
			$entry->printShowQuestById();
		}
		
		unset($entry);		
	}
}

?>