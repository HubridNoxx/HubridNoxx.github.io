$(document).ready(function() {
    $(function(){
     var shrinkHeader = 50;
      $(window).scroll(function() {
        var scroll = getCurrentScroll();
          if (scroll >= shrinkHeader) {
               $('.header-frame').addClass('shrink');
              
            }
            else {
                $('.header-frame').removeClass('shrink');
                
            }
      });
    function getCurrentScroll() {
        return window.pageYOffset;
        }
    });
});