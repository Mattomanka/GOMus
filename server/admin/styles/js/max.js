$(document).ready(function(){
	
	 $('.m-nav-item').click(function () {
                var el = $(this).attr('rel');
                var elWrapped = $(el);
                scrollToDiv(elWrapped, 0);
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
	
});