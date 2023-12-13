document.addEventListener('DOMContentLoaded', function() {

    // Get the button
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
    // show the button
    window.onscroll = function() {
      scrollFunction();
    };
  
    function scrollFunction() {
    let heightScreen = window.innerHeight
      if (document.body.scrollTop > heightScreen || document.documentElement.scrollTop > heightScreen) {
        scrollToTopBtn.classList.add('right-2')
        scrollToTopBtn.classList.remove('-right-36')
      } else {
      
        scrollToTopBtn.classList.remove('right-2')
        scrollToTopBtn.classList.add('-right-36')
      }
    }
  
    // When the user clicks on the button, scroll to the top of the document
    scrollToTopBtn.addEventListener('click', function() {
    //   scrollToTop();
    window.scrollTo({top: 0, behavior: 'smooth'});
    });
  
    function scrollToTop() {
      var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
      }
    }
  });
  