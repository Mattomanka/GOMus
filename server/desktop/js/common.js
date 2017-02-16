$(function(){
	$(window).scrollTop(0);
	$('div.egg_icon').insertBefore($('#header'));

	init();
	loader();
	loadShoppingCart();
	if($('#date').length){
		showOrder();
	}

	$('.load_link a, .nav a').loadItems();

	$('a.sort_link').on('click', function(e){
		e.preventDefault();
		$('a.sort_link').removeClass('active');
		$(this).addClass('active');
		$('.list .item_wrapper').remove();
		$('.load_link a').trigger('click');
	});

	$('.block_schedule .btn').on('click', function(e){
		e.preventDefault();
	})

	$('.exchange_pictures img').each(function(){
		$(this).addClass('zoom zoom_fast');

		if($(this).attr('alt') != ''){
			$(this).wrap('<span class="image_box"><span class="mosaic cf mosaic_1"><a></a><span class="photo_label">'+$(this).attr('alt')+'</span></span></span>');
		} else {
			$(this).wrap('<span class="image_box"><span class="mosaic cf mosaic_1"><a></a></span></span>');
		}

		if($(this).closest('.image_box').prev('.image_box').length){
			$(this).closest('.image_box').addClass('pair');
			$(this).closest('.image_box').prev('.image_box').addClass('pair');
		}
	});

	$('.exchange_pictures img[style*="float:left"]').closest('.image_box').addClass('left');
	$('.exchange_pictures img[style*="float:right"]').closest('.image_box').addClass('right');

	$('input[type="checkbox"]').customCheckbox();
	

	if($('#map').length){
		google.maps.event.addDomListener(window, 'load', initMap);
		
	}


	$('#show_map').on('click', function(e){
		e.preventDefault();
		$(this).hide();
	});

	$('input, select, textarea').on('focus', function(){
		$(this).parent('div.wrapper').addClass('active');
	}).on('blur', function(){
		$(this).parent('div.wrapper').removeClass('active');
	});

	$('form').on('click', 'a.submit', function(e){
		e.preventDefault()
		$(this).closest('form').submit();
	});

	$('#slider .slide_title').on('click', function(e){
		e.preventDefault();
		if(!$('#slider').hasClass('active')){           
			$('#slider .slide_text').stop().animate({
				left:0
			},300, function(){
				$('#slider').addClass('active');
			});
			$(this).stop().animate({
				left:'-100%'
			}, 300);
		}
		$(document).click(function(event) {
			if ($(event.target).closest(".slide_text, .slide_title").length) return;            
			$('div.slide_text').stop().animate({
				left:'-285px'
			},300, function(){              
				$('#slider').removeClass('active');
			});
			$('#slider .slide_title').stop().animate({
				left:'0'
			},300);
			event.stopPropagation();
		});
	});

	$('#slider a.close').on('click', function(e){
		e.preventDefault();
			
		$('div.slide_text').stop().animate({
			left:'-285px'
		},300, function(){              
			$('#slider').removeClass('active');
		});
		$('#slider .slide_title').stop().animate({
			left:'0'
		},300);
	});

	$("#slider .royalSlider").royalSlider({
		keyboardNavEnabled:true,
		sliderDrag:false,
		autoScaleSlider: false,
		imageScaleMode:'fill',
		imageScalePadding:0,
		slidesSpacing:0,
		loop:true,
		arrowsNavAutoHide:false,
		controlsInside:false,
		transitionType:'fade',
		controlNavigation:'thumbnails',
		arrowsNav:false,
		navigateByClick:false,
		autoPlay: {
			// autoplay options go gere
			enabled: true,
			pauseOnHover: true,
			delay:5000
		},
		thumbs: {
			fitInViewport:false,
			orientation:'vertical',
			spacing: 38,
			arrows:false,
			firstMargin:false
		}
	});

	var royalSlider_1 = $("#slider .royalSlider").data('royalSlider');
	if(window.royalSlider_1){
		royalSlider_1.ev.on('rsAfterSlideChange', function(event) {
			$('#slider .rsSlide').eq(royalSlider_1.currSlideId).find('.slide_title').click();
			
			setTimeout(function(){
				if(!document.querySelectorAll('#slider .slide_text:hover').length){
					$('#slider a.close').click();           
					royalSlider_1.startAutoPlay();
				}
			},4000)
			
		});
	}

	if($(".content_image_slider .rsImg").length > 1){
		$(".content_image_slider .royalSlider").royalSlider({
			controlNavigation: 'thumbnails',
			autoScaleSlider: false,
			imageAlignCenter:false,
			loop: true,
			imageScaleMode: 'none',
			navigateByClick: true,
			numImagesToPreload:2,
			arrowsNav:true,
			arrowsNavHideOnTouch: true,
			keyboardNavEnabled: true,
			transitionType:'fade',
			fadeinLoadedSlide:false,
			thumbs: {
			  fitInViewport:false,  
			  spacing: 6,
			  firstMargin: true,
			  arrows:false,
			  firstMargin:false,
			  autoCenter:false
			}
		});
		if($(".content_image_slider .rsTmb").length > 1){
			$('.block_autor_wrapper').addClass('thumbs_active');
		}
	}

	$("#history_slider .royalSlider").royalSlider({
		autoScaleSlider:false,
		autoScaleSliderWidth:1170,
		autoScaleSliderHeight:400,
		imageScaleMode:'none',
		imageAlignCenter:false,
		imageScalePadding:0,
		controlNavigation:'thumbnails',
		arrowsNav:false,
		slidesSpacing:0,
		numImagesToPreload:100,
		usePreloader:false,
		slidesOrientation:'vertical',
		transitionType:'move',
		sliderDrag:false,
		autoHeight:true,
		fadeinLoadedSlide:false,
		thumbs: {
			fitInViewport:false,
			orientation:'vertical',
			spacing: 10,
			arrows:false,
			firstMargin:false
		}
	});

	$('.menu_switcher').on('click', function(e){
		e.preventDefault();
		showMenu()      
	});

	$('.cart_switch').on('click', function(e){
		e.preventDefault();
		if(parseInt($(this).find('span').text()) != 0){
			showCart(); 
		}
	});

	/*if($('#quantity').val() > $('#quantity').attr('max')){
		$('#quantity').val($('#quantity').attr('max'));
	}

	$('#quantity').on('blur', function(){
		if($(this).val() > $(this).attr('max')){
			$(this).val($('#quantity').attr('max'));
		}
	});

	$('#quantity').on('focus', function(){
		if($(this).val() > $(this).attr('max')){
			$(this).val($('#quantity').attr('max'));
		}
	});

	$('#quantity').on('change', function(){
		if($(this).val() > $(this).attr('max')){
			$(this).val($('#quantity').attr('max'));
		}
	});*/
	$('#quantity').on('change', function(){
		var v = parseInt($(this).val()),
			m = parseInt($(this).attr('max'));
		if(v > m){
			$(this).val(m);
		}
	});

	/*var hideMenuTimeout = setTimeout(function(){
		hideMenu();
	},5000);*/
	//var hideMenuTimeout;

	$('#cart').inputmask('999',{ numericInput: true });

	$('#menu').on('mouseleave', function(){
		var hideMenuTimeout = setInterval(function(){
			if(!document.querySelectorAll('#menu:hover').length){
				hideMenu();
			}
		},5000);
		$(document).click(function(event) {
			if ($(event.target).closest("#menu, .menu_switcher, #slider .slide_text, #slider .slide_title").length) return;
			hideMenu();
			event.stopPropagation();
		});
	});

	$('#cart').on('mouseleave', function(){
		/*var hideCartimeout = setInterval(function(){
			if(!document.querySelectorAll('#cart:hover').length){
				hideCart();
			}
		},5000);*/
		$(document).click(function(event) {
			if ($(event.target).closest("#cart, .cart_switch, #slider .slide_text, #slider .slide_title").length) return;
			hideCart();
			event.stopPropagation();
		});
	});

	if($('#shop_marker').length){
		$('.cart_switch').show();
	}	

	$('#menu .menu_title').on('click', function(e){
		e.preventDefault();
		hideMenu();
	});

	$('#cart .cart_title').on('click', function(e){
		e.preventDefault();
		hideCart();
	});

	//$('#menu .active .icon_arrow').addClass('icon_arrow_active').removeClass('icon_arrow');

	$('#menu .scroll_container').mCustomScrollbar({
		theme:"dark",
		advanced:{
			updateOnContentResize: true
		}
	});

	$('#cart .scroll_container').mCustomScrollbar({
		theme:"dark",
		advanced:{
			updateOnContentResize: true
		}
	});

	$('.submenu_switcher').on('click', function(e){
		e.preventDefault();     
		if($(this).parent().hasClass('active')){
			$(this).removeClass('current')
			$(this).next('ul.submenu').slideUp(300);
			$('#menu .active').removeClass('active');
		} else {
			$('#menu .submenu_switcher').removeClass('current');
			$('#menu ul.submenu:visible').slideUp(300);
			$('#menu .active').removeClass('active');
			$(this).parent('li').addClass('active');
			$(this).addClass('current');                
			$(this).next('ul.submenu').slideDown(300);
		}       
	});

	

	$('a.popup').fancybox({
			padding:0,
			maxWidth    : 800,
			fitToView   : true,
			width       : 'auto',
			height      : 'auto',
			autoSize    : false,
			closeBtn:false,
			openEffect  : 'none',
			closeEffect : 'none',
			autoHeight:true,
			beforeShow:function(){
				imagesLoaded( '.fancybox-inner', function() {
					if($('.popup_slider img').length > 1){
						$('.popup_slider').bxSlider({
							pager:false,
							mode:'fade',
							speed:'800',
							adaptiveHeight:true
						}); 
						
					}
					if($('.bx-viewport').height()<$('.popup_slider_wrapper').height()) $('.popup_slider_wrapper').height($('.bx-viewport').height());
				});
			},
			afterShow:function(){
			},
			beforeLoad:function(){
				$('.header').css({
					'transition': 'none',
					'-webkit-transition': 'none',
					'-moz-transition': 'none',
					'-o-transition': 'none'
				})
			},
			afterClose:function(){
				setTimeout(function(){
					$('.header').css({
						'transition': 'all 0.2s ease-in-out',
						'-webkit-transition': 'all 0.2s ease-in-out',
						'-moz-transition': 'all 0.2s ease-in-out',
						'-o-transition': 'all 0.2s ease-in-out'
					})  
				},500);             
			}
	});

	$('a.text_popup').fancybox({
			padding:0,
			maxWidth    : 800,
			fitToView   : false,
			width       : 'auto',
			height      : 'auto',
			autoSize    : false,
			closeBtn:false,
			openEffect  : 'none',
			closeEffect : 'none',
			autoHeight:true,
			beforeShow:function(){
				imagesLoaded( '.fancybox-inner', function() {
					if($('.popup_slider img').length > 1){
						$('.popup_slider').bxSlider({
							pager:false,
							mode:'fade',
							speed:'800',
							adaptiveHeight:true
						}); 
					}
				});
			},
			afterShow:function(){
			},
			beforeLoad:function(){
				$('.header').css({
					'transition': 'none',
					'-webkit-transition': 'none',
					'-moz-transition': 'none',
					'-o-transition': 'none'
				})
			},
			afterClose:function(){
				setTimeout(function(){
					$('.header').css({
						'transition': 'all 0.2s ease-in-out',
						'-webkit-transition': 'all 0.2s ease-in-out',
						'-moz-transition': 'all 0.2s ease-in-out',
						'-o-transition': 'all 0.2s ease-in-out'
					})  
				},500); 
			}
	});

	$('#btn_checkout').fancybox({
			padding:0,
			maxWidth    : 800,
			fitToView   : false,
			width       : 'auto',
			height      : 'auto',
			autoSize    : false,
			closeBtn:false,
			openEffect  : 'none',
			closeEffect : 'none',
			modal:true,
			autoHeight:true,
			beforeShow:function(){
				
			},
			afterShow:function(){
				$('#checkout .selectArea').remove();
				$('#checkout select').removeClass('outtaHere').customSelect();
				$('.fancybox-overlay').on('scroll', function(){
					$('.options').hide();					
				});
				if($('#delivery').length){
					var price = parseInt($('#cart_amount').data('amount'));
					var deliveryPrice = parseInt($('#delivery').find('option[value="'+$('#delivery').val()+'"]').data('price'));
					var totalPrice = price+deliveryPrice;

					
					$('#checkout_amount').text(totalPrice);
					$('#checkout .row_price label').hide();
					$('#checkout .row_price').show();

					if(deliveryPrice == 0){
						$('#checkout .row_price label:first').show();
					} else {
						$('#checkout .row_price label:last').show();
					}

					$('#delivery').on('change', function(){
						deliveryPrice = parseInt($(this).find('option[value="'+$(this).val()+'"]').data('price'));
						totalPrice = price+deliveryPrice;						
						$('#checkout .row_price label').hide();
						if(deliveryPrice == 0){		
							$('#checkout .row_price label:first').show();
						} else {
							$('#checkout .row_price label:last').show();
						}
						$('#checkout_amount').text(totalPrice);
					})
					
				}

			},
			beforeLoad:function(){
				$('.header').css({
					'transition': 'none',
					'-webkit-transition': 'none',
					'-moz-transition': 'none',
					'-o-transition': 'none'
				});
			},
			afterClose:function(){
				setTimeout(function(){
					$('.header').css({
						'transition': 'all 0.2s ease-in-out',
						'-webkit-transition': 'all 0.2s ease-in-out',
						'-moz-transition': 'all 0.2s ease-in-out',
						'-o-transition': 'all 0.2s ease-in-out'
					})  
				},500); 
			}
	});

	if ($('#checkout_fail').length) {
		$.fancybox({
			padding:0,
			maxWidth    : 800,
			fitToView   : false,
			width       : 'auto',
			height      : 'auto',
			autoSize    : false,
			closeBtn:false,
			openEffect  : 'none',
			closeEffect : 'none',
			modal:true,
			autoHeight:true,
			href          : '#checkout_fail',
			type          : 'inline',
			beforeLoad:function(){
				$('.header').css({
					'transition': 'none',
					'-webkit-transition': 'none',
					'-moz-transition': 'none',
					'-o-transition': 'none'
				});
			},
			afterClose:function(){
				setTimeout(function(){
					$('.header').css({
						'transition': 'all 0.2s ease-in-out',
						'-webkit-transition': 'all 0.2s ease-in-out',
						'-moz-transition': 'all 0.2s ease-in-out',
						'-o-transition': 'all 0.2s ease-in-out'
					})  
				},500); 
			}
		});
	};

	if ($('#checkout_success').length) {
		$.fancybox({
			padding:0,
			maxWidth    : 800,
			fitToView   : false,
			width       : 'auto',
			height      : 'auto',
			autoSize    : false,
			closeBtn:false,
			openEffect  : 'none',
			closeEffect : 'none',
			modal:true,
			autoHeight:true,
			href          : '#checkout_success',
			type          : 'inline',
			beforeLoad:function(){
				$('.header').css({
					'transition': 'none',
					'-webkit-transition': 'none',
					'-moz-transition': 'none',
					'-o-transition': 'none'
				});
			},
			afterClose:function(){
				setTimeout(function(){
					$('.header').css({
						'transition': 'all 0.2s ease-in-out',
						'-webkit-transition': 'all 0.2s ease-in-out',
						'-moz-transition': 'all 0.2s ease-in-out',
						'-o-transition': 'all 0.2s ease-in-out'
					})  
				},500); 
			}
		});
	};

	$('#checkout .cancel').on('click', function(){
		$.fancybox.close()
	})

	$("a.link_video").click(function() {
		if($(this).attr('href') != '' && $(this).attr('href') != "#"){
			$.fancybox({
				'padding'       : 0,
				'autoResize'     : false,
				'transitionIn'  : 'none',
				'transitionOut' : 'none',
				'closeBtn'      : false,
				'title'         : this.title,
				'width'         : 640,
				'height'        : 480,
				'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
				'type'          : 'swf',
				'swf'           : {
					'wmode'        : 'opaque',
					'allowfullscreen'   : 'true'
				}
			});
		}
		return false;
	});

	if($('#exhibits').length){
		$('#exhibits').freetile();
	}

	if($('#photo_gallery').length){
		$('#photo_gallery').freetile({
			animate: true,
			elementDelay: 10
		});
	}   

	if($('#exhibitions').length){
		$('#exhibitions').freetile({
			animate: true,
			elementDelay: 10
		});
	}   

	if($('#events').length){
		$('#events').freetile();
	}   

	if($('#news').length){
		$('#news').freetile();
	}

	if($('#products').length){
		$('#products').freetile();
	}

	if($('#guests').length){
		$('#guests').freetile();
	}

	$('.tips').on('click', 'h3.title', function(e){
		e.preventDefault();
		if($(this).next('div.description').is(':visible')){
			$('.tips .active').removeClass('active');
			$('.tips .icon_u_arr').removeClass('icon_u_arr');
		} else {
			$('.tips .active').removeClass('active');
			$('.tips .icon_u_arr').removeClass('icon_u_arr');
			$(this).closest('.item').addClass('active');
			$(this).children('.icon').addClass('icon_u_arr');
		}       
	})

	$('#phone, #checkout_phone').phoneMask();

	$('select').each(function(){
		var optSelSize = $(this).find('option[selected="selected"]').size();
		if (optSelSize == 0 ){
			$(this).addClass('inactive');   
		}        
	});

	$('form').on('change','select', function(){
		$(this).removeClass('inactive');
		$(this).closest('.wrapper').removeClass('error');
	});

	$.validator.addMethod("selectRequired", function(value, element){
		if ($(element).hasClass('inactive')) {
				$(element).prev('.selectArea').addClass('error');
				return false 
			} else {
				return true
			}
	 }, "");

	$('#feedback_form').validate({
		rules:{
			"name":{required:true},
			"mail":{required:true, email:true},
			"phone":{required:true},
			"text":{required:true},
			"theme":{required:true, selectRequired:true}
		},
		errorPlacement: function(error, element) {
			$(element).parent().addClass('error')
			$('#feedback_form .error_message').show();
			$(element).on('blur', function(){
				if($(this).hasClass('valid')){
					$(this).parent().removeClass('error');
				}
			});
		},
		submitHandler: function(form){          
			$(form).ajaxSubmit({                     
				success: function(){ 
					$(form).find('input, textarea').val('')
					$(form).find('a.submit').hide();
					$(form).find('div.success_message').show();

					setTimeout(function(){
						$(form).find('a.submit').show();
						$(form).find('div.success_message').hide();
					},3000)
				}
			}); 
		}
	});

	$('#checkout_form').validate({		
		errorPlacement: function(error, element) {
			$(element).parent().addClass('error')
			$('#feedback_form .error_message').show();
			$(element).on('blur', function(){
				if($(this).hasClass('valid')){
					$(this).parent().removeClass('error');
				}
			});
		},
		submitHandler: function(form){ 
			//$(form).find('input, textarea').val('');
			//$(form).hide();
			//$('#checkout .checkout_message').show();      
			//$.fancybox.update();   
			$(form).ajaxSubmit({			
				success: function(data){ 
					//console.debug(data)
					//console.debug($(data).find('Order_IDP'))
					//console.debug(data.Subtotal_P)
					//console.debug(data.Signature)

					var dataText = JSON.parse(data)

					//console.debug(dataText.Order_IDP)
					//console.debug(dataText.Subtotal_P)
					//console.debug(dataText.Signature)
					
					$('#payment_form input[name="Order_IDP"]').val(dataText.Order_IDP);
					$('#payment_form input[name="Subtotal_P"]').val(dataText.Subtotal_P);
					$('#payment_form input[name="Signature"]').val(dataText.Signature);
					
					$('#payment_form').submit();

					/*
					$(form).find('a.submit').hide();
					$(form).find('div.success_message').show();

					setTimeout(function(){
						$(form).find('a.submit').show();
						$(form).find('div.success_message').hide();
					},3000)*/
				}
			}); 
		}
	});

	/*$('#cart_form').validate({
		rules:{},
		errorPlacement: function(error, element) {},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data){ 
					alert(data)
				}
			}); 
		}
	});	*/

	$('#btn_checkout').on('click', function(e){
		e.preventDefault();
	});

	$('#cart_form').on('click', '.remove', function(e){
		e.preventDefault();		
		updateShoppingCart($(this).closest('.product').children('input').val(), 0)
	});

	$('#cart_form').on('click', '.spinner_arrow', function(e){
		e.preventDefault();		
		updateShoppingCart($(this).closest('.product').children('input').val(), $(this).closest('.wrapper').find('input').val());
	});

	$('#cart_form').on('change', 'input[type="text"]', function(e){
		e.preventDefault();		
		updateShoppingCart($(this).closest('.product').children('input').val(), $(this).val());
	});

	$('#schedule_form').validate({
		rules:{
			"date":{required:true},
			"time":{required:true},
			"amount":{required:true}
		},
		errorPlacement: function(error, element) {
			$(element).parent().addClass('error')
			//$('#feedback_form .error_message').show();
			$(element).on('blur', function(){
				if($(this).hasClass('valid')){
					$(this).parent().removeClass('error');
				}
			});
		}/*,
		submitHandler: function(form){          
			$(form).ajaxSubmit({                     
				success: function(){ 
					$(form).find('input, textarea').val('')
					$(form).find('a.submit').hide();
					$(form).find('div.success_message').show();
					window.location.href=$(form).attr('action')
				}
			});
		}*/
	});

	$('#subscription_form').validate({
		rules:{
			"mail":{required:true, email:true}
		},
		errorPlacement: function(error, element) {
			$(element).parent().addClass('error')
			$(element).on('blur', function(){
				if($(this).hasClass('valid')){
					$(this).parent().removeClass('error');
				}
			});
		},
		submitHandler: function(form){          
			$(form).ajaxSubmit({                     
				success: function(){ 
					$(form).find('input').val('')
					$(form).find('a.submit').hide();
					$(form).find('div.success_message').show();
				}
			}); 
		}
	}); 

	$('#unsubscribe_form').validate({
		rules:{
			"mail":{required:true, email:true}
		},
		errorPlacement: function(error, element) {
			$(element).parent().addClass('error')
			$(element).on('blur', function(){
				if($(this).hasClass('valid')){
					$(this).parent().removeClass('error');
				}
			});
		},
		submitHandler: function(form){          
			$(form).ajaxSubmit({                     
				success: function(data){
					$(form).find('input').val('')
					$(form).find('a.submit').hide();
					$(form).find('div.success_message').text(data).show();
					setTimeout(function(){
						$(form).find('a.submit').show();
						$(form).find('div.success_message').hide();
					},2000)
					
				}
			}); 
		}
	});	

	$('#planning_form #confirmation_email, #planning_form #mail').on('keyup', function(){
		
		if(($('#mail').val() == $('#confirmation_email').val()) && !($('#mail').hasClass('error')) && $('#mail').val() != '' && $('#confirmation_email').val() != ''){
			$('.field_mail .msg').hide();
			$('.field_confirmation_email .msg').show();
		} else if(!$('#mail').hasClass('error') && $('#mail').val() != '' && $('#confirmation_email').val() != ''){
			$('.field_mail .msg').show();
			$('.field_confirmation_email .msg').hide();         
		} else {
			$('.field_mail .msg').hide();
			$('.field_confirmation_email .msg').hide();
		}
	});

	var minPrice = parseInt($('#price').text().replace(/\s+/g, ''));
	$('#planning_form, #group_planning_form').on('keyup', '#amount', function(){
		var priceDelta = parseInt($(this).val()),
			curentPrice = minPrice*priceDelta;

		if(curentPrice >= minPrice){            
			$('#price').text(curentPrice);
		} else {            
			$('#price').text(minPrice);
		}
	});

	$('#schedule_form').on('focus', '#amount', function(){
		var date = $('#unixtime').val().split('.');
		var time = $('#time').val().split(':');
		 
		var year    = date[0];
		var month   = date[1];
		var day     = date[2];
		 
		var hours   = time[0];
		var minutes = time[1];
		 
		var unixtime = new Date(year, month, day, hours, minutes).getTime() / 1000;
		//var unixtime = Date.UTC(year, month, day, hours, minutes, 00) / 1000;
		$('#unixtime').val(unixtime);

	});

	$('#btn_agree').on('click', function(e){
		e.preventDefault();
		$(this).children('.checkboxArea').addClass('checked');
		$('#agree').prop('checked', true).addClass('checked');
		$('#agree').prev('.checkboxArea').addClass('checked');
		$.fancybox.close();
	})  

	$('#planning_form').validate({
		rules:{
			"name":{required:true},
			"mail":{required:true, email:true},
			"confirmation_email":{required:true, email:true},           
			"phone":{required:true},
			"amount":{required:true},
			"date":{required:true},
			"time":{required:true},
			"agree":{required:true}
		},
		errorPlacement: function(error, element) {
			$(element).parent().addClass('error')
			//$('#feedback_form .error_message').show();
			$(element).on('blur', function(){
				if($(this).hasClass('valid')){
					$(this).parent().removeClass('error');
				}
			});
		},
		submitHandler: function(form){ 
			var date = $('#unixtime').val().split('.');
			var time = $('#time').val().split(':');
			 
			var year    = date[0];
			var month   = date[1];
			var day     = date[2];
			 
			var hours   = time[0];
			var minutes = time[1];
			 
			var unixtime = new Date(year, month, day, hours, minutes).getTime() / 1000;
			//var unixtime = Date.UTC(year, month, day, hours, minutes, 00) / 1000;
			$('#unixtime').val(unixtime); 

			$(form).ajaxSubmit({
				success: function(data){
					if(!$('#planning_form').closest('.group_planing').length){
						var dataText = JSON.parse(data);
						$('#payment_form input[name="Order_IDP"]').val(dataText.Order_IDP);
						$('#payment_form input[name="Subtotal_P"]').val(dataText.Subtotal_P);
						$('#payment_form input[name="Signature"]').val(dataText.Signature);
						$('#payment_form').submit();
					}					
				},
				error: function(message){
					$(form).find('div.error_message').text(message).show();
				}
			});

		}
	});

	$('#group_planning_form').validate({
		rules:{
			"name":{required:true},
			"mail":{required:true, email:true},
			"phone":{required:true},
			"amount":{required:true},
			"date":{required:true},
			"time":{required:true}
		},
		errorPlacement: function(error, element) {
			$(element).parent().addClass('error')
			//$('#feedback_form .error_message').show();
			$(element).on('blur', function(){
				if($(this).hasClass('valid')){
					$(this).parent().removeClass('error');
				}
			});
		},
		submitHandler: function(form){ 
			/*var date = $('#unixtime').val().split('.');
			var time = $('#time').val().split(':');
			 
			var year    = date[0];
			var month   = date[1];
			var day     = date[2];
			 
			var hours   = time[0];
			var minutes = time[1];
			 
			var unixtime = new Date(year, month, day, hours, minutes).getTime() / 1000;
			//var unixtime = Date.UTC(year, month, day, hours, minutes, 00) / 1000;
			$('#unixtime').val(unixtime); */

			$(form).ajaxSubmit({
				success: function(data){
					/*if(!$('#planning_form').closest('.group_planing').length){
						var dataText = JSON.parse(data);
						$('#payment_form input[name="Order_IDP"]').val(dataText.Order_IDP);
						$('#payment_form input[name="Subtotal_P"]').val(dataText.Subtotal_P);
						$('#payment_form input[name="Signature"]').val(dataText.Signature);
						$('#payment_form').submit();
					}*/	
					$('.success_message').show();
					$(form).find('.submit').hide();
					$(form).find('input').val('');
					setTimeout(function(){
						$('.success_message').hide();
						$(form).find('.submit').show();
					},5000)
					//$(form).find('a.submit').hide();			
				},
				error: function(message){
					$(form).find('div.error_message').text(message).show();
				}
			});

		}
	});

	$('#search_switch').on('click', function(e){
		e.preventDefault();
		$('#header').addClass('search_active');
		$('#search_query').focus();

		$(document).click(function(event) {
			if ($(event.target).closest("#search_switch, .search_form").length) return;
			$('#header').removeClass('search_active');
			event.stopPropagation();
		});
	}); 

	$('#search_form .close').on('click', function(e){
		e.preventDefault();
		$('#header').removeClass('search_active');
	});

	$('#search_form').on('click', '.autocomplete-suggestion[data-index="0"]', function(e){
		e.preventDefault();
		$('#search_query').val('')
	})

	$('#search_query').val('');
	var serviceUrl = $('#search_form').attr('action');
	$('#search_query').autocomplete({
		serviceUrl: serviceUrl,
		minChars: 2,
		deferRequestBy: 300,
		appendTo:'#search_form',
		params: {},
		onSelect: function(suggestion){
			if(suggestion.data != '' && suggestion.data != '#'){
				window.location.href=suggestion.data;
			}
		}
	});

	$('#search_form').on('submit', function(e){
		e.preventDefault();
	})

	$('#scroll_to_map').on('click', function(e){
		e.preventDefault();
		var mapOffset = $('#map').offset().top;
		$('html, body').animate({
			scrollTop:$('.mainWrapper').height()
		},700)
	});
	
	/*if($('.scrollItem').length){
		//$('body').css('overflow','hidden');
		$(document).scrollTop(0);
		$cur=$('.scrollItem:first');
		$(document).bind('mousewheel DOMMouseScroll', function(e) {
			//console.debug('scroll')
			if($('body:animated').length){
				e.preventDefault();
				return;
			}
			if(e.originalEvent.wheelDelta<0){
				if(!$cur.next().length) return;
				console.log('next');
				if($cur.hasClass('scrollItem')){
					e.preventDefault();
				}else{
					return;
				}
				$cur=$cur.next();
			}else{
				if(!$cur.prev().length) return;
				console.log('prev');
				if($cur.hasClass('scrollItem')){
					e.preventDefault();
				}else{

				}
				$cur=$cur.prev();
			}
			var next_pos=$cur.offset().top;
			$('html,body').animate({'scrollTop':next_pos},600,function(){
				if($cur.hasClass('scrollItem')){
					//$('body').css('overflow','hidden');
				}else{
					//$('body').css('overflow','auto');
				}
			});
		});
	}*/

	$('select').customSelect();

	if($('#eventsFilter').length){
		if(!$.cookie('eventsFilter')){
			var eventFilter = [];
			$('#eventsFilter .active').each(function(){
				eventFilter.push($(this).data('link'))
			});

			$.cookie('eventsFilter', eventFilter, { expires: 7 });
		} else {
			var eventFilterItems = $.cookie('eventsFilter').split(','),
				eventFilterItemsLength = eventFilterItems.length-1;
			
			for (i = 0; i <= eventFilterItems.length-1; i++) {
				//$('#eventsFilter a[data-link="'+eventFilterItems[i]+'"]').click();
				//$('#eventsFilter a[data-link="'+eventFilterItems[i]+'"]').addClass('active');
				if(i==eventFilterItems.length-1){
					$('#eventsFilter a[data-link="'+eventFilterItems[i]+'"]').click();
				} else {
					$('#eventsFilter a[data-group="'+$('#eventsFilter a[data-link="'+eventFilterItems[i]+'"]').attr('data-group')+'"]').removeClass('active');
					//console.debug($('#eventsFilter a[data-group="'+$('#eventsFilter a[data-link="'+eventFilterItems[i]+'"]').attr('data-group')+'"]'))
					if($('#eventsFilter a[data-link="'+eventFilterItems[i]+'"]').attr('id') == 'show_events'){
						$('.exhibitions .item_wrapper').remove();
						$('.exhibitions').hide();
						$('.events').show();
					}
					$('#eventsFilter a[data-link="'+eventFilterItems[i]+'"]').addClass('active');
				}
			};          
		}
	}

	if($('#exhibitsFilter').length){
		if(!$.cookie('exhibitsFilter')){
			var exhibitsFilter = [];
			$('#exhibitsFilter .active').each(function(){
				exhibitsFilter.push($(this).data('link'))
			});

			$.cookie('exhibitsFilter', exhibitsFilter, { expires: 7 });

			if($('a[data-parent].active').length){
				$('a[data-parent].active').each(function(){
					$('#'+$(this).data('parent')).text($(this).text());
				})
			}

		} else {
			var exhibitsFilterItems = $.cookie('exhibitsFilter').split(','),
				exhibitsFilterItemsLength = exhibitsFilterItems.length-1;
			
			for (i = 0; i <= exhibitsFilterItemsLength; i++) {
				var elem = $('#exhibitsFilter a[data-link="'+exhibitsFilterItems[i]+'"]');
				var activeElem = $('#exhibitsFilter a[data-group="'+elem.attr('data-group')+'"].active');

				if(activeElem.length){

					if(elem.attr('data-parent')){
						$('#'+elem.attr('data-parent')).text(activeElem.text()).addClass('active');
					}

				} else {
					if(i==exhibitsFilterItemsLength){
						$('#exhibitsFilter a[data-link="'+exhibitsFilterItems[i]+'"]').click();
					} else {
									
						$('#exhibitsFilter a[data-group="'+elem.attr('data-group')+'"]').removeClass('active');
						if(elem.attr('data-parent')){
							$('#'+elem.attr('data-parent')).text(elem.text()).addClass('active');
						}

						$('#exhibitsFilter a[data-link="'+exhibitsFilterItems[i]+'"]').addClass('active');

					}
				}
				
			};          
		}
	}

	if($('#shopFilter').length){
		if(!$.cookie('shopFilter')){
			var shopFilter = [];
			$('#shopFilter .active').each(function(){
				shopFilter.push($(this).data('link'))
			});

			$.cookie('shopFilter', shopFilter, { expires: 7 });
		} else {
			var shopFilterItems = $.cookie('shopFilter').split(','),
				shopFilterItemsLength = shopFilterItems.length-1;
			
			for (i = 0; i <= shopFilterItems.length-1; i++) {
				if(i==shopFilterItems.length-1){
					$('#shopFilter a[data-link="'+shopFilterItems[i]+'"]').click();
					$('.categories a[data-link="'+shopFilterItems[i]+'"]').addClass('active');
				} else {
					var elem = $('#shopFilter a[data-link="'+shopFilterItems[i]+'"]');
					$('#shopFilter a[data-group="'+elem.attr('data-group')+'"]').removeClass('active');
					//console.debug(elem.attr('data-parent'))
					if(elem.attr('data-parent')){
						$('#'+elem.attr('data-parent')).text(elem.text()).addClass('active');
					}

					$('#shopFilter a[data-link="'+shopFilterItems[i]+'"]').addClass('active');
					$('.categories a[data-link="'+shopFilterItems[i]+'"]').addClass('active');
				}
			};          
		}
	}

	$('.categories').on('click', 'a', function(e){
		e.preventDefault();
		$('.categories a').removeClass('active');
		$(this).addClass('active');
		$('#shopFilter a[data-link="'+$(this).data('link')+'"]').click();
		$('html, body').animate({
			scrollTop: $('.nav_container').offset().top
		}, 800)
	});

	var lnItemHeight = 0;
	$('.last_news .item').each(function(){
		lnItemHeight = $(this).height() > lnItemHeight?$(this).height():lnItemHeight;
	});

	$('.last_news .item').css('height', lnItemHeight);

	$(window).on('resize', function(){
		$('.last_news .item').each(function(){
			lnItemHeight = $(this).height() > lnItemHeight?$(this).height():lnItemHeight;
		});

		$('.last_news .item').css('height', lnItemHeight);
	})

	/*if(navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i)){
		$(window).bind('scroll', function () {
			var $nav = $("#header");
			var scrollTop = $(window).scrollTop();
			var offsetTop = $nav.offset().top;

			if (Math.abs(scrollTop - offsetTop) > 1) {
				$nav.css('position', 'absolute');
				setTimeout(function(){
					$nav.css('position', 'fixed');
				}, 10);
			}
		});
	}*/
	
});

