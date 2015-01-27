$(document).ready( function() {
	$("#iI1").hover(function(){ShowIntro(1);});
	$("#iI2").hover(function(){ShowIntro(2);});
	$("#iI3").hover(function(){ShowIntro(3);});
	$("#iT1").hover(function(){ShowIntro(1);});
	$("#iT2").hover(function(){ShowIntro(2);});
	$("#iT3").hover(function(){ShowIntro(3);});
});

function ShowIntro(id){
	if(id===1){
		$("#tr02").animate({"left":"-295px"},300);
		$("#intro1").show("slow");
		$("#intro2").hide();
		$("#intro3").hide();
	}
	else if(id===2){
		$("#tr02").animate({"left":"0"},300);
		$("#intro2").slideDown("slow");
		$("#intro1").hide();
		$("#intro3").hide();
	}
	else if(id===3){
		$("#tr02").animate({"left":"295px"},300);
		$("#intro3").show("slide",{direction:"right"},"slow");
		$("#intro2").hide();
		$("#intro1").hide();
	}
}

