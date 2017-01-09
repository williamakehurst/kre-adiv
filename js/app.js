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
	tl.fromTo('.splash__headline', 1, {
		opacity: 0,
		x: -100,
	},{
		opacity: 1,
		x: 0,
	},1.5);
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
		var showFirstProject = windowHeight * 0.1;
		var showSecondProject = windowHeight * 0.4;
		var showThirdProject = windowHeight * 0.8;
		var showContactInfo = windowHeight * 1.2;
		if (scrollD > 30) {
			TweenLite.to('.splash__message', 0.4, {
				opacity: 0,
				y: -30,
			});
		} else {
			TweenLite.to('.splash__message', 0.4, {
				opacity: 1,
				y: 0,
			});
		}
		if (scrollD > showFirstProject){
			TweenLite.to('.business-cards', 0.5, {
				opacity: 1,
			});
		} else if (scrollD < showFirstProject) {
			TweenLite.to('.business-cards', 0.5, {
				opacity: 0,
			});
		}
		if (scrollD > showSecondProject){
			TweenLite.to('.onboarding', 0.5, {
				opacity: 1,
			});
			TweenLite.to('.splash__content', 0.5, {
				opacity: 0,
			});
		} else if (scrollD < showSecondProject) {
			TweenLite.to('.onboarding', 0.5, {
				opacity: 0,
			});
			TweenLite.to('.splash__content', 0.5, {
				opacity: 1,
			});
		}
		if (scrollD > showThirdProject){
			TweenLite.to('.rework', 0.5, {
				opacity: 1,
			});
		} else if (scrollD < showThirdProject) {
			TweenLite.to('.rework', 0.5, {
				opacity: 0,
			});
		}
		if (scrollD > showContactInfo) {
			TweenLite.to('.contact__content', 0.75, {
				opacity: 1,
			});
		} else if (scrollD < showContactInfo) {
			TweenLite.to('.contact__content', 0.75, {
				opacity: 0,
			});
		}
	});
});