var scrolloramaEgg=0,
	mosaic_2=0,
	scrolloramaFullWidth=0,
	scrolloramaSubstrate=0,
	scrolloramaImages_mosaik=0,
	scrolloramaContent_block=0,
	scrolloramaParalaxImage1=0,
	scrolloramaParalaxImage2=0,
	scrolloramaParalaxImage3=0,
	scrolloramaParalaxImage4=0,
	scrolloramaParalaxImage5=0,
	scrolloramaParalaxImage6=0,
	scrolloramaFooter=0,
	scrolloramaHistory=0,
	scrolloramaTour=0,
	scrolloramaSlider=0,
	scrolloramaBlue_slider=0,
	scrolloramaRooms_list_1=0,
	scrolloramaRooms_list_2=0,
	scrolloramaRooms_list_3=0,
	scrolloramaRooms_list_4=0,
	scrolloramaRooms_list_5=0,
	scrolloramaRooms_list_6=0,
	scrolloramaRooms_list_7=0,
	scrolloramaRooms_list_8=0,
	scrolloramaRooms_list_9=0,
	scrolloramaRooms_list_10=0,
	scrolloramaRooms_list_11=0,
	scrolloramaRooms_list_12=0,
	scrolloramaRooms_list_13=0,
	scrolloramaRooms_list_14=0;

