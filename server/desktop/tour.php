 <? require_once ('header.php'); ?>
 <div class="container margin_90 list_locations" id="top-tours">
        
        <div class="main_title">
            <h2><? $varTemp = printEntry(array('sField'=>'id','sFieldValue'=>$_GET['tourID'],'nFields'=>'name','tableName'=>'Tour', 'count'=>1)); 
				$TourName = $varTemp[0]['name'];
				echo $TourName.' Tour' ;
			?></h2>
            <p></p>
        </div>
        
        <div class="row">
			
			<?
				$topLocations = printTourLocaction(array('tourID'=>$_GET['tourID']));
				$appearTime = 0;
				
				foreach($topLocations as $topLocation) {
				$appearTime +=1;
			?>
        
            <div class="col-md-4 col-sm-6 wow zoomIn" data-wow-delay="0.<?=$appearTime;?>s">
                <div class="tour_container">
                    <div class="img_container">
                        <a href="/desktop/location?id=<?=$topLocation['id'];?>">
                        <img src="<?=$topLocation['photo'][0]; ?>" class="img-responsive" alt="">
                        <div class="ribbon top_rated"></div>
                        <div class="short_info">
                            <i class="icon_set_1_icon-44"></i>Historic Buildings
                        </div>
                        </a>
                    </div>
                    <div class="tour_title">
                        <h3><strong><?  echo $topLocation['name']; ?></strong> </h3>
                        <div class="rating">
							<? for($i=1; $i<6; $i++){ 
								if($i<=$topLocation['rating']){
									$voitedClass= 'voted';
								} else {
									$voitedClass= '';
								}?>
								 <i class="icon-smile <?=$voitedClass; ?>"></i>
								
							<? }?>
                           <small></small>
                        </div><!-- end rating -->
                       
                    </div>
                </div><!-- End box tour -->
            </div><!-- End col-md-4 -->
            <? } ?>
        </div><!-- End row -->
    </div><!-- End container -->
	
	
	<? require_once ('footer.php'); ?>