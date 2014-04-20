$(document).ready(function() {
    $("._project-pub-link").click(function() {
        var dropdown = $(this).next(".dropdown-pub-links"),
            dropdown_span = dropdown.children("span"),
            dropdown_div = dropdown.children("div"),
            arrow = $(this).children(".fa-angle-down"),
            label = $(this).children("span");
        if(dropdown.hasClass("open")) {
            label.text("Expand publications");
            $.rotate(0, arrow);
            dropdown.removeClass("open").animate({
                height: "0px"
            }, 200, function() {
            });
            dropdown_span.animate({
                padding: "0px 10px"
            }, 200, function() {
            });
            dropdown_div.animate({
                padding: "0px 10px"
            }, 200, function() {
            });
        } else {
            label.text("Hide publications");
            $.rotate(180, arrow);
            dropdown.addClass("open").animate({
                height: "314px"
            }, 200, function() {
            });
            dropdown_span.animate({
                padding: "10px"
            }, 200, function() {
            });
            dropdown_div.animate({
                padding: "10px"
            }, 200, function() {
            });
        }
    });
});