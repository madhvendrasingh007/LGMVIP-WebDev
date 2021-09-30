$("#video_projects .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  jQuery(function ($) {
    // Google Maps setup
    var googlemap = new google.maps.Map(document.getElementById("googlemap"), {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
  });
  
