$(document).ready(function() {

  /*  wrap images inside an A link... */

  $(".post-content > p > img").each(function() {
    var $this = $(this);
    var css = $this.attr('class');
    if (css != 'large-image') {
        var src = $this.attr('src');
        var alt = $this.attr('alt');
        $this.addClass('image');
        var a = $('<a/>').attr('href', src).attr('title', alt).addClass('image-link');
        $this.wrap(a);
    } 
  });

  /* trigger Popup */

  $('.image-link').magnificPopup({    
    type:'image',
    closeOnContentClick: true,
    verticalFit: true
  });

  /* show edit icons */

if (document.documentElement.clientWidth > 600) {

  var EditLink = $('.edit-link');
  var SlideshowLink = $('.slideshow-link');

  $(window).scroll(function () {
      var $this = $(this);
      if($this.scrollTop() > 200) {
          EditLink.fadeIn();
          SlideshowLink.fadeIn();
      }
      else {
          EditLink.fadeOut();
          SlideshowLink.fadeOut();
      }
  });

}

  

}); // document ready

