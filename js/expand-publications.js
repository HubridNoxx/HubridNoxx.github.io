$(document).ready(function() {
    $("._project-pub-link").click(function() {
        var dropdown = $(this).next(".dropdown-pub-links"),
            arrow = $(this).children(".fa-angle-down"),
            label = $(this).children("span");
        if(dropdown.hasClass("open")) {
            label.text("Expand publications");
            $.rotate(0, arrow);
            dropdown.removeClass("open").animate({
                height: "0px",
                padding: "0 10px 0 10px"
            }, 200, function() {
            });
        } else {
            label.text("Hide publications");
            $.rotate(180, arrow);
            dropdown.addClass("open").animate({
                height: "314px",
                padding: "10px"
            }, 200, function() {
            // Animation complete.
            });
        }
    });
});