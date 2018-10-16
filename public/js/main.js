//function to hide the navbar on scroll
    let previousPos = window.pageYOffset;
    window.onscroll = function() {
        
        let currentPos = window.pageYOffset;
        if(previousPos > currentPos) {
            document.querySelector('.nav-ul').style.top = "-20px";
        } else {
            document.querySelector('.nav-ul').style.top = "-100px";
        }
        previousPos = currentPos
    }


$(document).ready(function() {
    //hamburger menu class-toggle function
    $('.nav-toggle').click(function() {
        $('.nav-ul').toggleClass('nav-open', 500);
        $(this).toggleClass('open');   
    });
    $(window).scroll(function() {
        parallax();
        parralax2();
    });

    //parallax effect
    function parallax() {
        let scroll = $(window).scrollTop();
        $('.parallax--bg').css('background-position', 'center ' + (scroll*0.45) + 'px');
    }
    //parallax for second background image
    function parralax2() {
        let scroll = $(window).scrollTop();
        $('.parallax--2').css('background-position', 'center ' + (scroll*0.03 -50) + 'px');
    }
});


//function for sliding images
function debounce(func, wait = 40, immediate = true) { //hace que el evento scroll no se dispare demasiadas veces
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const sliderImages = document.querySelectorAll('.slide-in');
  function checkSlide(e) { // corre cuando el usuario hace scroll
    sliderImages.forEach(image => {
      //window.scrollY cuenta los pixeles que se han bajado al hacer scroll

      //mitad de la imagen
      const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
      //parte de abajo de la imagen
      const imageBottom = image.offsetTop + image.height;
      const isHalfShown = slideInAt > image.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if(isHalfShown && isNotScrolledPast) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));
