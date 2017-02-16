<?php
/*
 * LocationEntry.class.php
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
 
class LocationEntry
{
	public $id;
	public $title;
	public $address;
	public $coordinates;
	public $description;
	public $rating;
	public $tourID;
	public $image;
	public $shortname;
	public $excerpt;
	public $phone;
	public $websites;
	public $panorama;

	
	function __construct(){
		
		$a = func_get_args(); 
        $i = func_num_args(); 
        if (method_exists($this,$f='__construct'.$i)) { 
            call_user_func_array(array($this,$f),$a); 
        }
	
	}
	
	function __construct2($id, $title) {
		$this->title 		= $title;
		$this->id			= $id;
	}
	
	function __construct6($title, $address, $coordinates, $description, $rating, $tourID) {
		$this->title 		= $title;
		$this->address 		= $address;
		$this->coordinates	= $coordinates;
		$this->description 	= $description;
		$this->rating 		= $rating;
		$this->tourID 		= $tourID;
	}
	
	function __construct7($title, $address, $coordinates, $description, $rating, $tourID, $image) {
		$this->title 		= $title;
		$this->address 		= $address;
		$this->coordinates	= $coordinates;
		$this->description 	= $description;
		$this->rating 		= $rating;
		$this->tourID 		= $tourID;
		$this->image 		= $image;
	}
	
	function __construct9($id, $tourID, $title, $address, $coordinates, $rating, $description, $excerpt, $image) {
		$this->id			= $id;
		$this->tourID 		= $tourID;
		$this->title 		= $title;
		$this->address 		= $address;
		$this->coordinates	= $coordinates;
		$this->rating 		= $rating;
		$this->description 	= $description;
		$this->excerpt		= $excerpt;
		$this->image 		= $image;
	}
	
	function __construct12($title, $address, $coordinates, $description, $rating, $tourID, $image, $shortname, $excerpt, $phone, $websites, $panorama) {
		$this->title 		= $title;
		$this->address 		= $address;
		$this->coordinates	= $coordinates;
		$this->description 	= $description;
		$this->rating 		= $rating;
		$this->tourID 		= $tourID;
		$this->image 		= $image;
		$this->shortname 	= $shortname;
		$this->excerpt 		= $excerpt;
		$this->phone 		= $phone;
		$this->websites 	= $websites;
		$this->panorama 	= $panorama;
	}
	
	function __construct13($id, $title, $address, $coordinates, $description, $rating, $tourID, $image, $shortname, $excerpt, $phone, $websites, $panorama) {
		$this->id			= $id;
		$this->title 		= $title;
		$this->address 		= $address;
		$this->coordinates	= $coordinates;
		$this->description 	= $description;
		$this->rating 		= $rating;
		$this->tourID 		= $tourID;
		$this->image 		= $image;
		$this->shortname 	= $shortname;
		$this->excerpt 		= $excerpt;
		$this->phone 		= $phone;
		$this->websites 	= $websites;
		$this->panorama 	= $panorama;
	}
	

	function printLocationSelectEntry() {
		$title = $this->title;
		
		if(stristr($title, '[en:]') === FALSE) {
			$title_rus	= $title;
			$title_eng	= $title;			
		} else {		
			$titles 	= preg_split("/([\\[]{1})\\w+([:]])/", $title);
			$title_rus	= $titles[1];
			$title_eng	= $titles[2];
		}	
		$string = '<option value="'.$this->id.'">'.$title_eng.'</option>';
		echo $string;
	}

	function printShowAllLocations() {
		$photos 	 = unserialize($this->image);  
		$curr 		 = $_SERVER['REQUEST_URI'];
		$string		 = '<div class="showing">';
        $string 	.= '  	<div id="spoiler" class="span12">';
        $string 	.= '  		<div class="head-spoiler" onClick="spoiler(\'row'.$this->id.'\')">' . $this->title . '<a class="delete-link" href="/admin/includes/delete.location.php?id='.$this->id.'&curr='.$curr.'">remove</a></div>';
		$string 	.= '   		<div class="row'.$this->id.' row" id="alls">';
		$string 	.= '    			<div class="span12" style="display: none">';
		$string 	.= '     				 Location id: <div class="input text idElem">' . $this->id . '</div>';
		$string 	.= '    			</div>';
		$string 	.= '    			<div class="span12">';
		$string 	.= '     				 Tour ID: <div class="input text">' . $this->tourID . '</div>';
		$string 	.= '    			</div>';
		$string		.= '				<div style="clear:both"></div><hr>';
		$string 	.= '    			<div class="span12">';
		$string 	.= '     				 Title: <div class="input text titleElem"  contentEditable="true">' . $this->title . '</div>';
		$string 	.= '    			</div>';
		$string		.= '				<div style="clear:both"></div><hr>';
		$string 	.= '    			<div class="span12">';
		$string 	.= '     				 Address: <div class="input text addressElem" contentEditable="true">' . $this->address . '</div>';
		$string 	.= '    			</div>';
		$string		.= '				<div style="clear:both"></div><hr>';
		$string 	.= '    			<div class="span12">';
		$string 	.= '     				 Coordinates: <div class="input text coordinatesElem" contentEditable="true">' . $this->coordinates . '</div>';
		$string 	.= '    			</div>';
		$string		.= '				<div style="clear:both"></div><hr>';
		$string 	.= '    			<div class="span12">';
		$string 	.= '     				 Excerpt: <div class="input text excerptElem" contentEditable="true">' . $this->excerpt . '</div>';
		$string 	.= '    			</div>';
		$string		.= '				<div style="clear:both"></div><hr>';
		$string 	.= '    			<div class="span12">';
		$string 	.= '     				 Images: 
											<div class="input text innerImages">';
											foreach($photos as $photo) {
												$string		.= '<img src="'.$photo.'">';
											}
		$string		.= '					</div>';
		$string 	.= '    			</div>';
		$string		.= '				<div style="clear:both"></div><hr>';
		$string 	.= '    			 <div class="span12">';
		$string 	.= '     				 Description: <div class="input text descriptionElem" contentEditable="true">' . $this->description . '</div>';
		$string 	.= '    			</div>';
		$string		.= '				<div style="clear:both"></div><hr>';
		$string		.= '				<input id="mybutt" class="saveBut" type="button" value="Save">';	
		$string 	.= '   			</div>';
		$string 	.= ' 	</div>';	
		$string		.= '</div>';
		echo $string;
	}
	
	function printShowAllLocationsByTourId() {
		$curr 		 = $_SERVER['REQUEST_URI'];
		$title 		= $this->title;
		
		if(stristr($title, '[en:]') === FALSE) {
			$title_rus	= $title;
			$title_eng	= $title;			
		} else {		
			$titles 	= preg_split("/([\\[]{1})\\w+([:]])/", $title);
			$title_rus	= $titles[1];
			$title_eng	= $titles[2];
		}		
        $string 	.= '<div class="single_location">'. $title_eng . '<a class="delete-link" href="/admin/includes/delete.location.php?id='.$this->id.'&curr='.$curr.'">remove</a><a class="delete-link" href="/admin/content/editLocation.php?id='.$this->id.'">edit</a></div>';
		echo $string;
	}
	
	function printShowSaveFormLocation() {
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
		
		//excerpt
		$excerpt 	 = $this->excerpt;
		if(stristr($excerpt, '[en:]') === FALSE) {
			$excerpt_rus = $excerpt;
			$excerpt_eng = $excerpt;			
		} else {
			$excerpts 	 = preg_split("/([\\[]{1})\\w+([:]])/", $excerpt);
			$excerpt_rus = $excerpts[1];
			$excerpt_eng = $excerpts[2];
		}		
		
		//address
		$address 		= $this->address;
		
		if(stristr($address, '[en:]') === FALSE) {
			$address_rus	= $address;
			$address_eng	= $address;			
		} else {		
			$addresses 	= preg_split("/([\\[]{1})\\w+([:]])/", $address);
			$address_rus	= $addresses[1];
			$address_eng	= $addresses[2];
		}	
		
		//shortname
		$shortname 		= $this->shortname;
		
		if(stristr($shortname, '[en:]') === FALSE) {
			$address_rus	= $shortname;
			$address_eng	= $shortname;			
		} else {		
			$shortnames 	= preg_split("/([\\[]{1})\\w+([:]])/", $shortname);
			$shortname_rus	= $shortnames[1];
			$shortname_eng	= $shortnames[2];
		}
		
		//images
		$photos 	 = unserialize($this->image);  
		
		
		$string = '
			<form id="addLocationForm" class="addLocationForm addForm" action="/admin/includes/update.location.php" method="POST" enctype="multipart/form-data" >	
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
							<div class="subscribe"><span>Title</span></div>
							<input class="tourTitle inputLeft input inputTitle" type="text" name="locationTitleEng" autocomplate="off" value="' . $title_eng . '" required />
							<br />
							<div class="subscribe"><span>Short title</span></div><div class="subscribe"><span>Address</span></div>
							<input id="locationShortTitle" class="locationShortTitle inputRight input" type="text" name="locationShortTitle_Eng" autocomplate="off" value="' . $shortname_eng . '" required />
							<input id="locationAddress" class="locationAddress inputRight input" type="text" name="locationAddress_Eng" autocomplate="off" value="' . $address_eng . '" required />							
							<br />
							<div class="subscribe"><span>Description</span></div>
							<textarea class="tourDescription description inputLeft input textareaInput" type="text" name="locationDescription_Eng" autocomplate="off" required>' . $description_eng . '</textarea>
							<div class="subscribe"><span>Excerpt</span></div>
							<textarea class="locationExcerpt inputRight input textareaExcerpt" type="text" name="locationExcerpt_Eng" style="height:64px" autocomplate="off" required>' . $excerpt_eng . '</textarea>
						</div>
						<div>
							<!-- Ukrainian tab -->
							<div class="subscribe"><span>Title</span></div>
							<input class="tourTitle inputLeft input inputTitle" type="text" name="locationTitleRus" autocomplate="off" value="' . $title_rus . '" />
							<br />
							<div class="subscribe"><span>Short title</span></div><div class="subscribe"><span>Address</span></div>
							<input id="locationShortTitle" class="locationShortTitle inputRight input" type="text" name="locationShortTitle_Rus" autocomplate="off" value="' . $shortname_rus . '" />
							<input id="locationAddress" class="locationAddress inputRight input" type="text" name="locationAddress_Rus" autocomplate="off" value="' . $address_rus . '" />							
							<br />
							<div class="subscribe"><span>Description</span></div>
							<textarea class="tourDescription description inputLeft input textareaInput" type="text" name="locationDescription_Rus" autocomplate="off">' . $description_rus . '</textarea>
							<div class="subscribe"><span>Excerpt</span></div>
							<textarea class="locationExcerpt inputRight input textareaExcerpt" type="text" name="locationExcerpt_Rus" style="height:64px" autocomplate="off">' .$excerpt_rus. '</textarea>
						</div>
					</div>            
				</div>
				<div class="subscribe"><span>Coordinates (Example: 46.485072,30.743927 from Google)</span></div><div class="subscribe"><span>Rating (1-10)</span></div>
				<input id="locationCoordinates" class="locationCoordinates inputLeft input" type="text" name="locationCoordinates" autocomplate="off" value="' . $this->coordinates . '" required />
				<input id="locationRating" class="locationRating inputLeft input" type="text" name="locationRating" autocomplate="off" value="' . $this->rating . '" disabled />		
				<div class="subscribe"><span>Phone number</span></div><div class="subscribe"><span>Web site (link)</span></div>
				<input id="locationPhone" class="locationPhone inputLeft input" type="text" name="locationPhone" autocomplate="off" value="' . $this->phone . '" />
				<input id="locationWebsites" class="locationWebsites inputLeft input" type="text" name="locationWebsites" autocomplate="off" value="' . $this->websites . '" />
				<div class="subscribe"><span>Panorama (link)</span></div><div style="clear: both"></div>
				<input id="locationPanorama" class="locationPanorama inputLeft input" type="text" name="locationPanorama" autocomplate="off" value="' . $this->panorama .'" />
				<div style="clear: both"></div>';
				
				if($photos) {
					$i=0;
					foreach($photos as $photo) {
						$i++;
						$string .='
						<input type="hidden"  class="locationImageResult'.$i.'" name="locationImageResult[]" value="'.$photo.'">
						<div id="" style="height:150px; width:300px; margin-right:10px; float:left;">
							<img class="remove-img" onClick="deleteInner('.$i.')" src="http://gid.areyoualive.ru/admin/content/images/popup-close-button.png" style="float:right; vertical-align:top; height:18px; width:18px; z-index:9999;">
							<div style="height:150px; width:300px; border:1px solid #999; float:left; margin: 0 10px 0 0; box-shadow: 0 0 1px 1px #888888;">
								<img src="'.$photo.'" style="height:150px; width:300px; z-index:999;" id="">
							</div>
						</div>';
					}
				} else {
						$string .='		
						<input type="hidden" name="locationImageResult[]" value="'.$this->image.'">
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
				<input type="submit" class="submit_button" id="submit" value="Save" />
			</form>
		';

		echo $string;
	}
}

?>