$(function(){
	/* For Splash Animation */
	var tl = new TimelineMax();
	tl.fromTo('.splash__display', 1.5, {
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
	tl.fromTo('.logo', 1, {
		opacity: 0,
		y: -100,
	},{
		opacity: 1,
		y: 0,
	},2.5);
	tl.fromTo('nav', 1, {
		opacity: 0,
		x: 200,
	},{
		opacity: 1,
		x: 0,
	},3.5);
	$('.nav-item--projects').click(function() {
		$('body').addClass('show--projects');
		var projectsTl = new TimelineMax();
		projectsTl.fromTo('.projects', 0.6, {
			opacity: 0,
			y: 100,
		}, {
			opacity: 1,
			y: 0,
		});
		projectsTl.staggerTo('.projects__item, .title--project', 0.75, {
			opacity: 1,
		}, 0.5);
	});
	$('.projects .close').click(function() {
		TweenMax.to('.projects', 0.2, {
			opacity: 0,
			y: 100,
		});
		TweenMax.to('.projects__item, .title--project', 0.1, {
			opacity: 0,
		});
		$('body').removeClass('show--projects');
	});
});
