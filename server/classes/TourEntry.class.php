<?php
/*
 * TourEntry.class.php
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
 * |______________________________________________________________|
 */
 
class TourEntry
{
	public $id;
	public $title;
	public $image;
	public $flag;
	public $description;
	public $photo;

	
	function __construct(){		
		$a = func_get_args(); 
        $i = func_num_args(); 
        if (method_exists($this,$f='__construct'.$i)) { 
            call_user_func_array(array($this,$f),$a); 
        }
	}
	
	function __construct1($title) {
		$this->title		= $title;
	}
	
	function __construct2($id, $title) {
		$this->id				= $id;
		$this->title			= $title;
	}
	
	function __construct3($title, $image, $description) {
		$this->title		= $title;
		$this->image		= $image;
		$this->description	= $description;
	}
	
	function __construct4($id, $title, $image, $description) {
		$this->id			= $id;
		$this->title		= $title;
		$this->image		= $image;
		$this->description	= $description;
	}
	
	function printTourSelectEntry() {
		$title = $this->title;
		
		if(stristr($title, '[en:]') === FALSE) {
			$title_rus	= $title;
			$title_eng	= $title;			
		} else {		
			$titles 	= preg_split("/([\\[]{1})\\w+([:]])/", $title);
			$title_rus	= $titles[1];
			$title_eng	= $titles[2];
		}	
		$string = '<input type="checkbox" name="tourSelected[]" value="'.$this->id.'" />'.$title_eng.'</br>';
		echo $string;
	}
	function printToursSelectToShow() {
		require "../../database.php"; 	
		$curr 		 = $_SERVER['REQUEST_URI'];
		$title = $this->title;
		
		if(stristr($title, '[en:]') === FALSE) {
			$title_rus	= $title;
			$title_eng	= $title;			
		} else {		
			$titles 	= preg_split("/([\\[]{1})\\w+([:]])/", $title);
			$title_rus	= $titles[1];
			$title_eng	= $titles[2];
		}		
		
		$locations = $db->getLocationsByTourId($this->id);
		$locations->printShowAllLocationsByTourId($this->id, $title_eng, $curr);


		//echo $string;
	}
	
	function printShowTourById() {
		$curr 		 = $_SERVER['REQUEST_URI'];
		$string 	.= '   		<div class="row'.$this->id.' row">';
		$string 	.= '    			<div class="span12">';
		$string 	.= '     				 Tour ID: 
											<br/><div class="input text idElem">' . $this->id . '</div>';
		$string 	.= '    			</div>';
		$string		.= '				<div style="clear:both"></div><hr>';
		$string 	.= '    			<div class="span12">';
		$string 	.= '     				 Title:  <br/>
											<div class="input text titleElem" contentEditable="true">' . $this->title . '</div>';
		$string 	.= '    			</div>';
		$string		.= '				<div style="clear:both"></div><hr>';
		$string 	.= '    			<div class="span12">';
		$string 	.= '     				 Image:  <br/>
											<div class="input text imageElem" contentEditable="true"><img contentEditable="true" src="' . $this->image . '"><input type="file" name="tourFile" /></div>
										</div>';
		$string		.= '				<div style="clear:both"></div><hr>';
		$string 	.= '    			 <div class="span12">';
		$string 	.= '     				 Description:  <br/>
											<div class="input text descriptionElem" contentEditable="true">' . $this->description . '</div>';
		$string 	.= '    			</div>';
		$string		.= '				<div style="clear:both"></div><hr>';
		$string 	.= '   			</div>';
		$string 	.= ' 	<div style="clear:both; margin-bottom: -51px;"></div>';
		echo $string;
	}
	
	function printShowSaveFormTour() {
		$curr 		 = $_SERVER['REQUEST_URI'];
		
		//title
		$title 		= $this->title;
		
		if(stristr($title, '[en:]') === FALSE) {
			$title_rus	= $title;
			$title_eng	= $title;			
		} else {		
			$titles 	= preg_split("/([\\[]{1})\\w+([:]])/", $title);
			$title_rus	= $titles[1];
			$title_eng	= $titles[2];
		}
		
		//description
		$description 	 = $this->description;
		if(stristr($title, '[en:]') === FALSE) {
			$description_rus = $description;
			$description_eng = $description;			
		} else {
			$descriptions 	 = preg_split("/([\\[]{1})\\w+([:]])/", $description);
			$description_rus = $descriptions[1];
			$description_eng = $descriptions[2];
		}
		
		$string = '
			<form id="addTourForm" class="addTourForm" action="/admin/includes/update.tour.php" method="POST" enctype="multipart/form-data">	
				<input type="hidden" value="' . $this->id . '" name="idElem">
				<input type="hidden" value="' . $curr . '" name="requestUrl">
				<div class="tabs">
					<ul>
						<li>English</li>
						<li>Ukrainian</li>
					</ul>
					<div>
						<div>
							<!-- English tab -->
							<input class="tourTitle inputLeft input" type="text" name="tourTitleEng" autocomplate="off" value="' . $title_eng . '" required />
							<br /><textarea class="tourDescription description inputLeft input textareaInput" type="text" name="tourDescriptionEng" autocomplate="off" required>' . $description_eng . '</textarea>
						</div>
						<div>
							<!-- Ukrainian tab -->
							<input class="tourTitle inputLeft input" type="text" name="tourTitleRus" autocomplate="off" value="' . $title_rus . '" />
							<br /><textarea class="tourDescription description inputLeft input textareaInput" type="text" name="tourDescriptionRus" autocomplate="off" placeholder="Ukrainian description">' . $description_rus . '</textarea>
						</div>
					</div>            
				</div>';
				
				if($this->image) {
					$string .='
					<input type="hidden" name="tourImageResult" value="'.$this->image.'">
					<div id="" style="height:150px; width:300px; margin-right:10px; float:left;">
						<img class="remove-img" src="http://gid.areyoualive.ru/admin/content/images/popup-close-button.png" style="float:right; vertical-align:top; height:18px; width:18px; z-index:9999;">
						<div style="height:150px; width:300px; border:1px solid #999; float:left; margin: 0 10px 0 0; box-shadow: 0 0 1px 1px #888888;">
							<img src="'.$this->image.'" style="height:150px; width:300px; z-index:999;" id="">
						</div>
					</div>
					<div style="clear: both"></div><br/>';
				} else {
					$string .='			
					<input type="hidden" name="tourImageResult" value="'.$this->image.'">
					<br />
					<input class="tourImage inputRight input" type="file" name="tourImage" required />
					<br />';
				}
				$string .= '
				<br />
				<input style="display:none" class="tourImage inputRight input" type="file" name="tourImage" />
				<br />				
				<div style="clear: both"></div>
				<input type="submit" class="submit_button" id="submit" value="Save" />
			</form>';

		echo $string;
	}
}

?>