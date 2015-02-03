$(document).ready(function () {
    $("article").click(function () {
        $('body').css({'overflow' : 'hidden'});
        $(document).bind('scroll', function () {
            window.scrollTo(0, 0);
        });
        var width = $(window).width();
        var height = $(window).height();
        $("#mask table").css({"width" : width, "height" : height});
        $("#mask").show();
        
    });
    
    $("#mask").click(function () {
        $("#mask").hide();
        $(document).unbind('scroll');
        $('body').css({'overflow' : 'visible'});
    });
});







