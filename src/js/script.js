const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
    slidesPerView: 2,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    }
  
    // Navigation arrows
    
  
    // And if we need scrollbar
   
  });