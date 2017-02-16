$(document).ready(function() {
	$('.sform').submit(function(e) {
		//e.preventDefault();
		var f = $(this);
		$('.fphone', f).removeClass('ierror');
		$('.fvin', f).removeClass('ierror');
		var phone = $('.fphone', f).val();
		var vin = $('.fvin', f).val();

		var error = false;
		if(phone == '') {
			$('.fphone', f).addClass('ierror');
			error = true;
		}
		if(vin == '') {
			$('.fvin', f).addClass('ierror');
			error = true;
		}
		if(error) {
			return false;
		} else {
			submitted = true;
			return true;
		}
	});
	//mask
	$('.fphone').maskinp('+79999999999');
});