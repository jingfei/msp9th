$(document).ready( function() {
	var myCircle=setInterval(ChangeCircle, 3000);
});

function ChangeCircle(){
	var Now = $(".ActiveCircle").attr("id");
	if(Now==="c0"){
		$("#p0").fadeOut("slow",function(){
			$("#p1").fadeIn("slow");
			$("#c1").attr("src", "img/circle-gray.png");
		});
		$("img.circle").each(function(){
			if( $(this).attr("id")==="c1" ){
				$(this).addClass("ActiveCircle");
			}
			else{
				$(this).attr("src","img/circle-darkblue.png");
				$(this).attr("class","circle");
			}
		});
	}
	else if(Now==="c1"){
		$("#p1").fadeOut("slow",function(){
			$("#p2").fadeIn("slow");
			$("#c2").attr("src", "img/circle-gray.png");
		});
		$("img.circle").each(function(){
			if( $(this).attr("id")==="c2" ){
				$(this).addClass("ActiveCircle");
			}
			else{
				$(this).attr("src","img/circle-darkblue.png");
				$(this).attr("class","circle");
			}
		});
	}
	else if(Now==="c2"){
		$("#p2").fadeOut("slow",function(){
			$("#p3").fadeIn("slow");
			$("#c3").attr("src", "img/circle-gray.png");
		});
		$("img.circle").each(function(){
			if( $(this).attr("id")==="c3" ){
				$(this).addClass("ActiveCircle");
			}
			else{
				$(this).attr("src","img/circle-darkblue.png");
				$(this).attr("class","circle");
			}
		});
	}
	else if(Now==="c3"){
		$("#p3").fadeOut("slow",function(){
			$("#p0").fadeIn("slow");
			$("#c0").attr("src", "img/circle-gray.png");
		});
		$("img.circle").each(function(){
			if( $(this).attr("id")==="c0" ){
				$(this).addClass("ActiveCircle");
			}
			else{
				$(this).attr("src","img/circle-darkblue.png");
				$(this).attr("class","circle");
			}
		});
	}
}

