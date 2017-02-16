<?php
/*
 * QuestEntry.class.php
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
 * |______________________________________________________________|
 */
 
class QuestEntry
{
	public $id;
	public $tourID;
	public $question;
	public $locationId;

	
	function __construct(){
		
		$a = func_get_args(); 
        $i = func_num_args(); 
        if (method_exists($this,$f='__construct'.$i)) { 
            call_user_func_array(array($this,$f),$a); 
        }
		
	}
	
	function __construct3($question, $locationId, $tourID) {
		$this->question 		= $question;
		$this->locationId 		= $locationId;
		$this->tourID 			= $tourID;
	}	

	function __construct4($id, $tourID, $question, $locationId) {
		$this->id				= $id;
		$this->tourID 			= $tourID;
		$this->question 		= $question;
		$this->locationId 		= $locationId;
	}
	
	function printShowAllQuests() {
		$curr 		 = $_SERVER['REQUEST_URI'];
		$string		 = '<div class="showing">';
        $string 	.= '  	<div id="spoiler" class="span12">';
        $string 	.= '  		<div class="head-spoiler" onClick="spoiler(\'row'.$this->id.'\')">Question ' . $this->id . '<a class="delete-link" href="/admin/includes/delete.quest.php?id='.$this->id.'&curr='.$curr.'">remove</a><a class="delete-link" href="/admin/content/editQuest.php?id='.$this->id.'">edit</a></div>';
		$string 	.= '   		<div class="row'.$this->id.' row" id="alls">';
		$string		.= 				$this->question;
		$string		.= '			<div style="clear:both"></div><hr>';
		$string 	.= '   		</div>';
		$string 	.= ' 	</div>';
		$string		.= '</div>';
		echo $string;
	}
	function printShowQuestById() {
		//question
		$question 	 = $this->question;
		if(stristr($question, '[en:]') === FALSE) {
			$question_rus = $question;
			$question_eng = $question;			
		} else {
			$questions 	 = preg_split("/([\\[]{1})\\w+([:]])/", $question);
			$question_rus = $questions[1];
			$question_eng = $questions[2];
		}		
		$string = '
			<form id="addQuestForm" class="addQuestForm" action="/admin/includes/update.quest.php" method="POST">
				<input type="hidden" value="'.$this->id.'" name="idElem">
				<div class="tabs">
					<ul>
						<li>English</li>
						<li>Ukrainian</li>
					</ul>
					<div>
						<div>
							<!-- English tab -->
							<textarea id="question" class="question inputLeft input textareaInput" type="text" name="question_Eng" autocomplate="off" required>'.$question_eng.'</textarea>
						</div>
						<div>
							<!-- Ukrainian tab -->
							<textarea id="question" class="question inputLeft input textareaInput" type="text" name="question_Rus" autocomplate="off" required>'.$question_rus.'</textarea>
						</div>
					</div>            
				</div> <!-- END tabs -->
				<div style="clear: both"></div>
				Select Location for the Quest:<br/>

				<div style="clear: both"></div>
				<input type="submit" class="submit_button" id="submit" value="Save" />
			</form>		
		';
		echo $string;
	}	
	
}

?>