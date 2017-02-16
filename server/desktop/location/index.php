<? require_once ('location_functions.php'); 

	$currentLocation = getLocation(array('sField'=>'id','sFieldValue'=>$_GET['id'],'nFields'=>'*','tableName'=>'Location'));
	$currentLocation = $currentLocation[0];
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title><?=$currentLocation['name']; ?></title>
	<!-- Latest compiled and minified CSS -->
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700,900,300' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/main.css">
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=true"></script>
	<!-- Latest compiled JavaScript -->
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="js/jquery.bxslider.min.js"></script>
	<!--[if lt IE 9]>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	
	<script src="js/plugins.js"></script>
	<script src="js/common.js"></script>
		<script src="js/gmaps.js"></script>
</head>
<body>
	<div id="header" class="header">
							
		<a class="logo text_logo" href="/ru">GOMus</a>
					<a class="btn btn_white language_switch" href="#"><? if(getCurrentLang()=='ru'){
					echo "UA" ;
					}else { echo  getCurrentLang(); }?></a>
				
		<a id="search_switch" class="btn btn_white search_switch" href="#"><i class="icon icon_search"></i></a>
		<div class="form search_form">
			<form id="search_form" action="/ru/search">
				<div class="row field_search_query">
					<input name="search_query" type="text" id="search_query" placeholder="Search on site.." autocomplete="off">
					<a class="submit btn btn_white" href="#"><i class="icon icon_search"></i></a>
					<a class="close btn btn_white" href="#"><i class="icon icon_close"></i></a>
				</div>
			<div class="autocomplete-suggestions" style="position: absolute; display: none; max-height: 300px; z-index: 9999;"></div></form>
		</div>
	</div>
	<div class="mainWrapper">
			
		
			<div id="cover" class="cover blue_cover">			
		<div class="cover_content" style="margin-top: -170px;">
			<ul class="breadcrumbs">
				<li><a href="/desktop">Home</a></li>
				<li><a href="#">Tour</a></li>
				<li><a href="#">Location</a></li>
			</ul>
			<h1><? if(!empty($currentLocation['shortname'])){ echo $currentLocation['shortname']; } else { echo $currentLocation['name']; } ?></h1>
			<div class="text">
				<p><?  if(!empty($currentLocation['shortname'])){ echo $currentLocation['name'];} ?></p>
			</div>
			
<div class="links cf">
	<span class="label">Share:</span>

	<a class="btn btn_white" href="#"><i class="icon icon_fb"></i></a>
	<a class="btn btn_white" href="#"><i class="icon icon_vk"></i></a>
	<a class="btn btn_white" href="#"><i class="icon icon_tw"></i></a>
	
