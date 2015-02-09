var id=1;
$(document).ready( function() {
	var tmp;
	$("#gI1").hover(
		function(){
			$("#gI1").attr("src","img/group_10.png");
		},
		function(){
			id==1 ? $("#gI1").attr("src","img/group_10.png") : $("#gI1").attr("src","img/group_11.png");
		}
	);
	$("#gI2").hover(
		function(){
			tmp = $("#gI2").attr("src");
			$("#gI2").attr("src","img/group_20.png");
		},
		function(){
			id==2 ? $("#gI2").attr("src","img/group_20.png") : $("#gI2").attr("src","img/group_21.png");
		}
	);
	$("#gI3").hover(
		function(){
			tmp = $("#gI3").attr("src");
			$("#gI3").attr("src","img/group_30.png");
		},
		function(){
			id==3 ? $("#gI3").attr("src","img/group_30.png") : $("#gI3").attr("src","img/group_31.png");
		}
	);
	$("#gI1").on("click",function(){id=1; ShowGroup(1);});
	$("#gI2").on("click",function(){id=2; ShowGroup(2);});
	$("#gI3").on("click",function(){id=3; ShowGroup(3);});
	$('.person').hoverdir();
	$("#gM1").find('.person').css("display","inline-block");
});

function getGroup(){return id;}

function ShowGroup(id){
	if(id===1){
		$("#gI1").attr("src","img/group_10.png");
		$("#gI2").attr("src","img/group_21.png");
		$("#gI3").attr("src","img/group_31.png");
		$("#member").find(".person").each(function(){
			$(this).delay(50).hide(400);
		});
		$("#gM2").delay(450).hide(0);
		$("#gM3").delay(450).hide(0);
		$("#gM1").delay(400).show(0);
		$("#gM1").delay(450).find('.person').each(function(){
			$(this).show("slow");
			$(this).css("display","inline-block");
		});
	}
	else if(id==2){
		$("#gI1").attr("src","img/group_11.png");
		$("#gI2").attr("src","img/group_20.png");
		$("#gI3").attr("src","img/group_31.png");
		$("#member").find(".person").each(function(){
			$(this).delay(50).fadeOut(400);
		});
		$("#gM1").delay(450).hide(0);
		$("#gM3").delay(450).hide(0);
		$("#gM2").delay(400).show(0);
		$("#gM2").delay(450).find('.person').each(function(){
			$(this).fadeIn("slow");
			$(this).css("display","inline-block");
		});
	}
	else if(id==3){
		$("#gI1").attr("src","img/group_11.png");
		$("#gI2").attr("src","img/group_21.png");
		$("#gI3").attr("src","img/group_30.png");
		$("#member").find(".person").each(function(){
			$(this).delay(50).slideUp(400);
		});
		$("#gM1").delay(450).hide(0);
		$("#gM2").delay(450).hide(0);
		$("#gM3").delay(400).show(0);
		$("#gM3").delay(450).find('.person').each(function(){
			$(this).slideDown("slow");
			$(this).css("display","inline-block");
		});
	}
}

