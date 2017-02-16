 <? require_once ('header.php'); ?>
 <div class="container margin_90" id="top-tours">
        
        <div class="main_title">
            <h2><?=$GlobalLocal['top-tours'][$qmcLang]?></h2>
            <p></p>
        </div>
        
        <div class="row">
			<?
				$topTours = printEntry(array('nFields'=>'id,name,photo','count'=>100,'tableName'=>'Tour'));
				$appearTime = 0;
				foreach($topTours as $topTour) {
				$appearTime +=1;
			?>
                     
            <div class="col-md-4 col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                    <div class="hotel_container">
                        <div class="img_container">
                            <a href="/desktop/tour.php?tourID=<?=$topTour['id'];?>">
                            <img src="<?=$topTour['photo']; ?>" class="img-responsive" alt="">
                            <div class="ribbon popular"></div>
                           
                            </a>
                        </div>
                        <div class="hotel_title">
                            <h3><strong><?=$topTour['name']; ?></strong></h3>
                            <div class="rating">
                               
                            </div><!-- end rating -->
                            
                        </div>
                    </div><!-- End box -->
            </div><!-- End col-md-4 -->
            <? } ?>
        </div><!-- End row -->
        
		
		
        
    </div><!-- End container -->
	
	<? require_once ('footer.php'); ?>