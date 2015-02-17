var Now=1;
$(document).ready( function() {
	$("#iI1").hover(function(e){ShowIntro(1,e);});
	$("#iI2").hover(function(e){ShowIntro(2,e);});
	$("#iI3").hover(function(e){ShowIntro(3,e);});
	$("#iT1").hover(function(e){ShowIntro(1,e);});
	$("#iT2").hover(function(e){ShowIntro(2,e);});
	$("#iT3").hover(function(e){ShowIntro(3,e);});
		$('.first').circleProgress({
			value: 0.75,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(75 * progress) + '<i>%</i>');
		});
		$('.second').circleProgress({
			value: 0.8,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(80 * progress) + '<i>%</i>');
		});
		$('.third').circleProgress({
			value: 0.65,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(65 * progress) + '<i>%</i>');
		});
		$('.fourth').circleProgress({
			value: 0.85,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(85 * progress) + '<i>%</i>');
		});
});

function ShowIntro(id, event){
	event.stopPropagation();
	if(id===1){
		if(Now==1) return;
		Now=1;
		$("#tr02").animate({"left":"-253px"},300);
		$("#intro1").show("slow");
		$("#intro2").hide();
		$("#intro3").hide();
		$("#cT1").html("Brainstorming ideas");
		$("#cT2").html("Brand Packaging");
		$("#cT3").html("Front-End Development");
		$("#cT4").html("UI/UX Design");
		$('.first').circleProgress({
			value: 0.75,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(75 * progress) + '<i>%</i>');
		});
		$('.second').circleProgress({
			value: 0.8,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(80 * progress) + '<i>%</i>');
		});
		$('.third').circleProgress({
			value: 0.65,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(65 * progress) + '<i>%</i>');
		});
		$('.fourth').circleProgress({
			value: 0.85,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(85 * progress) + '<i>%</i>');
		});
	}
	else if(id===2){
		if(Now==2) return;
		Now=2;
		$("#tr02").animate({"left":"0"},300);
		$("#intro2").slideDown("slow");
		$("#intro1").hide();
		$("#intro3").hide();
		$("#cT1").html("Project Management");
		$("#cT2").html("Negotiation");
		$("#cT3").html("Brand Packaging");
		$("#cT4").html("Planning and Writing");
		$('.first').circleProgress({
			value: 0.85,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(85 * progress) + '<i>%</i>');
		});
		$('.second').circleProgress({
			value: 0.85,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(85 * progress) + '<i>%</i>');
		});
		$('.third').circleProgress({
			value: 0.75,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(75 * progress) + '<i>%</i>');
		});
		$('.fourth').circleProgress({
			value: 0.9,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(90 * progress) + '<i>%</i>');
		});
	}
	else if(id===3){
		if(Now==3) return;
		Now=3;
		$("#tr02").animate({"left":"253px"},300);
		$("#intro3").show("slide",{direction:"right"},"slow");
		$("#intro2").hide();
		$("#intro1").hide();
		$("#cT1").html("Windows 8.1 development");
		$("#cT2").html("Windows Phone development");
		$("#cT3").html("Promotion");
		$("#cT4").html("Single Rate");
		$('.first').circleProgress({
			value: 0.85,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(85 * progress) + '<i>%</i>');
		});
		$('.second').circleProgress({
			value: 0.85,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(85 * progress) + '<i>%</i>');
		});
		$('.third').circleProgress({
			value: 0.7,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(70 * progress) + '<i>%</i>');
		});
		$('.fourth').circleProgress({
			value: 0.9,
			size: 150.0,
			startAngle: -Math.PI/2,
			thickness: 8,
			emptyFill: 'rgba(225,240,0,.2)',
			fill: { gradient: ['#FFEE00', '#D5E42F'] },
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circleText').html(parseInt(90 * progress) + '<i>%</i>');
		});
	}
}

