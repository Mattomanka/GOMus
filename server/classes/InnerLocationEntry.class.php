<?php
/*
 * InnerLocationEntry.class.php
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
 
class InnerLocationEntry
{
	public $id;
	public $title;
	public $description;
	public $image;
	public $locationID;
	public $positionColor;

	
	function __construct(){
		
		$a = func_get_args(); 
        $i = func_num_args(); 
        if (method_exists($this,$f='__construct'.$i)) { 
            call_user_func_array(array($this,$f),$a); 
        }
		
	}
	
	function __construct4($locationID, $title, $image, $description) {
		$this->locationID 	= $locationID;
		$this->title 		= $title;
		$this->image 		= $image;
		$this->description 	= $description;
	}

	function __construct5($id, $locationID, $title, $description, $image) {
		$this->id			= $id;
		$this->locationID 	= $locationID;
		$this->title 		= $title;
		$this->image 		= $image;
		$this->description 	= $description;
	}

	function __construct6($id, $locationID, $title, $image, $description, $positionColor) {
		$this->id				= $id;
		$this->locationID 		= $locationID;
		$this->title 			= $title;
		$this->image 			= $image;
		$this->description 		= $description;
		$this->positionColor	= $positionColor;
	}
	
	function printShowAllInnerLocations() {
		$photos 	 = unserialize($this->image);  
		$curr 		 = $_SERVER['REQUEST_URI'];
		$string		 = '<div class="showing">';
        $string 	.= '  	<div id="spoiler" class="span12">';
        $string 	.= '  		<div class="head-spoiler">' . $this->title . '<a class="delete-link" href="/admin/includes/delete.inner.php?id='.$this->id.'&curr='.$curr.'">remove</a> <a class="edit-link" href="/admin/content/editInnerLocation.php?id='.$this->id.'">edit</a></div>';
		$string 	.= ' 	</div>';	
		$string		.= '</div>';
		echo $string;
	}
	
	function printInnerLocationById() {
		$photos 	 = unserialize($this->image);  
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
		if(stristr($description, '[en:]') === FALSE) {
			$description_rus = $description;
			$description_eng = $description;			
		} else {
			$descriptions 	 = preg_split("/([\\[]{1})\\w+([:]])/", $description);
			$description_rus = $descriptions[1];
			$description_eng = $descriptions[2];
		}		
		
		
		
		$string ='
			<form id="addInnerLocationForm" class="addInnerLocationForm" action="/admin/includes/update.inner.php" method="POST" enctype="multipart/form-data">
				<input type="hidden" value="' . $this->id . '" name="idElem">
				<input type="hidden" value="' . $this->locationID . '" name="locationsSelected">
				<input type="hidden" value="' . $curr . '" name="requestUrl">
				<div class="tabs">
					<ul>
						<li>English</li>
						<li>Ukrainian</li>
					</ul>
					<div>
						<div>
							<!-- English tab -->
							<div class="subscribe"><span>Title</span></div>
							<br /><input id="innerLocationTitle" class="innerLocationTitle inputLeft input inputTitle" type="text" name="innerLocationTitle_Eng" autocomplate="off" value="'. $title_eng .'" required />
							<div class="subscribe"><span>Description</span></div>
							<textarea id="innerLocationDescription" class="innerLocationDescription inputRight input textareaInput" type="text" name="innerLocationDescription_Eng" autocomplate="off" required>'.$description_eng.'</textarea>
						</div>
						<div>
							<!-- Ukrainian tab -->
							<div class="subscribe"><span>Title</span></div>
							<br /><input id="innerLocationTitle" class="innerLocationTitle inputLeft input inputTitle" type="text" name="innerLocationTitle_Rus" autocomplate="off" value="'.$title_rus.'" />
							<div class="subscribe"><span>Description</span></div>
							<textarea id="innerLocationDescription" class="innerLocationDescription inputRight input textareaInput" type="text" name="innerLocationDescription_Rus" autocomplate="off">'.$description_rus.'</textarea>
						</div>
					</div>            
				</div> <!-- END tabs -->
				<div style="clear: both"></div>';
				
				if($photos) {
					$i=0;
					foreach($photos as $photo) {
						$i++;
						$string .='
						<input type="hidden" class="locationImageResult'.$i.'" name="locationImageResult[]" value="'.$photo.'">
						<div id="" style="height:150px; width:300px; margin-right:10px; float:left;">
							<img class="remove-img" onClick="deleteInner('.$i.')" src="http://gid.areyoualive.ru/admin/content/images/popup-close-button.png" style="float:right; vertical-align:top; height:18px; width:18px; z-index:9999;">
							<div style="height:150px; width:300px; border:1px solid #999; float:left; margin: 0 10px 0 0; box-shadow: 0 0 1px 1px #888888;">
								<img src="'.$photo.'" style="height:150px; width:300px; z-index:999;" id="">
							</div>
						</div>';
					}
				} else {
						$string .='		
						<input type="hidden" class="locationImageResult" name="locationImageResult[]" value="'.$this->image.'">
						<br />
						<input class="locationImage inputLeft input" type="file" name="locationImage[]" autocomplate="off" placeholder="Location image" />
						<input type="button" class="more_fields" id="more_fields" onclick="add_fields();" value="Add More Images" />
						<br />';
				}
				$string .='<div style="clear: both"></div>
				<br />		
				<input class="locationImage inputLeft input" type="file" name="locationImage[]" autocomplate="off" placeholder="Location image" />
				<input type="button" class="more_fields" id="more_fields" onclick="add_fields();" value="Add More Images" />
				<div style="clear: both"></div>		
				<div id="addMore"></div>		
				<div style="clear: both"></div>
				<input type="submit" class="submit_button" id="submit" value="Send" />
			</form>		
		';
		
		echo $string;
	}
}

?>