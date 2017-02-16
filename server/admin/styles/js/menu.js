$(document).ready(function () {
         
            $('.tabmenu li a').click(function () {
                var el = $(this).attr('href');
                var elWrapped = $(el);
                scrollToDiv(elWrapped, 40);
                return false;
            });

            function scrollToDiv(element, navheight) {
                var offset = element.offset();
                var offsetTop = offset.top;
                var totalScroll = offsetTop - navheight;
                $('body,html').animate({
                    scrollTop: totalScroll
                }, 500);
				}
		
			
    var win = $('.window');
    win.css({
        'margin-left':'-' + (win.width() / 2) + 'px'
        });
		
});
	$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 150) {
			
			$(".headmenu").fadeOut();
			}
		else 
			{
				$(".headmenu").css({top: '0', position: 'fixed', margin:'0 auto', width:'100%'});
				$(".tabmenu").css({top: '29px'});
				$(".headmenu").fadeIn();
			}
	}
	);
});

function spoiler(class_spol) {

			 $("#spoiler ."+class_spol+"").fadeToggle("slow");
			
			 
			}