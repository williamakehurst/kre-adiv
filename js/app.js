$(function(){
	/* For Splash Animation */
	var tl = new TimelineLite();
	tl.fromTo('.splash__display, hr', 1.5, {
		opacity: 0,
		y: -100,
	},{
		opacity: 1,
		y: 0,
	},0.5);
	tl.fromTo('.splash__headline, .portfolio', 1, {
		opacity: 0,
		x: -100,
	},{
		opacity: 1,
		x: 0,
	});
	tl.fromTo('.splash__message', 1, {
		opacity: 0,
		y: 100,
	}, {
		opacity: 1,
		y: 0,
	});
	$(window).scroll(function(){
		var windowHeight = $(window).height();
		var scrollD = $(window).scrollTop();
		var showContactInfo = windowHeight * 0.20;
		console.log(scrollD, showContactInfo);
		if (scrollD > 30) {
			TweenLite.to('.splash__message', 0.4, {
				opacity: 0,
				y: -40,
			});
		} else {
			TweenLite.to('.splash__message', 0.4, {
				opacity: 1,
				y: 0,
			});
		}
		if (scrollD > showContactInfo) {
			TweenLite.to('.contact__content', 0.75, {
				opacity: 1,
				y: -10,
			});
		} else if (scrollD < showContactInfo) {
			TweenLite.to('.contact__content', 0.75, {
				opacity: 0,
				y: 0,
			});
		}
	});
});
