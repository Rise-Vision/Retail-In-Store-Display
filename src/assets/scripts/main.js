// $(function() {

// 	$('#carousel').carouFredSel({
// 		width: '100%',
// 		items: {
// 			visible: 'odd+2'
// 		},
// 		auto: {
// 			items: 1,
// 			easing: 'linear',
// 			duration: 9000,
// 			timeoutDuration: 0
// 		}
		
// 	});


// });

$(document).ready(function(){
  $('.bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 700,
    slideMargin: 10,
    ticker: true,
    speed: 9500
  });

  $('.bxslider-wrapper').css({
  	maxWidth: none
  });
});