</div>



		</div>
				<img class="image zoom" src="<?=$currentLocation['photo'][0]; ?>" alt="" style="transition: all 5s ease-in-out; margin-left: -8.5px; margin-top: -9.5px;">
			</div>
	
	<div class="plan">
	<? if ($_GET['id']==15){ ?>
		<div class="container planKir">
			
 			<a class="panorama-btn" href="http://gid.areyoualive.ru/desktop/panorama.php">Panorama of Kirch</a>
		
			<div class="title cf">
				<h2>Main plan</h2>
				<h3 class="floor-text">1 floor</h3>
			</div>
			<div class="canvas text-center">
				<span class="entrance_text"></span>
				<img src="images/1_floor_plan.jpg" alt="" class="location_sheme">
					<div class="go_top left_side">
						<a class="icon icon_qleft"></a>
					</div>
					<div class="go_top right_side">
						<a class="icon icon_qright"></a>
					</div>
				<div class="sheme-qmax-popup">
					
					<?
				$Innerlocations = getInnerLocation(array('sFieldValue'=>$_GET['id']));
				print_r($location);
		$qcount = 0;
		foreach( $Innerlocations as $number =>$valObj) { ?>
				
				<? 
				$qcount ++;
				if($qcount>13) {$class="second_floor";} else { $class="first_floor"; }?>
				<div class="item item_<?=$number+1; echo " ".$class;?> ">
						<a class="text_popup fancybox.ajax" href="/api/get_single_loc_info.php?id=15&number=<?=$number+1; ?>&innerID=<?=$valObj['id'];?>"></a>
						<div class="hint cf">
						<div class="image">
							<a class="text_popup fancybox.ajax" href="/api/get_single_loc_info.php?id=15&number=<?=$number+1; ?>&innerID=<?=$valObj['id'];?>">
								<? foreach ($valObj['photo'] as $i =>$val) { ?>	
									<img src="<?=$val;?>" alt="" class="zoom_max" data-zoom-image="<?=$val;?>">
									<? break; ?>
								<? } ?>
							</a>
						</div>
						<div class="text">
							<h3><a class="popup fancybox.ajax" href="/api/get_single_loc_info.php?id=15&number=<?=$number+1; ?>&innerID=<?=$valObj['id'];?>"><?= $valObj['name']; ?></a></h3>
							
						</div>
						</div>
				</div>
			<?  } ?>
			
				<div  class="item item_music second_floor">
					<audio m-src="audio/15.mp3" autoplay class="music_player"> 
				</div>	
				<div  class="item item_video second_floor">
				<iframe width="640" height="360" src="https://www.youtube.com/embed/4EfB1hQPa64?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen style="display:none; margin-top: 2em;margin-left: -20em;"></iframe>
				</div>	
				<div  class="item item_info first_floor">
					<a class="popup fancybox.ajax" href="/api/get_single_loc_info.php?id=15"></a>
				</div>		 			
			</div>
		</div>
		<div class="legend_wrapper">
			<ul class="legend cf">
				<li><div class="image"><img src="images/cloakroom.png"></div>Checkroom</li>
				<li><div class="image"><img src="images/shop.png"></div>Store</li>
				<li><div class="image"><img src="images/audioguide.png"></div>Audio Guide</li>
				<li><div class="image"><img src="images/wc_1.png"><img src="images/wc_2.png"></div>WC</li>				
				<li><div class="image"><img src="images/cash.png"></div>Cashbox</li>				
				<li><div class="image"><img src="images/info.png"></div>Information</li>
			</ul>
		</div>
	</div>
	<? }else { ?>
	<div class="full-description container">
	<?=$currentLocation['description'];?>
	</div>
	<? } ?>
	<div class="rooms_list">	
		
	<?
		
		foreach( $Innerlocations as $number =>$valObj) { ?>
				
				<div class="item item_<?=$number+1; ?>">
					<div class="container cf">
						<div class="col col_1">
							<div class="number"><?=$number+1; ?></div>
						</div>
						<div class="col col_7">
							<div class="text">
								<h3><a class="text_popup fancybox.ajax"  href="/api/get_single_loc_info.php?id=15&number=<?=$number+1; ?>&innerID=<?=$valObj['id'];?>"><?= $valObj['name']; ?></a></h3>
								<p><?= $valObj['description']; ?></p>
							</div>
						</div>
						<div class="col col_3 offset_1">
							<div class="image"><a  href="/api/get_single_loc_info.php?id=15&number=<?=$number+1; ?>&innerID=<?=$valObj['id'];?>" class="text_popup fancybox.ajax"><img src="<?= $valObj['photo'][0]; ?>" alt="" class="zoom zoom_fast"></a></div>
						</div>
					</div>
				</div>	
			<?  } ?>
 	</div>

	<div class="footer exhibition_footer" style="position: absolute; top: 3939px;">
		
			<div class="container">
				<div class="col col_6 offset_1">
					<div class="block_adress border">
						<h3><i class="icon icon_adress_title"></i>Address</h3>
						<div class="adress">
							<i class="icon icon_adress"></i>
							<p><?=$currentLocation['address'];?></p>
						</div>
						<? if(!empty($currentLocation['phone'])) { ?>
						<div class="phone">
							<i class="icon icon_phone"></i>
							<p><?=$currentLocation['phone'];?></p>
						</div>
						<? } ?>
					</div>
				</div>
				<div class="col col_4 offset_1">
					<div class="block_adress border">
						<div class="time">
									<i class="icon icon_time"></i>
									<a href="#">Schedule</a>						</div>
						</div>
					</div>
			</div>	
			
		
	</div>	
	<div id="map_wrapper" class="map_wrapper" >
				
	
	</div>	
	</div>
	<script src="js/main.js"></script>
	<script>
		$(document).ready(function(){
		var temp = '<?=$currentLocation['coordinates'];?>';
		coordArray = temp.split(',');
		console.log(coordArray);
	map = new GMaps({
        div: '#map_wrapper',
		zoom: 18,
        lat: coordArray[0],
        lng: coordArray[1]
      });
	  
		  map.addMarker({
	  lat: coordArray[0],
	  lng: coordArray[1],
	  title: "<?=$currentLocation['name'];?>"
	});
	
});
	</script>
	</body>
</html>