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
    minSlides: 2,
    maxSlides: 2,
    slideWidth: 400,
    slideMargin: 10,
    ticker: true,
    speed: 9500
  });

  $('.bxslider li').css({
  	width: 400
  });
});


