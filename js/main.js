$(document).ready( function() {
	$("#buttonH").click(function() {
	    $('html, body').animate({ scrollTop: $("body").offset().top }, 2000);
		$("#nav ul li").removeAttr("id");
		$("#buttonH").parent().attr("id","active");
	});
	$("#buttonI").click(function() {
	    $('html, body').animate({ scrollTop: $("#intro").offset().top }, 2000);
		$("#nav ul li").removeAttr("id");
		$("#buttonI").parent().attr("id","active");
	});
	$("#buttonA").click(function() {
	    $('html, body').animate({ scrollTop: $("#apply").offset().top }, 2000);
		$("#nav ul li").removeAttr("id");
		$("#buttonA").parent().attr("id","active");
	});
	$("#buttonL").click(function() {
	    $('html, body').animate({ scrollTop: $("#lecture").offset().top }, 2000);
		$("#nav ul li").removeAttr("id");
		$("#buttonL").parent().attr("id","active");
	});
	$("#buttonG").click(function() {
	    $('html, body').animate({ scrollTop: $("#group").offset().top }, 2000);
		$("#nav ul li").removeAttr("id");
		$("#buttonG").parent().attr("id","active");
	});
	$("#buttonQ").click(function() {
	    $('html, body').animate({ scrollTop: $("#qa").offset().top }, 2000);
		$("#nav ul li").removeAttr("id");
		$("#buttonQ").parent().attr("id","active");
	});
});

window.onscroll = function(){
	var t=document.documentElement.scrollTop || document.body.scrollTop;
	var NavTop=30;
	var INTRO=$("#intro").offset().top;
	var APPLY=$("#apply").offset().top;
	var LECTURE=$("#lecture").offset().top;
	var GROUP=$("#group").offset().top;
	var QA=$("#qa").offset().top;
	if(t>=QA){
		$("#nav ul li").removeAttr("id");
		$("#buttonQ").parent().attr("id","active");
	}
	else if(t>=GROUP){
		$("#nav ul li").removeAttr("id");
		$("#buttonG").parent().attr("id","active");
	}
	else if(t>=LECTURE){
		$("#nav ul li").removeAttr("id");
		$("#buttonL").parent().attr("id","active");
	}
	else if(t>=APPLY){
		$("#nav ul li").removeAttr("id");
		$("#buttonA").parent().attr("id","active");
	}
	else if(t>=INTRO){
		$("#nav ul li").removeAttr("id");
		$("#buttonI").parent().attr("id","active");
	}
	else if(t>=NavTop){
		$("#navigation").addClass("float-scroll");
		$("#nav ul li").removeAttr("id");
		$("#buttonH").parent().attr("id","active");
	}
	else{
		$("#navigation").attr("class", "");
	}
}

