$(function() {

	$('#carousel').carouFredSel({
		width: '100%',
		items: {
			visible: 'odd+2'
		},
		auto: {
			items: 1,
			easing: 'linear',
			duration: 9000,
			timeoutDuration: 0
		}
		
	});

	window.requestAnimationFrame(callback);

	// $('.caroufredsel_wrapper').css({
	// 	'width': '100%',
	// 	'height': '100vh'
	// });

});