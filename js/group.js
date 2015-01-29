$(document).ready( function() {
	$("#gI1").hover(function(){ShowGroup(1);});
	$("#gI2").hover(function(){ShowGroup(2);});
	$("#gI3").hover(function(){ShowGroup(3);});
	$('.person').hoverdir();
});

function ShowGroup(id){
	if(id===1){
		$("#gI1").attr("src","img/group_10.png");
		$("#gI2").attr("src","img/group_21.png");
		$("#gI3").attr("src","img/group_31.png");
		$("#gM1").show();
		$("#gM2").hide();
		$("#gM3").hide();
	}
	else if(id==2){
		$("#gI1").attr("src","img/group_11.png");
		$("#gI2").attr("src","img/group_20.png");
		$("#gI3").attr("src","img/group_31.png");
		$("#gM2").show();
		$("#gM1").hide();
		$("#gM3").hide();
	}
	else if(id==3){
		$("#gI1").attr("src","img/group_11.png");
		$("#gI2").attr("src","img/group_21.png");
		$("#gI3").attr("src","img/group_30.png");
		$("#gM3").show();
		$("#gM2").hide();
		$("#gM1").hide();
	}
}

