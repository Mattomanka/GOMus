<?php
/*
 * Database.class.php
 * created by Ian Zablovschii
 *
 * ________________________________________________________________
 * | CHANGE LOG                                                   |
 * |______________________________________________________________|
 * | Date       | By              | Reason                        |
 * |--------------------------------------------------------------|
 * | 25.10.2015 | Ian Zablovschii | First version.                |
 * |--------------------------------------------------------------|
 * | 10.11.2015 | Ian Zablovschii | added 
 * |--------------------------------------------------------------|
 * |______________________________________________________________|
 */
 
class Database {

	public $dbName;
	public $dbAddress;
	public $dbUsername;
	public $dbPassword;
	
	public $dbHandler;
	
	/*
	 * Database constructor sets properties and connects to database while creating a database handler
	 */
	function __construct($dbName, $dbAddress, $dbUsername, $dbPassword){
	
		$this->dbName 		= $dbName;
		$this->dbAddress 	= $dbAddress;
		$this->dbUsername 	= $dbUsername;
		$this->dbPassword 	= $dbPassword;
		
		$this->dbHandler	= $this->connect();
	}
	
	/*
	 * Database destructor makes sure date PDO dbHandler is set to null for garbage collection
	 */
	function __destruct(){
		$dbHandler = NULL;
	}
	
	/*
	 * Connects to Database using properties set in constructor and returns database handler.
	 * If an error occurs while connecting to database, the application dies.
	 */
	function connect() {
		$dsn = 'mysql:host=';

		$dsn .= $this->dbAddress . ';dbname=' . $this->dbName;
		$options = array(
			PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
		); 

		//Connect to database. die() on Error
		try {
			$dbh= new PDO($dsn, $this->dbUsername, $this->dbPassword, $options);
			$dbh->setAttribute(PDO::ATTR_CASE, PDO::CASE_UPPER);
			$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return $dbh;
		} catch (PDOException $e) {
			print "Error ! : " . $e->getMessage() . "<br/>";
			die();
		}
	}
	
	 /*
	 * Add Tour entry to database
	 */
	 function addTourEntry(TourEntry $entry) {
		
		$sql = "INSERT INTO Tour (name, photo, description)" .
				"VALUES (:title, :image, :description)";
		echo '<a href="/admin/" class="button">Home</a>';
		try{
			//Prepare statement		
			$sth = $this->dbHandler->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
			$sth->execute(array(
								':title'	 	=> $entry->title,
								':image'		=> $entry->image,
								':description'	=> $entry->description,
								));
								
		} catch(PDOException $e){
			print "Error ! : " . $e->getMessage() . "<br/>";
		}
		
	 }	
	 
	 /*
	 * Add Location entry to database
	 */
	 function addLocationEntry(LocationEntry $entry) {
		
		$sql = "INSERT INTO Location (name, address, coordinates, rating, description, photo, excerpt, shortname, phone, websites, panorama) " .
				"VALUES (:title, :address, :coordinates, :rating, :description, :image, :excerpt, :shortname, :phone, :websites, :panorama)";
				
		$relationSql = "INSERT INTO Location_Tour (tour_id, location_id) " .
					   "VALUES (:tourID, :lastInsertId)";
					   
		//echo '<a href="/admin/" class="button">Home</a>';
		header( 'Refresh: 0; http://gid.areyoualive.ru/admin/content/success.php' );
		
		try{
			//Prepare statement
			$sth = $this->dbHandler->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));

			$sth->execute(array(
								':title'	 		=> $entry->title,
								':address'	 		=> $entry->address,
								':coordinates'	 	=> $entry->coordinates,
								':rating'	 		=> $entry->rating,
								':description'	 	=> $entry->description,
								':image'			=> serialize($entry->image),
								':excerpt'	 		=> $entry->excerpt,
								':shortname'	 	=> $entry->shortname,
								':phone'	 		=> $entry->phone,
								':websites'	 		=> $entry->websites,
								':panorama'	 		=> $entry->panorama,
								));

			
			$lastInsertId = $this->dbHandler->lastInsertId('Location');
			
