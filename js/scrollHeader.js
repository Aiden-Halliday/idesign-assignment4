$(window).on("scroll", function(){
    if($(this).scrollTop() > 600){
        $(".desktop-nav").addClass("scrolledHeader");
    }
    else{
        $(".desktop-nav").removeClass("scrolledHeader");
    }
});