$(function() {

	$('#carousel').carouFredSel({
		width: '100%',
		items: {
			visible: 'odd+2'
		},
		auto: {
			items: 1,
			easing: 'linear',
			duration: 6000,
			timeoutDuration: 0
		}
		
	});

	$('.caroufredsel_wrapper').css({
		'width': '100%'
		// 'height': '100vh'
	});

	var viewHeight = $(window).height();
	$('#carousel').css('height', viewHeight);

});