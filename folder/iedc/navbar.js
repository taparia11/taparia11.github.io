$("#header__button").click(function() {
    $(this).toggleClass("hamburger--open");
    if ($(".kz-nav-menu").css("display") == "block") {
        $("body").removeClass("stop-scrolling");
        $(".kz-nav-menu").fadeOut(400);
        $("body").unbind("touchmove");
    } else {
        $("body").addClass("stop-scrolling");
        $(".kz-nav-menu").fadeIn(400);
        $("body").bind("touchmove", function(e) {
            e.preventDefault();
        });
    }
});

function updateNavImage(index) {
    const images = ["nav1.jpg", "nav2.jpg", "nav3.jpg", "nav4.jpg", "nav5.jpg", "nav6.jpeg","nav7.jpg","nav22.png","nav8.png"];
    var val =
        "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.8)),url(res/img/" +
        images[index] +
        ")";
    if (index == -1) {
        val = "rgba(255,255,255,1)";
    }
    $(".kz-nav-menu").css("background", val);
}