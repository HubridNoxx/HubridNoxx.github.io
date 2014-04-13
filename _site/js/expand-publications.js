$(document).ready(function() {
    $("._project-pub-link").click(function() {
        var dropdown = $(this).next(".dropdown-pub-links"),
            arrow = $(this).children(".fa-angle-down");
        if(dropdown.hasClass("open")) {
            $.rotate(0, arrow);
            $(this).html("<i class='fa fa-file-text-o'></i>Expand publications<i class='fa fa-angle-down'></i>");
            dropdown.removeClass("open").animate({
                height: "0px",
                padding: "0 10px 0 10px"
            }, 200, function() {
            });
        } else {
            $.rotate(180, arrow);
            $(this).html("<i class='fa fa-file-text-o'></i>Hide publications<i class='fa fa-angle-down'></i>");
            dropdown.addClass("open").animate({
                height: "314px",
                padding: "10px"
            }, 200, function() {
            // Animation complete.
            });
        }
    });
});