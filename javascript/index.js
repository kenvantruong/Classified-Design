//SCROLL FUNCTION
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });













(function() {  
  var $point_arr, $points, $progress, $trigger, active, max, tracker, val;

  $trigger   = $('.trigger').first();
  $points    = $('.progress-points').first();
  $point_arr = $('.progress-point');
  $progress  = $('.progress').first();

  val     = +$points.data('current') - 1;
  max     = $point_arr.length - 1;
  tracker = active = 0;

  function activate(index) {
    if (index !== active) {
      active       = index;
      var $_active = $point_arr.eq(active)
      
      $point_arr
        .removeClass('completed active')
        .slice(0, active).addClass('completed')
      
      $_active.addClass('active');
      
      return $progress.css('width', (index / max * 100) + "%");
    }
  };

  $points.on('click', 'li', function(event) {
    var _index;
    _index  = $point_arr.index(this);
    tracker = _index === 0 ? 1 : _index === val ? 0 : tracker;
    
    return activate(_index);
  });

  $trigger.on('click', function() {
    return activate(tracker++ % 2 === 0 ? 0 : val);
  });

  setTimeout((function() {
    return activate(val);
  }), 1000);

}).call(this);






//RESPONSIVE NAVIGATION!

(function($) {
  jQuery(document).ready(function() {

    $('.mobile-nav-btn').click(function() {
    	if( $('nav').hasClass('active-nav') ) {
	      $('.mobile-nav-container').removeClass('active-nav');
	      $('.mobile-nav-btn').removeClass('active-nav');
	      $('nav').removeClass('active-nav');
    		$('.rad-menu li').removeClass('show-nav');

	      // Remove Page Crop
	      setTimeout(function(){
        $('#inner-content').removeClass('crop'); // release the "proper" crop
        $('#inner-content').height('auto'); // resets height for scolling
      	}, 300);

    	} else {
      	var windowHeight = $(window).height();
      	$('#inner-content').height(windowHeight); // sets height to cut page to visible window size
    		$('#inner-content').addClass('crop'); // "proper" crop
	      $('.mobile-nav-btn').addClass('active-nav');
	      $('.mobile-nav-container').addClass('active-nav');
	      $('nav').addClass('active-nav');
	      
        
	      // Show me the links
	      var timer = 0;
	      $.each($('.rad-menu li'), function (i, s) {
	        timer = 100 * i;
	        setTimeout(function () {
	          $(s).addClass('show-nav');
	        }, timer); // show menu items on timer
	      });
      	
	    }
    });
    
    $( window ).resize(function() {
			if ($(window).width() > 700) {
       $('.mobile-nav-container').removeClass('active-nav');
	      $('.mobile-nav-btn').removeClass('active-nav');
	      $('nav').removeClass('active-nav');
    		$('nav li').removeClass('show-nav');

	      // Remove Page Crop
	      setTimeout(function(){
        $('#inner-content').removeClass('crop'); // release the "proper" crop
        $('#inner-content').height('auto'); // resets height for scolling
      	}, 300);
    	}
		});

  });

}(jQuery));




