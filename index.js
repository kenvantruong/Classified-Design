var navLinks = $('nav ul li a[href^="#"]');

navLinks.on('click', activeNavLink);

function activeNavLink(e) {
  e.preventDefault();

  navLinks.removeClass("selected");
  $(this).addClass("selected");


  var link = $(this).attr('href');

  var target = $(link).offset().top - 0;
//   console.log(target);

  $('html, body').animate({ scrollTop: target }, 500, function () {
      window.location.hash = link;
  });

}

$(window).scroll(function(){
    var position = $(this).scrollTop();
    navLinks.each(function(){
        var anchorId = $(this).attr('href');
        var target = $(anchorId).offset().top - 1 ;

      if(position>=target){
            navLinks.removeClass("selected")
            $(this).addClass('selected');
        }
    });
});

var rellax = new Rellax('.rellax', {
    speed: -3,
    center: true,
    round: true,
    vertical: true,
    horizontal: false
  });