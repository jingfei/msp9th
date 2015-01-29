$(document).ready( function() {
	var navH=$("#main").offset().top+30;
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
	    $('html, body').animate({ scrollTop: $("#lecture").offset().top }, 1000);
		$("#nav ul li").removeAttr("id");
		$("#buttonL").parent().attr("id","active");
		$("#mobile #nav ul").hide();
	});
	$("#buttonG").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: $("#group").offset().top+$("#bg3").height()*0.1 }, 1000);
		$("#nav ul li").removeAttr("id");
		$("#buttonG").parent().attr("id","active");
		$("#mobile #nav ul").hide();
	});
	$("#buttonQ").on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
	    $('html, body').animate({ scrollTop: $("#qa").offset().top }, 1000);
		$("#nav ul li").removeAttr("id");
		$("#buttonQ").parent().attr("id","active");
		$("#mobile #nav ul").hide();
	});
	$(window).scroll( function(){
		var t=document.documentElement.scrollTop || document.body.scrollTop;
		var NavTop=30;
		var INTRO=$("#intro").offset().top-navH;
		var APPLY=$("#apply").offset().top-navH;
		var LECTURE=$("#lecture").offset().top;
		var GROUP=$("#group").offset().top+$("#bg3").height()*0.1;
		var QA=$("#qa").offset().top;
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
		}
		else{
			$("#navigation").attr("class", "no-scroll");
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
	}

});

