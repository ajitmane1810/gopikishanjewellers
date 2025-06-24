document.addEventListener("DOMContentLoaded", function () {
  // Feather icons init
  feather.replace();



  const openBtn = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('menu-close');
  const menu = document.getElementById('mobile-menu');

  openBtn.addEventListener('click', () => {
    menu.classList.remove('-translate-x-full');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.add('-translate-x-full');
  });

});

// headerSwiper

  const headerSwiper = new Swiper("#headerSwiper", {
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        speed: 700,
        effect: "slide",
      });



 const carousel = document.getElementById("carousel");
    const cards = carousel.querySelectorAll(".price-card");
    const cardCount = cards.length;
    const cardWidth = cards[0].offsetWidth + 24;

    // Clone cards
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      carousel.appendChild(clone);
    });

    let scrollPosition = 0;

    setInterval(() => {
      scrollPosition += cardWidth;
      carousel.scrollTo({ left: scrollPosition, behavior: "smooth" });

      // Reset to start silently when reaching the end of original + clones
      if (scrollPosition >= cardWidth * cardCount) {
        scrollPosition = 0;
        setTimeout(() => {
          carousel.scrollTo({ right: 0, behavior: "auto" });
        }, 500); // wait for smooth scroll to finish
      }
    }, 2000);



// collection swiper 

const collectionSwiper = new Swiper("#collectionSwiper", {
        slidesPerView: 2.5,
        spaceBetween: 12,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        },
      });


    // swiper script

     const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints: {
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        },
      });



      // scrollContainer
    const scrollContainer = document.getElementById("scrollContainer");

    function scrollLeft() {
      scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
    }

    function scrollRight() {
      scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
    }


    // radiant-collection

    
      const radiantswiper = new Swiper("#radiant-collection", {
        slidesPerView: 3.5,
        spaceBetween: 2,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1.3,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3.2,
          },
        },
      });
