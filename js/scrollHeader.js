$(window).on("scroll", function(){
    if($(this).scrollTop() > 600){
        $(".desktop-nav").addClass("scrolledHeader");
        $(".mobile-nav").addClass("scrolledHeader");
    }
    else{
        $(".desktop-nav").removeClass("scrolledHeader");
        $(".mobile-nav").removeClass("scrolledHeader");
    }
});