			foreach ($entry->tourID as $numberOfId => $idKey) {
				$relation = $this->dbHandler->prepare($relationSql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
				$relation->execute(array(
									':tourID'	 		=> $idKey,
									':lastInsertId'		=> $lastInsertId
									));
			}
								
		} catch(PDOException $e){
			print "Error ! : " . $e->getMessage() . "<br/>";
		}
		
	 }
	 
	 /*
	 * Add Location entry to database
	 */
	 function addInnerLocationEntry(InnerLocationEntry $entry) {
		
		$sql = "INSERT INTO InnerLocation (idLocation, name, description, photo, positionColor) " .
				"VALUES (:locationID, :title, :description, :image, :positionColor)";
		echo '<a href="/admin/" class="button">Home</a>';
		try{
			//Prepare statement		
			$sth = $this->dbHandler->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));

			$sth->execute(array(
								':locationID'	 	=> $entry->locationID,
								':title'	 		=> $entry->title,
								':image'	 		=> serialize($entry->image),
								':description'	 	=> $entry->description,
								':positionColor'	=> $entry->positionColor
								));
								
		} catch(PDOException $e){
			print "Error ! : " . $e->getMessage() . "<br/>";
		}
		
	 }
	 
	 /*
	 * Add Quest entry to database
	 */
	 function addQuestEntry(QuestEntry $entry) {
		
		$sql = "INSERT INTO Quest (question, idLocation, idTour)" .
				"VALUES (:question, :locationId, :tourID)";
		echo '<a href="/admin/" class="button">Home</a>';
		
		try{
			//Prepare statement		
			$sth = $this->dbHandler->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
			$sth->execute(array(
								':question'	 		=> $entry->question,
								':locationId'		=> $entry->locationId,
								':tourID'			=> $entry->tourID,
								));
								
		} catch(PDOException $e){
			print "Error ! : " . $e->getMessage() . "<br/>";
		}
		
	 }	
	 
	 /*
	 * Get all Tours
	 */
	 function getAllTours() {
		//SQL query
		$sql =  'SELECT * ' . 
				'FROM Tour';
		try{
			//Prepare statement		
			$sth = $this->dbHandler->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
			$sth->execute();
			
			$result = $sth->fetchAll();
			
			$entryArray = array();
			foreach($result as &$entry){
				$gbEntry = new TourEntry(		$entry['ID'],
												$entry['NAME'],
												$entry['PHOTO'],
												$entry['DESCRIPTION']);
												
				array_push($entryArray, $gbEntry);
			}
			unset($entry);
			
			$tours = new Tour($entryArray);
			return $tours;
			
		} catch(PDOException $e){
			print "Error ! : " . $e->getMessage() . "<br/>";
			return NULL;
		}
	 }
	 
	 /*
	 * Get all Locations
	 */
	 function getAllLocations() {
		//SQL query
		$sql =  'SELECT * ' . 
				'FROM Location';
		try{
			//Prepare statement		
			$sth = $this->dbHandler->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
			$sth->execute();
			
			$result = $sth->fetchAll();
			
			$entryArray = array();
			foreach($result as &$entry){
				$gbEntry = new LocationEntry(	$entry['ID'],
												$entry['IDTOUR'],
												$entry['NAME'],
												$entry['ADDRESS'],
												$entry['COORDINATES'],
												$entry['RATING'],
												$entry['DESCRIPTION'],
												$entry['EXCERPT'],
												$entry['PHOTO']);
												
				array_push($entryArray, $gbEntry);
			}
			unset($entry);
			
			$tours = new Location($entryArray);
			return $tours;
			
		} catch(PDOException $e){
			print "Error ! : " . $e->getMessage() . "<br/>";
			return NULL;
		}
	 }
	 
	 /*
	 * Get all Inner Locations
	 */
	 function getAllInnerLocations() {
		//SQL query
		$sql =  'SELECT * ' . 
				'FROM InnerLocation';
		try{
			//Prepare statement		
			$sth = $this->dbHandler->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
			$sth->execute();
			
			$result = $sth->fetchAll();
			
			$entryArray = array();
			foreach($result as &$entry){
				$gbEntry = new InnerLocationEntry(	$entry['ID'],
													$entry['IDLOCATION'],
													$entry['NAME'],
													$entry['DESCRIPTION'],
													$entry['PHOTO']);
												
				array_push($entryArray, $gbEntry);
			}
			unset($entry);
			
			$tours = new InnerLocation($entryArray);
			return $tours;
			
		} catch(PDOException $e){
			print "Error ! : " . $e->getMessage() . "<br/>";
			return NULL;
		}
	 }

	 /*
	 * Get all Questions
	 */
	 function getAllQuestions() {
		//SQL query
		$sql =  'SELECT * ' . 
				'FROM Quest';
		try{
			//Prepare statement		
			$sth = $this->dbHandler->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
			$sth->execute();
			
			$result = $sth->fetchAll();
			
			$entryArray = array();
			foreach($result as &$entry){
				$gbEntry = new QuestEntry(	$entry['ID'],
											$entry['IDTOUR'],
											$entry['QUESTION'],
											$entry['IDLOCATION']);
												
				array_push($entryArray, $gbEntry);
			}
			unset($entry);
			$quests = new Quest($entryArray);
			return $quests;
			
		} catch(PDOException $e){
			print "Error ! : " . $e->getMessage() . "<br/>";
			return NULL;
		}
	 }

	 /*
	  * Get tour by id
	 */	 
	function getTourById($id) {
		//SQL query
		$sql =  'SELECT * ' . 
				'FROM Tour WHERE id='.$id.'';

		try{
			//Prepare statement		
			$sth = $this->dbHandler->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
			$sth->execute();
			
			$result = $sth->fetchAll();
			
			$entryArray = [];
			$gbEntry = new TourEntry(		$result[0]['ID'],
											$result[0]['NAME'],
											$result[0]['PHOTO'],
											$result[0]['DESCRIPTION']
									);
			array_push($entryArray, $gbEntry);

			
			$tours = new Tour($entryArray);
			
			return $tours;
			
		} catch(PDOException $e){
			print "Error ! : " . $e->getMessage() . "<br/>";
			return NULL;
		}
	}

	 /*
	  * Get locations by tour id
	 */
	function getLocationsByTourId($id) {
		//SQL query
		$sql = 'SELECT DISTINCT a.* FROM   Location a INNER JOIN Location_Tour at ON at.location_id = a.id INNER JOIN Tour t ON t.id = at.tour_id WHERE t.id = '.$id.'';

		try{
			//Prepare statement		
			$sth = $this->dbHandler->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
			$sth->execute();
			
			$result = $sth->fetchAll();
			
			$entryArray = array();
			foreach($result as &$entry){
				$gbEntry = new LocationEntry(	$entry['ID'],
												$entry['NAME'],
												$entry['ADDRESS'],
												$entry['COORDINATES'],
												$entry['DESCRIPTION'],
												$entry['RATING'],
												$entry['TOURID'],
												$entry['IMAGES'],
												$entry['SHORTNAME'],
												$entry['EXCERPT'],
												$entry['PHONE'],
												$entry['WEBSITES'],
												$entry['PANORAMA']);
												
				array_push($entryArray, $gbEntry);
			}
			unset($entry);
			
			$locations = new Location($entryArray);
			return $locations;
			
		} catch(PDOException $e){
			print "Error ! : " . $e->getMessage() . "<br/>";
			return NULL;
		}
		
	}
	
	 /*
	  * Get location by id
	 */
	 function getLocationById($id) {
		//SQL query
		$sql =  'SELECT * ' . 
				'FROM Location WHERE id='.$id.'';
		try{
			//Prepare statement		
			$sth = $this->dbHandler->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
			$sth->execute();
			
			$result = $sth->fetchAll();
			
			$entryArray = array();
			foreach($result as &$entry){
				$gbEntry = new LocationEntry(	$entry['ID'],
												$entry['NAME'],
												$entry['ADDRESS'],
												$entry['COORDINATES'],
												$entry['DESCRIPTION'],
												$entry['RATING'],
												$entry['TOURID'],
												$entry['PHOTO'],
												$entry['SHORTNAME'],
												$entry['EXCERPT'],
												$entry['PHONE'],
												$entry['WEBSITES'],
												$entry['PANORAMA']);


												
				array_push($entryArray, $gbEntry);
			}
			unset($entry);
			
			$locations = new Location($entryArray);
			return $locations;
			
		} catch(PDOException $e){
			print "Error ! : " . $e->getMessage() . "<br/>";
			return NULL;
		}
	 }
	 
	 /*
	 * Get Inner Location by ID
	 */
	 function getInnerLocationById($id) {
		//SQL query
		$sql =  'SELECT * ' . 
				'FROM InnerLocation WHERE id='.$id.'';
		try{
			//Prepare statement		
			$sth = $this->dbHandler->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
			$sth->execute();
			
			$result = $sth->fetchAll();
			
			$entryArray = array();
			foreach($result as &$entry){
				$gbEntry = new InnerLocationEntry(	$entry['ID'],
													$entry['IDLOCATION'],
													$entry['NAME'],
													$entry['DESCRIPTION'],
													$entry['PHOTO']);
												
				array_push($entryArray, $gbEntry);
			}
			unset($entry);
			
			$innerLocation = new InnerLocation($entryArray);
			return $innerLocation;
			
		} catch(PDOException $e){
			print "Error ! : " . $e->getMessage() . "<br/>";
			return NULL;
		}
	 }
	 /*
	 * Get quest by id
	 */
	 function getQuestById($id) {
		//SQL query
		$sql =  'SELECT * ' . 
				'FROM Quest WHERE id='.$id.'';
		try{
			//Prepare statement		
			$sth = $this->dbHandler->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
			$sth->execute();
			
			$result = $sth->fetchAll();
			
			$entryArray = array();
			foreach($result as &$entry){
				$gbEntry = new QuestEntry(	$entry['ID'],
											$entry['IDTOUR'],
											$entry['QUESTION'],
											$entry['IDLOCATION']);
												
				array_push($entryArray, $gbEntry);
			}
			unset($entry);
			$quests = new Quest($entryArray);
			return $quests;
			
		} catch(PDOException $e){
			print "Error ! : " . $e->getMessage() . "<br/>";
			return NULL;
		}
	 }
}

?>