function paralaxApply(){

	if(navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)){
		$('.egg_icon').css('position','absolute');
		$('.zoom').removeClass('zoom zoom_fast');
		$('#map').css('position','relative !important');
		$('body').addClass('mobileDevice');
		return;
	}
	
	if($('.scrollorama').length){
		scrolloramaEgg = $.scrollorama({blocks:'.scrollorama',enablePin:false});
		$('.egg_icon img').each(function(){
			scrolloramaEgg
				.animate($(this),{duration:200,delay:0, property:'top', end:12})
				.animate($(this),{duration:200,delay:0, property:'width', end:35})
				.animate($(this),{duration:200,delay:0, property:'margin-left', end:-18})
				.animate($(this),{duration:200,delay:0, property:'margin-top', end:0});
		});
	}

	scrolloramaFooter=$.scrollorama({blocks:'.footer'});
	$('.footer div.container').each(function() {
		scrolloramaFooter.animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	
	scrolloramaFullWidth=$.scrollorama({blocks:'.content_part .full_width',enablePin:false});
	$('.content_part .full_width img').each(function() {
		scrolloramaFullWidth.animate($(this),{duration:600,delay:-500, property:'top', start:70,end:-70});
	});

	scrolloramaSlider=$.scrollorama({blocks:'#slider',enablePin:false});
	$('#slider .royalSlider').each(function() {
		scrolloramaSlider.animate($(this),{duration:300,delay:-900, property:'opacity', start:0});
	});
	
	scrolloramaTour=$.scrollorama({blocks:'#tour',enablePin:false});
	$('#tour > div').each(function() {
		scrolloramaTour.animate($(this),{duration:300,delay:-700, property:'opacity', start:0});
	});

	scrolloramaHistory=$.scrollorama({blocks:'.history_block',enablePin:false});
	$('.history_block .container').each(function() {
		scrolloramaHistory.animate($(this),{duration:300,delay:-800, property:'opacity', start:0});
	});

	scrolloramaBlue_slider=$.scrollorama({blocks:'.blue_slider',enablePin:false});
	$('.blue_slider .container').each(function() {
		scrolloramaBlue_slider.animate($(this),{duration:300,delay:-800, property:'opacity', start:0});
	});



	scrolloramaImages_mosaik=$.scrollorama({blocks:'.images_mosaik',enablePin:false});
	$('.images_mosaik .image_1').each(function() {
		scrolloramaImages_mosaik
			.animate($(this),{duration:200,delay:-700, property:'opacity', start:0})
			.animate($(this),{duration:200,delay:-700, property:'left', start:-100});
	});
	$('.images_mosaik .image_2').each(function() {
		scrolloramaImages_mosaik
			.animate($(this),{duration:200,delay:-700, property:'opacity', start:0})
			.animate($(this),{duration:200,delay:-700, property:'left', start:100})
			.animate($(this),{duration:200,delay:-700, property:'top', start:-100});
	});
	$('.images_mosaik .image_3').each(function() {
		scrolloramaImages_mosaik
			.animate($(this),{duration:200,delay:-700, property:'opacity', start:0})
			.animate($(this),{duration:200,delay:-700, property:'left', start:100})
			.animate($(this),{duration:200,delay:-700, property:'top', start:100});
	});
	$('.images_mosaik .icon').each(function() {
		scrolloramaImages_mosaik.animate($(this),{duration:100,delay:-500, property:'opacity', start:0});
	});


	scrolloramaSubstrate=$.scrollorama({blocks:'.content .substrate',enablePin:false});
	$('.content .substrate .text').each(function() {
		scrolloramaSubstrate.animate($(this),{duration:200,delay:-600, property:'opacity', start:0}).animate($(this),{duration:200,delay:-600, property:'left', start:-300});
	});
	
	scrolloramaContent_block=$.scrollorama({blocks:'.content_block',enablePin:false});
	$('.content_block h2').each(function() {
		scrolloramaContent_block.animate($(this),{duration:200,delay:100, property:'opacity', start:0});
	});
	
	var endValue=-100;
	if($('div.container:first').width()<1000) endValue=-80;
		
	scrolloramaParalaxImage1=$.scrollorama({blocks:'.paralaxImage_1',enablePin:false});
	$('.paralaxImage_1 span').each(function() {
		scrolloramaParalaxImage1.animate($(this),{duration:600,delay:-500, property:'top', start:0, end:endValue});
	});
	scrolloramaParalaxImage2=$.scrollorama({blocks:'.paralaxImage_2',enablePin:false});
	$('.paralaxImage_2 span').each(function() {
		scrolloramaParalaxImage2.animate($(this),{duration:600,delay:-500, property:'top', start:0, end:endValue});
	});
	scrolloramaParalaxImage3=$.scrollorama({blocks:'.paralaxImage_3',enablePin:false});
	$('.paralaxImage_3 span').each(function() {
		scrolloramaParalaxImage3.animate($(this),{duration:600,delay:-500, property:'top', start:0, end:endValue});
	});
	scrolloramaParalaxImage4=$.scrollorama({blocks:'.paralaxImage_4',enablePin:false});
	$('.paralaxImage_4 span').each(function() {
		scrolloramaParalaxImage4.animate($(this),{duration:600,delay:-500, property:'top', start:0, end:endValue});
	});
	scrolloramaParalaxImage5=$.scrollorama({blocks:'.paralaxImage_5',enablePin:false});
	$('.paralaxImage_5 span').each(function() {
		scrolloramaParalaxImage5.animate($(this),{duration:600,delay:-500, property:'top', start:0, end:endValue});
	});
	scrolloramaParalaxImage6=$.scrollorama({blocks:'.paralaxImage_6',enablePin:false});
	$('.paralaxImage_6 span').each(function() {
		scrolloramaParalaxImage6.animate($(this),{duration:600,delay:-500, property:'top', start:0, end:endValue});
	});

	
	mosaic_2 = $.scrollorama({blocks:'.mosaic_2',enablePin:false});
	$('.mosaic_2 a.item_1').each(function() {
		mosaic_2.animate($(this),{duration:200,delay:-700, property:'left', start:-100}).animate($(this),{duration:200,delay:-700, property:'opacity', start:0});
	});
	$('.mosaic_2 a.item_2').each(function() {
		mosaic_2.animate($(this),{duration:200,delay:-700, property:'left', start:100}).animate($(this),{duration:200,delay:-700, property:'top', start:-100}).animate($(this),{duration:200,delay:-700, property:'opacity', start:0});
	});
	$('.mosaic_2 a.item_3').each(function() {
		mosaic_2
			.animate($(this),{duration:200,delay:-700, property:'left', start:100}).animate($(this),{duration:200,delay:-700, property:'top', start:100}).animate($(this),{duration:200,delay:-700, property:'opacity', start:0});
	});
	$('.mosaic_2 .icon_egg').each(function() {
		mosaic_2.animate($(this),{duration:200,delay:-500, property:'opacity', start:0});
	});

	scrolloramaRooms_list_1 = $.scrollorama({blocks:'.rooms_list .item_1',enablePin:false});
	$('.rooms_list .item_1 .col').each(function() {
		scrolloramaRooms_list_1.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	scrolloramaRooms_list_2 = $.scrollorama({blocks:'.rooms_list .item_2',enablePin:false});
	$('.rooms_list .item_2 .col').each(function() {
		scrolloramaRooms_list_2.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	scrolloramaRooms_list_3 = $.scrollorama({blocks:'.rooms_list .item_3',enablePin:false});
	$('.rooms_list .item_3 .col').each(function() {
		scrolloramaRooms_list_3.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	scrolloramaRooms_list_4 = $.scrollorama({blocks:'.rooms_list .item_4',enablePin:false});
	$('.rooms_list .item_4 .col').each(function() {
		scrolloramaRooms_list_4.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	scrolloramaRooms_list_5 = $.scrollorama({blocks:'.rooms_list .item_5',enablePin:false});
	$('.rooms_list .item_5 .col').each(function() {
		scrolloramaRooms_list_5.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	scrolloramaRooms_list_6 = $.scrollorama({blocks:'.rooms_list .item_6',enablePin:false});
	$('.rooms_list .item_6 .col').each(function() {
		scrolloramaRooms_list_6.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	scrolloramaRooms_list_7 = $.scrollorama({blocks:'.rooms_list .item_7',enablePin:false});
	$('.rooms_list .item_7 .col').each(function() {
		scrolloramaRooms_list_7.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	scrolloramaRooms_list_8 = $.scrollorama({blocks:'.rooms_list .item_8',enablePin:false});
	$('.rooms_list .item_8 .col').each(function() {
		scrolloramaRooms_list_8.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	scrolloramaRooms_list_9 = $.scrollorama({blocks:'.rooms_list .item_9',enablePin:false});
	$('.rooms_list .item_9 .col').each(function() {
		scrolloramaRooms_list_9.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	scrolloramaRooms_list_10 = $.scrollorama({blocks:'.rooms_list .item_10',enablePin:false});
	$('.rooms_list .item_10 .col').each(function() {
		scrolloramaRooms_list_3.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	scrolloramaRooms_list_11 = $.scrollorama({blocks:'.rooms_list .item_11',enablePin:false});
	$('.rooms_list .item_11 .col').each(function() {
		scrolloramaRooms_list_11.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	scrolloramaRooms_list_12 = $.scrollorama({blocks:'.rooms_list .item_12',enablePin:false});
	$('.rooms_list .item_12 .col').each(function() {
		scrolloramaRooms_list_12.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	if(scrolloramaRooms_list_13!=0) scrolloramaRooms_list_13.destroy();
	$('.rooms_list .item_13 .col').removeAttr('style');
	scrolloramaRooms_list_13 = $.scrollorama({blocks:'.rooms_list .item_13',enablePin:false});
	$('.rooms_list .item_13 .col').each(function() {
		scrolloramaRooms_list_13.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
	scrolloramaRooms_list_14 = $.scrollorama({blocks:'.rooms_list .item_14',enablePin:false});
	$('.rooms_list .item_14 .col').each(function() {
		scrolloramaRooms_list_14.animate($(this),{duration:200,delay:-800, property:'top', start:200}).animate($(this),{duration:200,delay:-800, property:'opacity', start:0});
	});
}

function paralaxDestroy(){
	if(scrolloramaEgg!=0){
		scrolloramaEgg.destroy();
		$('.egg_icon').css('position','absolute');
		$('.egg_icon img').removeAttr('style');
	}
	if(scrolloramaFooter!=0) scrolloramaFooter.destroy();
	if(scrolloramaFullWidth!=0) scrolloramaFullWidth.destroy();
	if(scrolloramaImages_mosaik!=0) scrolloramaImages_mosaik.destroy();
	if(scrolloramaBlue_slider!=0) scrolloramaBlue_slider.destroy();
	if(scrolloramaHistory!=0) scrolloramaHistory.destroy();
	if(scrolloramaTour!=0) scrolloramaTour.destroy();
	if(scrolloramaSlider!=0) scrolloramaSlider.destroy();
	if(scrolloramaSubstrate!=0) scrolloramaSubstrate.destroy();
	if(scrolloramaContent_block!=0) scrolloramaContent_block.destroy();
	if(scrolloramaParalaxImage1!=0) scrolloramaParalaxImage1.destroy();
	if(scrolloramaParalaxImage2!=0) scrolloramaParalaxImage2.destroy();
	if(scrolloramaParalaxImage3!=0) scrolloramaParalaxImage3.destroy();
	if(scrolloramaParalaxImage4!=0) scrolloramaParalaxImage4.destroy();
	if(scrolloramaParalaxImage5!=0) scrolloramaParalaxImage5.destroy();
	if(scrolloramaParalaxImage6!=0) scrolloramaParalaxImage6.destroy();
	if(mosaic_2!=0) mosaic_2.destroy();
	if(scrolloramaRooms_list_1!=0) scrolloramaRooms_list_1.destroy();
	if(scrolloramaRooms_list_2!=0) scrolloramaRooms_list_2.destroy();
	if(scrolloramaRooms_list_3!=0) scrolloramaRooms_list_3.destroy();
	if(scrolloramaRooms_list_4!=0) scrolloramaRooms_list_4.destroy();
	if(scrolloramaRooms_list_5!=0) scrolloramaRooms_list_5.destroy();
	if(scrolloramaRooms_list_6!=0) scrolloramaRooms_list_6.destroy();
	if(scrolloramaRooms_list_7!=0) scrolloramaRooms_list_7.destroy();
	if(scrolloramaRooms_list_8!=0) scrolloramaRooms_list_8.destroy();
	if(scrolloramaRooms_list_9!=0) scrolloramaRooms_list_9.destroy();
	if(scrolloramaRooms_list_10!=0) scrolloramaRooms_list_10.destroy();
	if(scrolloramaRooms_list_11!=0) scrolloramaRooms_list_11.destroy();
	if(scrolloramaRooms_list_12!=0) scrolloramaRooms_list_12.destroy();
	if(scrolloramaRooms_list_13!=0) scrolloramaRooms_list_13.destroy();
	if(scrolloramaRooms_list_14!=0) scrolloramaRooms_list_14.destroy();
	$('.footer div.container,.rooms_list .col,.mosaic a,.mosaic a.icon_egg,.paralaxImage_1 span,.paralaxImage_2 span,.paralaxImage_3 span,.paralaxImage_4 span,.paralaxImage_5 span,.paralaxImage_6 span,.content_block h2,.content_block .col,.content .substrate .text,#slider .royalSlider,#tour > div,.history_block .container,.blue_slider .container,.images_mosaik .image_1,.images_mosaik .image_2,.images_mosaik .image_3,.images_mosaik .icon,.content_part .full_width img').removeAttr('style');
}

$(window).resize(function(){
	init();
	paralaxDestroy();
	$('.selectArea').css('width','auto');
	$('.options').width($('.selectArea').width());
	$('#slider .zoom').removeClass('zoom');
	setTimeout(function(){
		$('#slider .rsImg').addClass('zoom');
	},100)
})

function init(){
	if($('#cover h1').text().length > 60){
		$('#cover h1').removeClass('small');
		$('#cover h1').addClass('extra_small');
	}

	wHeight = $(window).height(),
	coverOffset = $('#cover div.cover_content').height()/2,
	wOffset = 200;
	//console.debug(coverOffset)

	$('.window').height(wHeight)

	imagesLoaded( '#cover', function(){
		if($('.nav_container').length){
			navOffset = $('.nav_container').offset().top - 70;
		} else {
			navOffset = 0;
		}
		headerState(wOffset, navOffset);
		$(window).on('scroll', function(){
			headerState(wOffset, navOffset, wHeight);
		});
		$('#cover img.image').centeringPictures();

		if($('#product_main_description .col:last').height() > $('#product_main_description .col:first').height()){
			$('#product_main_description .block_table').height($('#product_main_description .col:last').height())
		}

	});

	$('#scroll_to_slider').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:wHeight
		})
	})
	
	var sT=$(window).scrollTop();
	if(sT==0) $('.egg_icon img').removeAttr('style');
	//$(window).scrollTop(sT+1);
	//$(window).scrollTop(sT);      

	if(wHeight > 400){
		coverOffset = $('#cover div.cover_content').height()/2;
		$('#cover div.cover_content').css('margin-top','-'+coverOffset+'px');
		$('#tour span.text').css('margin-top','-'+$('#tour span.text').height()/2+'px');
	}

	$('.section li:first').css('border-top-width', 0);
	$('.section li:last').css('border-bottom-width', 0);
	var sectionBorderWidth = (wHeight - $('.section ul').height())/2
	//console.debug(wHeight+','+ ((sectionBorderWidth*2) + $('.section ul').height()))
	$('.section li:first').css('border-top-width', sectionBorderWidth);
	$('.section li:last').css('border-bottom-width', sectionBorderWidth);

	if($('#cover').length && $('#cover').hasClass('.page_404')){
		cOffset = ($('#cover').height()-$('#cover .cover_content').height())/2;
		$('#cover .cover_content').css('margin-top','-'+cOffset+'px');
	}	
}

// var to check if the process is running
var addToShoppingCartIsProcessing = false;

// add product to shopping cart
function AddToShoppingCart(productCode, quantity) {
	if (!addToShoppingCartIsProcessing) {
		var lang = $('body').data('lang');
		addToShoppingCartIsProcessing = true;
		setTimeout(function() {
			addToShoppingCartIsProcessing = false;
		}, 500);

		$.ajax({
			type: "GET",
			url: "/"+lang+"/shop/add_to_cart",
			data: 'id='+productCode+'&qty='+quantity,
			//contentType: "application/json; charset=utf-8",
			//dataType: "json",
			success: function(data) {
				//console.debug(data.query)
				$('#cart_form').html(data.query);
				$('.cart_switch > span, .cart_title > span').text(data.amount);
				$('#cart .scroll_container').mCustomScrollbar({
					theme:"dark",
					advanced:{
						updateOnContentResize: true
					}
				});
				$('.spinner').spinner();
				showCart()
			}
		});
	}
}

function updateShoppingCart(rowId, quantity) {
	if (!addToShoppingCartIsProcessing) {
		var lang = $('body').data('lang');
		addToShoppingCartIsProcessing = true;
		setTimeout(function() {
			addToShoppingCartIsProcessing = false;
		}, 500);

		$.ajax({
			type: "GET",
			url:"/"+lang+"/shop/update_cart",
			data: 'id='+rowId+'&qty='+quantity,
			//data: "{rowid:'" + rowId + "', qty:'0'}",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(data) {
				$('#cart_form').html(data.query);
				$('.cart_switch > span, .cart_title > span').text(data.amount);
				$('#cart .scroll_container').mCustomScrollbar({
					theme:"dark",
					advanced:{
						updateOnContentResize: true
					}
				});
				$('.spinner').spinner();
				showCart();
			}
		});
	}
}

function loadShoppingCart() {
	
	if (!addToShoppingCartIsProcessing) {
		var lang = $('body').data('lang');
		addToShoppingCartIsProcessing = true;
		setTimeout(function() {
			addToShoppingCartIsProcessing = false;
		}, 500);

		$.ajax({
			type: "GET",
			url: "/"+lang+"/shop/display_cart",
			//data: 'id='+rowId+'&qty='+quantity,
			//data: "{rowid:'" + rowId + "', qty:'0'}",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(data) {
				//console.debug(data.query)
				$('#cart_form').html(data.query);
				$('.cart_switch > span, .cart_title > span').text(data.amount);
				//$('#cart .scroll_container').mCustomScrollbar("destroy")
				$('#cart .scroll_container').mCustomScrollbar({
					theme:"dark",
					advanced:{
						updateOnContentResize: true
					}
				});
				$('.spinner').spinner();
				//showCart();
			}
		});
	}
}

jQuery.fn.centeringPictures=function(){
	return $(this).each(function(){
		var $t=$(this),
			wWidth = $(window).width();
			wheight = $(window).height();
		$t.width = $(this).width();
		$t.height = $(this).height();

		if($t.hasClass('zoom')){
			$t.css({
				"transition": "none",
				"-webkit-transition": "none",
				"-moz-transition": "none",
				"-o-transition": "none"
			});
		}

		if($t.width > wWidth){
			$t.css('margin-left', (wWidth - $t.width)/2)
		} else {
			$t.css('margin-left', 0);           
		}

		if($t.height > wHeight){
			$t.css('margin-top', (wHeight - $t.height)/2)
		} else {
			$t.css('margin-top', 0);            
		}
		
		if($t.hasClass('zoom')){
			setTimeout(function(){
				$t.css({
					"transition": "all 5s ease-in-out",
					"-webkit-transition": "all 5s ease-in-out",
					"-moz-transition": "all 5s ease-in-out",
					"-o-transition": "all 5s ease-in-out"
				});
			},100)
			
		}
		

	});
}

function loader(){
	$('#loader .bg').css('visibility','visible').animate({
		'height':'150px'
	},10000);   
	imagesLoaded('body', function() {
		$('#loader .bg').stop(false,true);
		$('#loader .text').fadeOut('300', function(){
			$('#loader .intro').animate({
				'top':'-50%'
			},600,function(){
				$('#loader').fadeOut();
				$('html').removeClass('loading');
				paralaxApply();
			});
		});     
	});
}

function loaderAnimate(element){
	$(element).animate({
		'height':'150px'
	},10000);
}

function headerState(wOffset, navOffset){

	if($(window).scrollTop() >= wOffset && !$('#header').hasClass('no_scroll')){
		$('#header:not(".active")').addClass('active');
	} else if(!$('#header').hasClass('no_scroll')){
		$('#header').removeClass('active');
	}

	if($(window).scrollTop() >= navOffset && !$('.nav_container').hasClass('no_scroll') && navOffset != 0){
		$('.nav_wrapper').addClass('fixed');
	} else if(!$('#header').hasClass('no_scroll') && navOffset != 0){
		$('.nav_wrapper').removeClass('fixed');
	}
}

function hideMenu(){
	$('#menu').stop().animate({
		left:'-320px'
	},300);
}

function showMenu(){
	$('#menu').stop().animate({
		left:'0'
	},300);
}
function hideCart(){
	$('#cart').stop().animate({
		right:'-350px'
	},300);
}

function showCart(){
	$('#cart').stop().animate({
		right:'0'
	},300);
}

jQuery.fn.phoneMask=function(){
	return $(this).each(function(){
		var $t=$(this),
			maskList = $.masksSort($.masksLoad("http://fabergemuseum.ru/public/site/js/phone-codes.json"), ['#'], /[0-9]|#/, "mask"),
			maskOpts = {
				inputmask: {
					definitions: {
						'#': {
						validator: "[0-9]",
						cardinality: 1
						}
					},
					showMaskOnHover: false,
					autoUnmask: true
				},
				match: /[0-9]/,
				replace: '#',
				list: maskList,
				listKey: "mask"
			};
		$t.inputmasks(maskOpts);                
	});
}

var styles = [
  {
	"featureType": "landscape",
	"stylers": [
	  { "color": "#ede9e6" }
	]
  },{
	"featureType": "water",
	"stylers": [
	  { "color": "#d9d3cd" }
	]
  },{
	"featureType": "administrative.province",
	"stylers": [
	  { "visibility": "off" }
	]
  },{
	"featureType": "administrative.locality",
	"elementType": "labels.text.stroke",
	"stylers": [
	  { "color": "#8d7c76" },
	  { "weight": 0.6 }
	]
  },{
	"featureType": "administrative.locality",
	"elementType": "http://fabergemuseum.ru/public/site/js/labels.text.fill",
	"stylers": [
	  { "color": "#8e7b76" }
	]
  },{
	"featureType": "administrative.locality",
	"elementType": "http://fabergemuseum.ru/public/site/js/labels.icon",
	"stylers": [
	  { "visibility": "off" }
	]
  },{
	"featureType": "road.highway",
	"elementType": "http://fabergemuseum.ru/public/site/js/geometry.fill",
	"stylers": [
	  { "color": "#bbafac" }
	]
  },{
	"featureType": "road.highway",
	"elementType": "geometry.stroke",
	"stylers": [
	  { "visibility": "off" }
	]
  },{
	"featureType": "road.highway",
	"elementType": "http://fabergemuseum.ru/public/site/js/labels.text",
	"stylers": [
	  { "visibility": "off" }
	]
  },{
	"featureType": "poi",
	"elementType": "geometry",
	"stylers": [
	  { "visibility": "off" }
	]
  },{
	"featureType": "poi",
	"elementType": "labels",
	"stylers": [
	  { "visibility": "off" }
	]
  },{
	"featureType": "administrative.country",
	"elementType": "http://fabergemuseum.ru/public/site/js/geometry.fill",
	"stylers": [
	  { "visibility": "off" }
	]
  },
  {
	"featureType": "administrative.country",
	"elementType": "geometry",
	"stylers": [
	  { "color": "#856b60" },
	  { "weight": 2 }
	]
  },
  {
	"featureType": "administrative.locality",
	"elementType": "http://fabergemuseum.ru/public/site/js/labels.text",
	"stylers": [
	  { "color": "#5b3224" }
	]
  },
  {
	"featureType": "administrative.country",
	"elementType": "http://fabergemuseum.ru/public/site/js/labels.text.fill",
	"stylers": [
	  { "color": "#6cbad3" }
	]
  },
  {
	"featureType": "administrative.country",
	"elementType": "labels.text.stroke",
	"stylers": [
	  { "visibility": "off" }
	]
  },
  {
	"featureType": "road.arterial",
	"elementType": "geometry",
	"stylers": [
	  { "visibility": "off" }
	]
  },{
  },{
  }
];

var map;

function initMap() { //для карты с меткой

	if(typeof mapStart == "undefined"){
		var mapStart = [59.934742,30.342819];
	}

	var pointLatlng = new google.maps.LatLng(mapStart[0],mapStart[1]),
		directionsDisplay =new google.maps.DirectionsRenderer(),
		directionsService = new google.maps.DirectionsService(),
		startRouteMarker=false,
		routeStart=false;


	//var moscow = new google.maps.LatLng(56.072035,35.899887);
	var myOptions = {
		zoom:16,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: pointLatlng,
		panControl: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		},
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false
	};
	map = new google.maps.Map(document.getElementById("map"), myOptions);
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById('route_panel'));
	directionsDisplay.setOptions({
		suppressMarkers:true
	});
	if($('#route_form').length){
		$('#route_form .travel_mode a').click(function(e){
			e.preventDefault();
			$('#route_form .travel_mode a.active').removeClass('active')
			$(this).addClass('active');
			if(routeStart!=false){
				placeMarker(routeStart, map);
			}
		});
		$('#route_form form').submit(function(e){
			e.preventDefault();
			var $t=$(this);
			if($('#route_start').val().length){
				placeMarker($('#route_start').val()+', Санкт-Петербург', map);
			}
		});
	}

	//map.setOptions({styles: styles});
	var image = new google.maps.MarkerImage('map_marker.png'/*tpa=http://fabergemuseum.ru/public/site/images/map_marker.png*/,           
			new google.maps.Size(46, 60),           
			new google.maps.Point(0, 0),            
			new google.maps.Point(23, 30));
	var marker = new google.maps.Marker({
			map: map,
			position: pointLatlng,
			icon: image
	});
	function placeMarker(position, map) {
		routeStart=position;
		calcRoute(position,pointLatlng);
	}
	function calcRoute(start,end) {
		var travel_mode=google.maps.TravelMode.DRIVING;
		if($('#route_form').length){
			var modes=[
				google.maps.TravelMode.WALKING,
				google.maps.TravelMode.DRIVING,
				google.maps.TravelMode.TRANSIT
			];
			travel_mode=modes[$('#route_form .travel_mode a.active').index()]
		}
		var request = {
			origin:start,
			destination:end,
			travelMode: travel_mode
		};
		directionsService.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				if(startRouteMarker) startRouteMarker.setMap(null);
				startRouteMarker = new google.maps.Marker({
					position: response.routes[0].legs[0].start_location,
					map: map
				});
				directionsDisplay.setDirections(response);
			}
		});
	}
	google.maps.event.addListener(map, 'click', function(e) {
		placeMarker(e.latLng, map);
	});
}

jQuery.fn.animateIt=function(options){
	var $=jQuery;
	$.fn.extend({
		scrollAction:function(){
			var $t=this;
			var sT=$(window).scrollTop();
			if(sT>$t.startPos){
				$t.isAn=true;
				$t.animate({left:0,top:0,opacity:1},500)
			}
		},
		posCalc:function(){
			var $t=this;
			$t.s=$t.attr('style');
			$t.removeAttr('style');
			$t.startPos=$t.offset().top-$(window).height()+300;
			$t.attr('style',$t.s);
			$t.scrollAction();
		}
	});
	return $(this).each(function(){
		var $t=$(this);
		$t.opt=options;
		$t.isAn=false;
		$t.fadeTo(1,0.01);
		$t.css($t.opt.startPos);
		
		$(window).resize(function(){
			if(!$t.isAn) $t.posCalc();
		});
		$(window).load(function(){
			$t.posCalc();
		});
		$(window).scroll(function(){
			if(!$t.isAn) $t.scrollAction();
		});
	});
};

function getUrlVar(){
	var urlVar = window.location.search; // получаем параметры из урла
	var arrayVar = []; // массив для хранения переменных
	var valueAndKey = []; // массив для временного хранения значения и имени переменной
	var resultArray = []; // массив для хранения переменных
	arrayVar = (urlVar.substr(1)).split('&'); // разбираем урл на параметры
	if(arrayVar[0]=="") return false; // если нет переменных в урле
	for (i = 0; i < arrayVar.length; i ++) { // перебираем все переменные из урла
		valueAndKey = arrayVar[i].split('='); // пишем в массив имя переменной и ее значение
		resultArray[valueAndKey[0]] = valueAndKey[1]; // пишем в итоговый массив имя переменной и ее значение
	}
	return resultArray; // возвращаем результат
}

jQuery.fn.loadItems=function(number){
	return $(this).each(function(){
		var $t=$(this),
			inProgress = false,         
			loadedItems = '';

		if($t.closest('.load_link:visible').length){
			linkTarget = $($t.data('target'));
			linkHref= $t.attr('href');
		} else {            
			linkTarget = $('.load_link:visible a').data('target');
			linkHref = window.location.pathname+'/load_page';                       
		}           

		$t.on('click', function(e){
			e.preventDefault(); 

			if($('.categories a').length && $(this).data('group') == 'category'){
				$('.categories a').removeClass('active');
				$('.categories a[data-link="'+$(this).data('link')+'"]').addClass('active');
			}

			if(window.scrolloramaFooter){
				scrolloramaFooter.destroy();    
			}           

			$('.footer div.container').removeAttr('style');        

			var params='';
			if(!inProgress ) {

				inProgress = true;

				if($(this).attr('id') == 'show_exhibitions'){
					$('.events .item_wrapper').remove();
					$('.events').hide();
					$('.exhibitions').show();
					$('#show_exhibitions').removeClass('active');
				} else if($(this).attr('id') == 'show_events') {
					$('.exhibitions .item_wrapper').remove();
					$('.exhibitions').hide();
					$('.events').show();
					$('#show_events').removeClass('active');
				}

				$('#events:visible, #exhibitions:visible').freetile();

				if(!$t.closest('.load_link').length && $('#events').length){

					if($('.load_link:visible a').length){
						linkTarget = $($('.load_link:visible a').data('target'));
					} else {
						linkTarget = $('#'+$('.container > .list:visible').attr('id'))
					}

				} else if ($('#events').length){
					linkTarget = $($t.data('target'));
				} else {
					linkTarget = $('#'+$('.container > .list').attr('id'))
				}

				start = linkTarget.find('.item_wrapper').length;

				if($t.closest('.nav').length){                  
					$t.group = $t.data('group');
					start = 0;

					if($t.group != 'sort' && !$t.data('single') && $t.attr('href') != '#'){
						$t.closest('.nav').find('a[data-group="'+$t.group+'"]').removeClass('active');
						$t.addClass('active');
						if($t.data('parent').length){
							$('#'+$t.data('parent')).text($t.text()).addClass('active');
						}
					} else if($t.group != 'sort' && $t.data('single')){
						$t.toggleClass('active').parent().siblings().find('.active[data-single="true"]').removeClass('active');
					} else {
						$t.closest('.nav').find('a[data-group="'+$t.group+'"]').removeClass('active');
						$t.addClass('active');
					}

					$('.nav .active').each(function(){
						if(!$(this).data('default') && $(this).attr('href') != '#'){
							params += '&' + $(this).attr('href');
						}
					});

					if($('#eventsFilter').length){
						var eventFilter = [];
						$('#eventsFilter .active').each(function(){
							eventFilter.push($(this).data('link'))
						});

						$.cookie('eventsFilter', eventFilter, { expires: 7 });
					}

					if($('#exhibitsFilter').length){
						var exhibitsFilter = [];
						$('#exhibitsFilter .active').each(function(){
							exhibitsFilter.push($(this).data('link'))
						});

						$.cookie('exhibitsFilter', exhibitsFilter, { expires: 7 });
					}

					if($('#shopFilter').length){
						var shopFilter = [];
						$('#shopFilter .active').each(function(){
							shopFilter.push($(this).data('link'))
						});

						$.cookie('shopFilter', shopFilter, { expires: 7 });
					}
					

				} else {
					$('.nav .active').each(function(){
						if($(this).attr('href') != '#' && !$(this).data('default')){
							params += '&' + $(this).attr('href');
						}
					});
					start = linkTarget.find('.item_wrapper').length;
					if(window.scrolloramaFooter){
						scrolloramaFooter.destroy();
					}

					$('.footer div.container').removeAttr('style');
				}

				params += "&start="+start;

				if(!$t.closest('.load_link').length && $('#events').length){					
					if($('.exhibitions').is(':visible')){
						linkHref = window.location.pathname+'/load_page/exhibition';
					} else if($('.events').is(':visible')) {
						linkHref = window.location.pathname+'/load_page/event';
					}
				} else if ($('#events').length){
					linkHref= $t.attr('href');
				}

				if($('#events').length){

				} else {
					window.history.pushState(null, null, window.location.pathname+'?'+params);
				}

				//console.debug(window.location.pathname+'?'+params)
				
				$.get(
				linkHref,
				params,
				function (data) {
					if (data.type == 'error') {
						alert('error');
						return(false);
					} else {
						var loadedItem = '';
					  	
						$(data.items).each(function() {
							if ($(this).attr('link')) {
								loadedItem += '<div class="item_wrapper item_loaded"><div class="item"><a href="'+$(this).attr('link')+'">';
							} else {
								loadedItem += '<div class="item_wrapper item_loaded"><div class="item"><a>';
							}
							if($(this).attr('src')){
								loadedItem += '<span class="image"><img src="'+$(this).attr('src')+'" alt="" class="zoom zoom_fast"></span>';
							}
							loadedItem += '<span class="text">';
							if($(this).attr('title')){
								loadedItem += '<span class="title">'+$(this).attr('title')+'</span>';
							}
							if($(this).attr('category')){
								loadedItem += '<span class="category">'+$(this).attr('category')+'</span>';
							}
							if($(this).attr('autor')){
								loadedItem += '<span class="autor"><i class="icon icon_autor"></i>'+$(this).attr('autor')+'</span>';
							}
							if($(this).attr('date')){
								loadedItem += '<span class="date"><i class="icon icon_clock"></i>'+$(this).attr('date')+'</span>';
							}
							if($(this).attr('price')){
								loadedItem += '<span class="price">'+$(this).attr('price')+'</span>';
							}
							if($(this).attr('text')){
								loadedItem += '<span class="intro">'+$(this).attr('text')+'</span>';
							}
							loadedItem += '</span></a></div></div>';
						});
						
						$('.nav a[data-id]').hide();
						$(data.navigation).each(function(){
							$('.nav a[data-id='+$(this).attr('id')+']').show();
						});

						if(start == 0){
							linkTarget.find('.item_wrapper').remove();
						}
						linkTarget.append(loadedItem);

						imagesLoaded( linkTarget, function(){
							linkTarget.find('.item_loaded').each(function(){
								if($(this).find('img').length){
									if($(this).find('img').width() > 500){
										$(this).addClass('col_8');
									} else {
										$(this).addClass('col_4');
									}
								} else {
									$(this).addClass('col_4');
								}
							});
							linkTarget.freetile();
							linkTarget.find('.item_loaded').removeClass('item_loaded');
						});

						inProgress = false;
						
						if(data.next == false){
							if($t.closest('.nav').length){
								$('.load_link a').hide();
							} else {
								$t.hide();
							}                           
						} else {
							if($t.closest('.nav').length){
								$('.load_link a').fadeIn();
							} else {
								$t.fadeIn();
							}
						}
						if(window.scrolloramaFooter){
							scrolloramaFooter.destroy();
						}
						$('.footer div.container').removeAttr('style');
					}
				},"json");
			}
		});
	}); 
}

/************/
/* Calendar */
/************/
var showOrder = function(hash){
	var orderDatepicker,
	orderTimeInput       = $('#time'),
	orderPeopleCount     = $('#amount'),
	orderPeopleCountMax  = $('#amount_max');
	
	orderPeopleCountMax.parent().hide();

	orderTimeInput.prop('disabled',   true);
	orderPeopleCount.prop('disabled',   true);

	
	if (!orderDatepicker && !$('#group_planning_form').length){
		orderDatepicker = $("#date").Zebra_DatePicker({
			show_icon:false,
			months:            monthsNominative,
			days_abbr:         weekDayAbbreviations,
			header_navigation: ['<span></span>', '<span></span>'],
			format:            'd n Y',
			direction: [1, 6],
			
			onSelect: function(currentdate, currentEl, pos, input){
				reservationCallback(apiCallSync('getReservationData', {}));
				
				var result = currentdate.split(' '), 
					reservation = reservationData.reservation,
					en_reservation = reservationData.en,
					curDay   = result[0][0] == 0 ? result[0][1] : result[0],
					curMonth = result[1],
					curYear  = result[2],
					disableTimeRanges = [];
				
				orderPeopleCountMax.parent().hide();
				
				orderTimeInput.prop('disabled', false);
				orderTimeInput.val('');
				
				orderPeopleCount.prop('disabled', true);
				orderPeopleCount.val('');
				
				disableTimeRanges = filterReservedHours(reservationData.sessionDuration, reservationData.disabled, reservation, curYear, curMonth, curDay);

				enTimeRanges = filterEnEvents(en_reservation, curYear, curMonth, curDay);
				
				orderTimeInput.off('changeTime');
				orderTimeInput.timepicker('remove');				

				orderTimeInput.timepicker({
					'appendTo':          $('.field_time'),
					'timeFormat':        'H:i',
					'minTime':           reservationData.sessionFirst,
					'maxTime':           reservationData.sessionLast,
					'step':              reservationData.sessionDuration,
					'disableTimeRanges': disableTimeRanges
				});			

				orderTimeInput.on('showTimepicker',	function(){
					jQuery.each(enTimeRanges, function() {
						$('.ui-timepicker-list li:contains('+this.time+')').addClass('en');
					});
				});

				orderTimeInput.on('changeTime',	function(){
					timeChange();
					orderPeopleCount.prop('disabled', false);
					if($('.ui-timepicker-list li:contains('+$(this).val()+')').hasClass('en')){
						$('#en_marker').show();
					} else {
						$('#en_marker').hide();
					}
				});
				
				var curMonthIndex = curMonth - 1,
					curMonthTitle = monthsGenitive[curMonthIndex];
				
				$('#unixtime').val(curYear + '.' + curMonthIndex + '.' + curDay);						
				$(input).val(curDay + ' ' + curMonthTitle + ' '+ curYear);					
				
				function timeChange(){
					reservationCallback(apiCallSync('getReservationData', {}));
					
					var curTime = orderTimeInput.val(),						
						vacancies = reservationData.vacanciesMax;
					
					if (reservation[curYear]
					 && reservation[curYear][curMonth]
					 && reservation[curYear][curMonth][curDay]
					 && reservation[curYear][curMonth][curDay][curTime])
						vacancies -= reservation[curYear][curMonth][curDay][curTime];
					
					orderPeopleCount.attr('max', vacancies);				
					orderPeopleCountMax.text(vacancies);							
					orderPeopleCountMax.show();
					orderPeopleCountMax.parent().show();
					orderPeopleCount.val('');
				};
			},					
			onChange: function(view, elements, el){
				 if (view == 'days'){
					curDay = $(el).val();
					
					if (curDay != ''){
						pattern = '-' + curDay.slice(0, 2);		
						elements.each(function(){
							if ($(this).data('date').match(pattern))
								$(this).addClass("dp_selected");
						});
					}
				 }
			},
		});
	} else {
		orderDatepicker = $("#date").Zebra_DatePicker({
			show_icon:false,
			months:            monthsNominative,
			days_abbr:         weekDayAbbreviations,
			header_navigation: ['<span></span>', '<span></span>'],
			format:            'd n Y',
			//direction: [1, 0],
			direction: 1,
			
			onSelect: function(currentdate, currentEl, pos, input){
				reservationCallback(apiCallSync('getReservationData', {}));
				
				var result = currentdate.split(' '), 
					reservation = reservationData.reservation,
					en_reservation = reservationData.en,
					curDay   = result[0][0] == 0 ? result[0][1] : result[0],
					curMonth = result[1],
					curYear  = result[2],
					disableTimeRanges = [];
				
				orderPeopleCountMax.parent().hide();
				
				orderTimeInput.prop('disabled', false);
				orderTimeInput.val('');
				
				orderPeopleCount.prop('disabled', true);
				orderPeopleCount.val('');
				
				disableTimeRanges = filterReservedHours(reservationData.sessionDuration, reservationData.disabled, reservation, curYear, curMonth, curDay);

				enTimeRanges = filterEnEvents(en_reservation, curYear, curMonth, curDay);
				
				orderTimeInput.off('changeTime');
				orderTimeInput.timepicker('remove');				

				orderTimeInput.timepicker({
					'appendTo':          $('.field_time'),
					'timeFormat':        'H:i',
					'minTime':           reservationData.sessionFirst,
					'maxTime':           reservationData.sessionLast,
					'step':              reservationData.sessionDuration,
					'disableTimeRanges': disableTimeRanges
				});			

				orderTimeInput.on('showTimepicker',	function(){
					jQuery.each(enTimeRanges, function() {
						$('.ui-timepicker-list li:contains('+this.time+')').addClass('en');
					});
				});

				orderTimeInput.on('changeTime',	function(){
					timeChange();
					orderPeopleCount.prop('disabled', false);
					if($('.ui-timepicker-list li:contains('+$(this).val()+')').hasClass('en')){
						$('#en_marker').show();
					} else {
						$('#en_marker').hide();
					}
				});
				
				var curMonthIndex = curMonth - 1,
					curMonthTitle = monthsGenitive[curMonthIndex];
				
				$('#unixtime').val(curYear + '.' + curMonthIndex + '.' + curDay);						
				$(input).val(curDay + ' ' + curMonthTitle + ' '+ curYear);					
				
				function timeChange(){
					reservationCallback(apiCallSync('getReservationData', {}));
					
					var curTime = orderTimeInput.val(),						
						vacancies = reservationData.vacanciesMax;
					
					if (reservation[curYear]
					 && reservation[curYear][curMonth]
					 && reservation[curYear][curMonth][curDay]
					 && reservation[curYear][curMonth][curDay][curTime])
						vacancies -= reservation[curYear][curMonth][curDay][curTime];
					
					orderPeopleCount.attr('max', vacancies);				
					orderPeopleCountMax.text(vacancies);							
					orderPeopleCountMax.show();
					orderPeopleCountMax.parent().show();
					orderPeopleCount.val('');
				};
			},					
			onChange: function(view, elements, el){
				 if (view == 'days'){
					curDay = $(el).val();
					
					if (curDay != ''){
						pattern = '-' + curDay.slice(0, 2);		
						elements.each(function(){
							if ($(this).data('date').match(pattern))
								$(this).addClass("dp_selected");
						});
					}
				 }
			},
		});
	}

	$('.Zebra_DatePicker').appendTo('.field_date');

	apiCallAsync('getReservationData', {}, reservationCallback);
	
	function reservationCallback(data){
		reservationData = data;			
		var reservedDates = filterReservedDates(reservationData.reservation);	
		//reservedDates.push('* * * 1,2');	
		reservedDates.push('* * * 5');		
		orderDatepicker.data('Zebra_DatePicker').update({disabled_dates: reservedDates});
	}
}

function apiCallAsync(method, parameters, successCallback){
	if(!$('#group_planning_form').length){
		var rootUrl     = location.protocol + '//' + location.hostname + '/',
			apiRootUrl = rootUrl + 'request/getReservationData';
	} else {
		var rootUrl     = location.protocol + '//' + location.hostname + '/',
			apiRootUrl = rootUrl + 'request/getSuperCrutch';
	}
	$.ajax(
		apiRootUrl,
		{
			async:    true,
			cache:    false,
			dataType: 'json',			
			success: successCallback
		}
	);
}

function apiCallSync(method, parameters){
	/*var rootUrl     = location.protocol + '//' + location.hostname + '/',
		apiRootUrl = rootUrl + 'request/getReservationData';*/

	if(!$('#group_planning_form').length){
		var rootUrl     = location.protocol + '//' + location.hostname + '/',
			apiRootUrl = rootUrl + 'request/getReservationData';
	} else {
		var rootUrl     = location.protocol + '//' + location.hostname + '/',
			apiRootUrl = rootUrl + 'request/getSuperCrutch';
	}
	return $.parseJSON($.ajax(
		apiRootUrl,
		{
			async:    false,
			cache:    false,
			dataType: 'json',
		}
	).responseText);
}

function filterReservedDates(data){
	var year, month, day, disabledDates = [];
	
	for (var yearKey in data){
		year = data[yearKey];
		
		for (var monthKey in year){
			month = year[monthKey];
			
			for (var dayKey in month){
				day = month[dayKey];
				
				if (day === true)
					disabledDates.push(dayKey + ' ' + monthKey + ' ' + yearKey);
			}
		}
	}
	
	return disabledDates;
}

function filterReservedHours(duration, disabled, reservation, year, month, day){
	var timeStart, disabledHours = [];	
	
	if (disabled.length)
		for (var i = 0, length = disabled.length; i < length; i++){
			timeStart = disabled[i];			
			disabledHours.push([timeStart, getSessionEnd(timeStart, duration)]);
		}		
	
	if (reservation[year]
	 && reservation[year][month]
	 && reservation[year][month][day])
	{
		dayReservation = reservation[year][month][day];
		
		for (timeStart in dayReservation)
			if (dayReservation[timeStart] === true)
				disabledHours.push([timeStart, getSessionEnd(timeStart, duration)]);
	}
	
	return disabledHours;
	
	
	function getSessionEnd(timeStart, duration){
		var delimiterIndex, hours, minutes, timeEnd;
		
		delimiterIndex = timeStart.indexOf(':', 1);
		
		hours   = parseInt(timeStart.substring(0, delimiterIndex));
		minutes = parseInt(timeStart.substr(delimiterIndex + 1));
		
		minutes += hours * 60 + duration;
		
		hours   = Math.floor(minutes / 60);
		minutes = minutes % 60;
		minutes = minutes.toString().length == 2 ? minutes : '0' + minutes;
		
		timeEnd = hours + ':' + minutes;
		
		return timeEnd;
	}
}

function filterEnEvents(reservation, year, month, day){
	var timeStart,
		 enHours = [];	
	
	if (reservation.length)
		for (var i = 0, length = reservation.length; i < length; i++){
			timeStart = reservation[i];	
			//enHours += 'time':timeStart;
			enHours.push({'time':timeStart});

			//enHours.push(timeStart);
		}		
	
	if (reservation[year]
	 && reservation[year][month]
	 && reservation[year][month][day])
	{
		dayReservation = reservation[year][month][day];
		
		for (timeStart in dayReservation)
			if (dayReservation[timeStart] === true)
				//enHours.push(timeStart);
			//enHours.time=timeStart
			enHours.push({'time':timeStart});
	}
	
	return enHours;
	
	
	/*function getSessionEnd(timeStart, duration){
		var delimiterIndex, hours, minutes, timeEnd;
		
		delimiterIndex = timeStart.indexOf(':', 1);
		
		hours   = parseInt(timeStart.substring(0, delimiterIndex));
		minutes = parseInt(timeStart.substr(delimiterIndex + 1));
		
		minutes += hours * 60 + duration;
		
		hours   = Math.floor(minutes / 60);
		minutes = minutes % 60;
		minutes = minutes.toString().length == 2 ? minutes : '0' + minutes;
		
		timeEnd = hours + ':' + minutes;
		
		return timeEnd;
	}*/
}


