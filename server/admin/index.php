<?php 
/*
 * index.php
 * created by Ian Zablovschii
 * Admin Panel
 * ________________________________________________________________
 * | CHANGE LOG                                                   |
 * |______________________________________________________________|
 * | Date       | By              | Reason                        |
 * |--------------------------------------------------------------|
 * | 23.11.2014 | Ian Zablovschii | First version                 |
 * |--------------------------------------------------------------|
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |                                                              |
 * |______________________________________________________________|
 */
	require "../defines.php";
	require "../classes.php";
	
	//Starts connection
	require "../database.php";
	require_once "header.php";
?>
    <div class="content">
        <div class="row">
          <div class="span3">
            <h1>GOMus</h1>
          </div>
        </div>

		<div class="row text-center">
			<div class="col-md-6 col-sm-6 wow zoomIn" data-wow-delay="0.2s">
				<div class="hotel_container">
					<img src="../desktop/team/l1.png"  alt="" style="max-width: 330px;">
					<div class="ribbon popular"></div>
					<div class="hotel_title">
						<h3><strong></strong></h3>
						<div class="rating"></div><!-- end rating -->
					</div>
				</div><!-- End box -->
			</div><!-- End col-md-4 -->
			<div class="col-md-6 col-sm-6 wow zoomIn" data-wow-delay="0.3s">
				<div class="hotel_container">
					<img src="../desktop/team/l4.jpg" style="max-height:175px;" alt="">
					<div class="ribbon popular"></div>
					<div class="hotel_title">
						<h3><strong></strong></h3>
						<div class="rating"></div><!-- end rating -->
					</div>
				</div><!-- End box -->
			</div><!-- End col-md-4 -->
		</div><!-- End row -->
		<div class="row text-center">
			<div class="col-md-12 col-sm-12 wow zoomIn" data-wow-delay="0.2s">
				<div class="hotel_container">
					<img src="../desktop/team/l3.jpg"  alt="">
					<div class="ribbon popular"></div>
					<div class="hotel_title">
						<h3><strong></strong></h3>
						<div class="rating"></div><!-- end rating -->
					</div>
				</div><!-- End box -->
			</div><!-- End col-md-4 -->
		</div><!-- End row -->
    </div>
  </body>
</html>