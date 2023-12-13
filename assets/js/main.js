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
        scrollToTopBtn.classList.add('right-6')
        scrollToTopBtn.classList.remove('-right-36')
      } else {
      
        scrollToTopBtn.classList.remove('right-6')
        scrollToTopBtn.classList.add('-right-36')
      }
    }
  
    // When the user clicks on the button, scroll to the top of the document
    scrollToTopBtn.addEventListener('click', function() {
    //   scrollToTop();
    window.scrollTo({top: 0, behavior: 'smooth'});
    });
  
    
  });


// loading feature
document.addEventListener("DOMContentLoaded", function() {
  // Hide the loading container
  document.getElementById("loading-container").style.display = "none";

  // Show the map container
  document.getElementById("map-container").style.display = "block";
});


  