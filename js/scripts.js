 $(document).ready(function() {
     $(document).keydown(function(e) {
         if (e.keyCode == 38 || e.keyCode == 32) {
             $(".man").fadeIn()
                 .animate({
                     bottom: 125
                 }, 1000)
                 .animate({
                     bottom: 0
                 }, 1000);
         }
     });
 });
