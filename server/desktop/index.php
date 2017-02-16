<? require_once ('header.php'); ?>
	
    <!-- Slider -->
    <div class="tp-banner-container">
        <div class="tp-banner">
            <ul>
				
			<?
				$sliderLocations = printEntry(array('nFields'=>'id,name,photo,shortname','count'=>3,'orderBy'=>'DESC','tableName'=>'Location'));
				foreach($sliderLocations as $sliderLocation) {
			?>				
                <!-- SLIDE  -->
                <li data-transition="fade" data-slotamount="7" data-masterspeed="500" data-saveperformance="on" data-title="Intro Slide">
                    <!-- MAIN IMAGE -->
                    <img src="<?=$sliderLocation['photo'][0]; ?>" alt="slidebg1" data-lazyload="<?=$sliderLocation['photo'][0]; ?>" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat">
                    <!-- LAYER NR. 1 -->
                    <div class="tp-caption white_heavy_40 customin customout text-center text-uppercase" data-x="center" data-y="center" data-hoffset="0" data-voffset="-20" data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;" data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="1000" data-start="1700" data-easing="Back.easeInOut" data-endspeed="300" style="z-index: 5; max-width: auto; max-height: auto; white-space: nowrap;"><? if(strlen($sliderLocation['name'])>60){ echo $sliderLocation['shortname']; } else { echo $sliderLocation['name']; }?>
                    </div>
                    <!-- LAYER NR. 2 -->
                    <div class="tp-caption customin tp-resizeme rs-parallaxlevel-0 text-center" data-x="center" data-y="center" data-hoffset="0" data-voffset="15" data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="500" data-start="2600" data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.05" data-endelementdelay="0.1" style="z-index: 9; max-width: auto; max-height: auto; white-space: nowrap;">
                        <div style="color:#ffffff; font-size:16px; text-transform:uppercase">
                            <? if(strlen($sliderLocation['name'])>60){ echo $sliderLocation['name'];} else { echo $sliderLocation['shortname']; }?></div>
                    </div>
                    <!-- LAYER NR. 3 -->
                    <div class="tp-caption customin tp-resizeme rs-parallaxlevel-0" data-x="center" data-y="center" data-hoffset="0" data-voffset="70" data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed="500" data-start="2900" data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-linktoslide="next" style="z-index: 12;"><a  href='/desktop/location?id=<?=$sliderLocation['id'];?>' class="button_intro"><?=$GlobalLocal['read-more'][$qmcLang]?></a>
                    </div>
                </li>
			<? } ?>
               
            </ul>
            <div class="tp-bannertimer tp-bottom"></div>
        </div>
    </div>
    <!-- End Slider -->

    <div class="container margin_60" id="top-tours">
        
        <div class="main_title">
            <h2><?=$GlobalLocal['top-tours'][$qmcLang]?></h2>
            <p></p>
        </div>
        
        <div class="row">
			<?
				$topTours = printEntry(array('nFields'=>'id,name,photo','count'=>6,'tableName'=>'Tour'));
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
        <p class="text-center nopadding">
            <a href="tours.php" class="btn_1 medium"><i class="icon-eye-7"></i><?=$GlobalLocal['all-tours'][$qmcLang]?>(<?=countBdRows('Tour');?>) </a>
        </p>
		
		<hr>
		
        <div class="main_title">
            <h2><?=$GlobalLocal['top-locations'][$qmcLang]?></h2>
            <p></p>
        </div>
        
        <div class="row">
			
			<?
				$topLocations = printEntry(array('nFields'=>'id,name,photo,shortname,rating','count'=>6,'orderBy'=>'DESC','tableName'=>'Location'));
				$appearTime = 0;
				foreach($topLocations as $topLocation) {
				$appearTime +=1;
			?>
        
            <div class="col-md-4 col-sm-6 wow zoomIn" data-wow-delay="0.<?=$appearTime%10;?>s">
                <div class="tour_container">
                    <div class="img_container">
                        <a href="/desktop/location?id=<?=$topLocation['id'];?>">
                        <img src="<?=$topLocation['photo'][0]; ?>" class="img-responsive" alt="">
                        <div class="ribbon top_rated"></div>
                        <div class="short_info">
                            <i class="icon_set_1_icon-44"></i><?=$GlobalLocal['icon-tag'][$qmcLang]?>
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
        <p class="text-center add_bottom_30">
            <a href="locations.php" class="btn_1 medium"><i class="icon-eye-7"></i><?=$GlobalLocal['all-locations'][$qmcLang]?> (<?=countBdRows('Location');?>) </a>
        </p>
        
         <hr>
    </div><!-- End container -->
    
   
  
	<!--
    <div class="container ">
    
        <div class="main_title">
            <h2>Some <span>good</span> reasons</h2>
            <p>
                Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.
            </p>
        </div>
        
        <div class="row">
        
            <div class="col-md-4 wow zoomIn" data-wow-delay="0.2s">
                <div class="feature_home">
                    <i class="icon_set_1_icon-41"></i>
                    <h3><span>+120</span> Premium tours</h3>
                    <p>
                         Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
                    </p>
                    <a href="about.html" class="btn_1 outline">Read more</a>
                </div>
            </div>
            
            <div class="col-md-4 wow zoomIn" data-wow-delay="0.4s">
                <div class="feature_home">
                    <i class="icon_set_1_icon-30"></i>
                    <h3><span>+1000</span> Customers</h3>
                    <p>
                         Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
                    </p>
                    <a href="about.html" class="btn_1 outline">Read more</a>
                </div>
            </div>
            
            <div class="col-md-4 wow zoomIn" data-wow-delay="0.6s">
                <div class="feature_home">
                    <i class="icon_set_1_icon-57"></i>
                    <h3><span>H24 </span> Support</h3>
                    <p>
                         Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset.
                    </p>
                    <a href="about.html" class="btn_1 outline">Read more</a>
                </div>
            </div>
            
        </div><!--End row -->
        
        
       
    <!--  
    </div><!-- End container -->
    
<? require_once ('footer.php'); ?>