$(document).ready( function() {
	var tmp,id=1;
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

function ShowGroup(id){
	var i=0;
	var member=$("#member").find('.person');
	if(id===1){
		$("#gI1").attr("src","img/group_10.png");
		$("#gI2").attr("src","img/group_21.png");
		$("#gI3").attr("src","img/group_31.png");
		member.each(function(){
			$(this).delay(50).hide(400);
			++i;
			if(i==member.length){
				$("#gM2").delay(400).hide();
				$("#gM3").delay(400).hide();
				$("#gM1").delay(400).show();
				$("#gM1").find('.person').each(function(){
					$(this).show("slow");
					$(this).css("display","inline-block");
				});
			}
		});
	}
	else if(id==2){
		$("#gI1").attr("src","img/group_11.png");
		$("#gI2").attr("src","img/group_20.png");
		$("#gI3").attr("src","img/group_31.png");
		member.each(function(){
			$(this).delay(50).slideUp();
			++i;
			if(i==member.length){
				$("#gM1").delay(400).hide();
				$("#gM3").delay(400).hide();
				$("#gM2").delay(400).show();
				$("#gM2").find('.person').each(function(){
					$(this).slideDown("slow");
					$(this).css("display","inline-block");
				});
			}
		});
	}
	else if(id==3){
		$("#gI1").attr("src","img/group_11.png");
		$("#gI2").attr("src","img/group_21.png");
		$("#gI3").attr("src","img/group_30.png");
		member.each(function(){
			$(this).delay(50).fadeOut();
			++i;
			if(i==member.length){
				$("#gM1").hide();
				$("#gM2").hide();
				$("#gM3").show();
				$("#gM3").find('.person').each(function(){
					$(this).fadeIn("slow");
					$(this).css("display","inline-block");
				});
			}
		});
	}
}

