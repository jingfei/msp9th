var navH, bg1Top;
var isPlay = false;
var v = document.createElement('video');
if($(window).width()>800 && v.canPlayType && v.canPlayType('video/mp4').replace(/no/, '')) 
	isPlay = true;
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
			if(isPlay) $("#mspStar").fadeIn();
		}
		else{
			$("#navigation").attr("class", "no-scroll");
			$("#fbicon").fadeOut("fast");
			if(isPlay) $("#mspStar").fadeOut("fast");
		}
		if(isPlay){
			if(t>=bg1Top)
				$("#BigVideo").get(0).pause();
			else
				$("#BigVideo").get(0).play();
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

$("#BigIMG").load(function(){
	$("#loader").slideUp("slow",function(){
		$("body>div:not(#loader):not(#mask)").fadeIn(2000);
		var homeH=0, bg1H=$("#bg1").height();
		var Video = document.getElementById("BigVideo");
		if(Video.readyState != 4 || !isPlay){
			isPlay=false;
			$("#BigVideo").hide();
			$("#BigVideo").get(0).pause();
			$("#homeBack").hide();
			homeH=$("#BigIMG").height();
			$("#mspStar").show();
		}
		else{
			$("#BigIMG").hide();
			homeH=$("#BigVideo").height();
		}
		/* change home css height */
		$("#home").css("height", (bg1H/2 + homeH)+"px");
		$("#homeBack").css("height", homeH+"px");
		$("#bg1").css("top", (homeH - bg1H/2)+"px");
		$("#homeText").css("top", (homeH/2 - $("#homeText").height())+"px");
		/**************************/
		navH=$("#navigation").height();
		bg1Top=$("#bg1").offset().top;
	});
});

