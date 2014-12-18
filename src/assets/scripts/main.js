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
		// pagination: {
		// 	container: '#pager',
		// 	items: 1,
		// 	duration: 0.5,
		// 	queue: 'last',
		// 	onAfter: function() {
		// 		var cur = $(this).triggerHandler( 'currentVisible' ),
		// 			mid = Math.floor( cur.length / 2 );

		// 		cur.eq( mid ).addClass( 'hover' );
		// 	}
		// }
	});

	$('.caroufredsel_wrapper').css({
		'width': '100%'
	});

});