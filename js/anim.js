$(window).on("load resize scroll", function () {
    $(".bg-static").each(function () {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var leftPosition = windowTop - elementTop;
        var bottomPosition = (elementTop - windowTop);
        $(this)
            .find(".bg-move")
            .css({
                left: leftPosition,
                bottom: bottomPosition
            });
        console.log(bottomPosition)
        console.log(leftPosition)

    });
});
