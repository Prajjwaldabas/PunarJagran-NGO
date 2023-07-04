$(document).ready(function() {
    var slideIndex = 0;
    var slides = $('.slide');
    var dots = $('.dot');
    var prevBtn = $('.prev-btn');
    var nextBtn = $('.next-btn');
  
    function showSlide(index) {
      // Remove active classes from all slides and dots
      slides.removeClass('active');
      dots.removeClass('active');
  
      // Add active class to the current slide and dot
      slides.eq(index).addClass('active');
      dots.eq(index).addClass('active');
    }
  
    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }
  
    function prevSlide() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide(slideIndex);
    }
  
    function startSlider() {
      setInterval(nextSlide, 6000); // Change slide every 6 seconds (adjust as needed)
    }
  
    // Show slide on dot click
    dots.on('click', function() {
      var dotIndex = $(this).index();
      slideIndex = dotIndex;
      showSlide(slideIndex);
    });
  
    // Show next slide on next button click
    nextBtn.on('click', function() {
      nextSlide();
    });
  
    // Show previous slide on previous button click
    prevBtn.on('click', function() {
      prevSlide();
    });
  
    // Show initial slide and start the slider
    showSlide(slideIndex);
    startSlider();
  });
  