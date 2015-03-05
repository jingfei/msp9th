var navH;
$(document).ready( function() {
	$("#buttonCircle").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: 0 }, 1000);
		$("#mobile #nav ul").hide();
	});
	$("#buttonH").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: 0 }, 1000);
		$("#mobile #nav ul").hide();
	});
	$("#buttonI").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: $("#intro").offset().top-navH }, 1000);
		$("#mobile #nav ul").hide();
	});
	$("#buttonA").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: $("#apply").offset().top-navH }, 1000);
		$("#nav ul li").removeAttr("id");
		$("#buttonA").parent().attr("id","active");
		$("#mobile #nav ul").hide();
	});
	$("#buttonL").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: $("#lecture").offset().top-navH}, 1000);
		$("#nav ul li").removeAttr("id");
		$("#buttonL").parent().attr("id","active");
		$("#mobile #nav ul").hide();
	});
	$("#buttonG").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: $("#group").offset().top-navH }, 1000);
		$("#nav ul li").removeAttr("id");
		$("#buttonG").parent().attr("id","active");
		$("#mobile #nav ul").hide();
	});
	$("#buttonQ").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: $("#qa").offset().top-navH }, 1000);
		$("#nav ul li").removeAttr("id");
		$("#buttonQ").parent().attr("id","active");
		$("#mobile #nav ul").hide();
	});
	$(window).scroll( function(){
		var t=document.documentElement.scrollTop || document.body.scrollTop;
		var NavTop=30;
		var INTRO=$("#intro").offset().top-navH;
		var APPLY=$("#apply").offset().top-navH;
		var LECTURE=$("#lecture").offset().top-navH;
		var GROUP=$("#group").offset().top-navH;
		var QA=$("#qa").offset().top-navH;
		if(t+1>=QA){
			$("#nav ul li").removeAttr("id");
			$("#buttonQ").parent().attr("id","active");
		}
		else if(t+1>=GROUP){
			$("#nav ul li").removeAttr("id");
			$("#buttonG").parent().attr("id","active");
		}
		else if(t+1>=LECTURE){
			$("#nav ul li").removeAttr("id");
			$("#buttonL").parent().attr("id","active");
		}
		else if(t+1>=APPLY){
			$("#nav ul li").removeAttr("id");
			$("#buttonA").parent().attr("id","active");
		}
		else if(t+1>=INTRO){
			$("#nav ul li").removeAttr("id");
			$("#buttonI").parent().attr("id","active");
		}
		else{
			$("#nav ul li").removeAttr("id");
			$("#buttonH").parent().attr("id","active");
		}
		if(t>=NavTop){
			$("#navigation").attr("class", "float-scroll");
			$("#fbicon").fadeIn();
			$("#mspStar").fadeIn();
			$("#home video").get(0).pause();
		}
		else{
			$("#navigation").attr("class", "no-scroll");
			$("#fbicon").fadeOut("fast");
			$("#mspStar").fadeOut("fast");
			$("#home video").get(0).play();
		}
	});
	$("#mobileMenu").on("click",function(){
		if($("#nav-ul").css('display')=='none')
			$("#nav-ul").show(500);
		else
			$("#nav ul").hide();
	});

	if($(window).width()<1200){
		$("#navigation").attr("class","float-scroll");
		$("#navigation").attr("id","mobile");
		$("#nav-ul").append('<li><a href="https://www.facebook.com/MSPTaiwan" target="_blank">粉絲專頁</a></li>');
	}

});

$(window).load(function(){
	$("#home").css("height", ($(window).height()-70)+"px");
	$("#loader").slideUp("slow",function(){
		$("body>div:not(#loader):not(#mask)").fadeIn(2000);
		navH=$("#navigation").height();
	});
});

