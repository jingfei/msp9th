$(document).ready(function () {
    $(".person").on("click",function () {
        $('body').css({'overflow' : 'hidden'});
		var ScrollT=$(window).scrollTop();
		var ScrollL=$(window).scrollLeft();
        $(document).bind('scroll', function () {
            window.scrollTo(ScrollL, ScrollT);
        });
        var group = getGroup();
		if(group==1) group="美宣組";
		else if(group==2) group="企劃組";
		else if(group==3)group="技術組";
        var school = $(this).find(".personschool").html();
        var name = $(this).find("h3").html();
        var skill = $(this).find(".personskill").html();
        var say = $(this).find(".personsay").html();
        var img = $(this).find("img").attr("src");
        $("#mspgroup").html(group);
        $("#mspschool").html(school);
        $("#mspname").html(name);
        $("#mspskill").html(skill);
        $("#mspsay").html(say);
        $("#mspdetail #mspimage").attr("src", img);
        
        $("#mask").fadeIn(200).css('display', 'table');
    });
    
    $("#maskHelper,#exit").on("click",function () {
		ExitMask();
    }).children().on("click",function(e){
		if($(this).attr("id")!="exit")
			return false;
	});
});

$(document).keyup(function(e){
	if(e.keyCode==13 || e.keyCode==27) ExitMask(); //press enter || esc
});

function ExitMask(){
	$(document).unbind('scroll');
	$('body').css({'overflow' : 'visible'});
	$("#mask").fadeOut(200);
}
