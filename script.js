$(document).ready(function(){
	$('.inputButtons').click(function () {
		switch ($(this).text().charCodeAt(0)) {
			case 61: try {$('#inputbox').val(eval($('#inputbox').val()));} catch (e){$('#inputbox').val('ERROR');}
			break;
			case 99: return $('#inputbox').val('');
			break; 
			case 8592: return $('#inputbox').val($('#inputbox').val().replace(/.$/, ''));
			break;
	 		default: $('#inputbox').val($('#inputbox').val() + $(this).text()); 
		}
	});
});