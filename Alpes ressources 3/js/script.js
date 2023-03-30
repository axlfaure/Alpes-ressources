// MENU HAMBURGER

    // OPEN - CLOSE

    const menuHamburger = document.querySelector(".menu-btn")
    const navLinks = document.querySelector(".nav-links")
     
    menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')

    });

    // TRANSFORMATION DU BOUTON //

    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
      } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
    });

// FIN MENU HAMBURGER

// COULEUR AU SCROLL

window.addEventListener("load", function () {

    let header = document.querySelector(".header");

    document.addEventListener('scroll', function () {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        }

        else if (window.scrollY < 500){
            header.classList.remove("scrolled");
        }

    });

});

// FIN COULEUR AU SCROLL

// PORTFOLIO

 /* Clients Slider */
 new Swiper(".clients-slider", {
  speed: 400,
  loop: true,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
  },
  breakpoints: {
      576: {
          slidesPerView: 3,
          spaceBetween: 60,
      },
      768: {
          slidesPerView: 4,
          spaceBetween: 80,
      },
      992: {
          slidesPerView: 6,
          spaceBetween: 120,
      },
  },
});

