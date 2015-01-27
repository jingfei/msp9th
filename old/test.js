$(document).ready( function() {
	$("img.circle").hover(
	  function(){
		$(this).attr("src", "images/circle-gray.png");
	},function(){
		if($(this).attr("class").search("ActiveCircle")==-1)
			$(this).attr("src", "images/circle-black.png");
	});
	$("#c1").click(function(){
		$(".gates").hide("slow",function(){
			$("#p1").show();
			$("#c1").attr("src", "images/circle-gray.png");
		});
		$("img.circle").each(function(){
			if( $(this).attr("id")==="c1" ){
				$(this).addClass("ActiveCircle");
			}
			else{
				$(this).attr("src","images/circle-black.png");
				$(this).attr("class","circle");
			}
		});
	});
	$("#c2").click(function(){
		$(".gates").hide("slow",function(){
			$("#p2").show();
			$("#c2").attr("src", "images/circle-gray.png");
		});
		$("img.circle").each(function(){
			if( $(this).attr("id")==="c2" ){
				$(this).addClass("ActiveCircle");
			}
			else{
				$(this).attr("src","images/circle-black.png");
				$(this).attr("class","circle");
			}
		});
	});
	$("#c3").click(function(){
		$(".gates").hide("slow",function(){
			$("#p3").show();
			$("#c3").attr("src", "images/circle-gray.png");
		});
		$("img.circle").each(function(){
			if( $(this).attr("id")==="c3" ){
				$(this).addClass("ActiveCircle");
			}
			else{
				$(this).attr("src","images/circle-black.png");
				$(this).attr("class","circle");
			}
		});
	});
	var myCircle=setInterval(ChangeCircle, 3000);
});

function ChangeCircle(){
	var Now = $(".ActiveCircle").attr("id");
	if(Now==="c1"){
		$("#p1").fadeOut("slow",function(){
			$("#p2").fadeIn("slow");
			$("#c2").attr("src", "images/circle-gray.png");
		});
		$("img.circle").each(function(){
			if( $(this).attr("id")==="c2" ){
				$(this).addClass("ActiveCircle");
			}
			else{
				$(this).attr("src","images/circle-black.png");
				$(this).attr("class","circle");
			}
		});
	}
	else if(Now==="c2"){
		$("#p2").fadeOut("slow",function(){
			$("#p3").fadeIn("slow");
			$("#c3").attr("src", "images/circle-gray.png");
		});
		$("img.circle").each(function(){
			if( $(this).attr("id")==="c3" ){
				$(this).addClass("ActiveCircle");
			}
			else{
				$(this).attr("src","images/circle-black.png");
				$(this).attr("class","circle");
			}
		});
	}
	else if(Now==="c3"){
		$("#p3").fadeOut("slow",function(){
			$("#p1").fadeIn("slow");
			$("#c1").attr("src", "images/circle-gray.png");
		});
		$("img.circle").each(function(){
			if( $(this).attr("id")==="c1" ){
				$(this).addClass("ActiveCircle");
			}
			else{
				$(this).attr("src","images/circle-black.png");
				$(this).attr("class","circle");
			}
		});
	}
}

