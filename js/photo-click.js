$(document).ready(function () {
    $(".person > article").click(function () {
        $('body').css({'overflow' : 'hidden'});
        $(document).bind('scroll', function () {
            window.scrollTo(0, 0);
        });
        var group = getGroup();
		if(group==1) group="美宣組";
		else if(group==2) group="企劃組";
		else if(group==3)group="技術組";
        var school = $(this).find("span").html();
        var name = $(this).find("h3").html();
        var skill = $(this).siblings(".personskill").html();
        var say = $(this).siblings(".personsay").html();
        var img = $(this).siblings("img").attr("src");
        $("#mspgroup").html(group);
        $("#mspschool").html(school);
        $("#mspname").html(name);
        $("#mspskill").html(skill);
        $("#mspsay").html(say);
        $("#mspdetail #mspimage").attr("src", img);
        
        $("#mask").fadeIn(200).css('display', 'table');
    });
    
    $("#mask,#exit").on("click",function () {
        $(document).unbind('scroll');
        $('body').css({'overflow' : 'visible'});
        
        $("#mask").fadeOut(200);
    });
});

