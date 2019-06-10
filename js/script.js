'use strict'

var name = prompt('Write your name');
if(name == 'null'){
  name = prompt('Write your name');
  alert('Hello ' + name);
} else {
  alert('Hello ' + name);
}
;

jQuery('#name').append(name);

jQuery('button, a').on('click', function(){
    alert('in developing');

});

jQuery(function($){

    $(document).ready(function(){
        $('.slickslider').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
          });
    });
});