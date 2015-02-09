$(document).ready(function () {
    $(".person > article").click(function () {
        $('body').css({'overflow' : 'hidden'});
        $(document).bind('scroll', function () {
            window.scrollTo(0, 0);
        });
        
        //var height = $("html").height();
        //var width = $("html").width();
        //$("#mask").css({"width" : width, "height" : height});
        
        var group = $(this).siblings("#persongroup").html();
        var school = $(this).siblings("#personschool").html();
        var name = $(this).siblings("#personname").html();
        var skill = $(this).siblings("#personskill").html();
        var say = $(this).siblings("#personsay").html();
        var img = $(this).siblings("img").attr("src");
        $("#mspgroup").html(group);
        $("#mspschool").html(school);
        $("#mspname").html(name);
        $("#mspskill").html(skill);
        $("#mspsay").html(say);
        $("#mspdetail #mspimage").attr("src", img);
        
        $("#mspdetail").fadeIn(200);
        $("#mask").fadeIn(200);
        $("#whitemask").fadeIn(200);
        $("#bluemask").fadeIn(200);
    });
    
    $("#mask").click(function () {
        $(document).unbind('scroll');
        $('body').css({'overflow' : 'visible'});
        
        $("#mspdetail").fadeOut(200);
        $("#mask").fadeOut(200);
        $("#whitemask").fadeOut(200);
        $("#bluemask").fadeOut(200);
    });
    
    $("#exit").click(function () {
        $(document).unbind('scroll');
        $('body').css({'overflow' : 'visible'});
        
        $("#mspdetail").fadeOut(200);
        $("#mask").fadeOut(200);
        $("#whitemask").fadeOut(200);
        $("#bluemask").fadeOut(200);
    });
});







