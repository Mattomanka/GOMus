$(document).ready(function(){
	var counter = 0;
	$('.go_top  .icon_qleft').click(function(){
	  counter++;
	  floorChecker(counter);
	});
	
	$('.go_top  .icon_qright').click(function(){
	  counter--;
	  if(counter<0) counter = 99;
	 
	  floorChecker(counter);
	});
	
	var musicChecher = 0;
	$('.item_music').click(function(){
		if(musicChecher%2){
			//$(this).children('audio').attr('src','');
			//$(this).children('audio').hide();
		}else {
			$(this).children('audio').attr('src',$(this).children('audio').attr('m-src'));
			$(this).children('audio').attr('controls','controls');
			$(this).children('audio').show();
		}
		musicChecher++;
		console.log(musicChecher);
	});
	var videoChecher = 0;
	$('.item_video').click(function(){
		if(videoChecher%2){
			//$(this).children('audio').attr('src','');
			$(this).children('iframe').hide();
		}else {
			if(videoChecher==0) { 
				$(this).children('iframe').attr('src',$(this).children('iframe').attr('src')+'&autoplay=true');
			}
			$(this).children('iframe').show();
		}
		videoChecher++;
	});
	
	map = new GMaps({
        div: '#map_wrapper',
        lat: -12.043333,
        lng: -77.028333
      });
	
});

	function floorChecker(counter){
	  var current_numb = counter%2+1;
	  $('.location_sheme').attr('src','images/'+current_numb+'_floor_plan.jpg');
	  $('.floor-text').text(current_numb+" floor");
		if(current_numb==1){
			$('.first_floor').show();
			$('.second_floor').hide();
		}else {
			$('.first_floor').hide();
			$('.second_floor').show();
		}
	}