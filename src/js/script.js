

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
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      750: {
        slidesPerView: 2,
      }
    } 
    // Navigation arrows
    
  
    // And if we need scrollbar
   
  });
const psycholog_1 = new Swiper('.psycholog_1', {
    // Optional parameters
    direction: 'horizontal',
    autoheight: true,
    loop: true,
    spaceBetween: 30,
        centeredSlides: true,
    slidesPerView: 1,
    // If we need pagination
   
    breakpoints: {
      750: {
        slidesPerView: 3,
      }
    }
})
const psycholog_2 = new Swiper('.psycholog_2', {
  // Optional parameters
  direction: 'horizontal',
  autoheight: true,
  loop: true,
  spaceBetween: 30,
      centeredSlides: true,
  slidesPerView: 1,
  // If we need pagination
 
  breakpoints: {
    750: {
      slidesPerView: 3,
    }
  }
})
const psycholog_3 = new Swiper('.psycholog_3', {
  // Optional parameters
  direction: 'horizontal',
  autoheight: true,
  loop: true,
  spaceBetween: 30,
      centeredSlides: true,
  slidesPerView: 1,
  // If we need pagination
 
  breakpoints: {
    750: {
      slidesPerView: 3,
    }
  }
})


  const nav = document.getElementsByTagName("nav")[0];


  if(window.screen.width < 750){
  nav.addEventListener("click",()=>{
    document.querySelector("nav ul").style.display = (document.querySelector("nav ul").style.display == 'none') ? "block" : "none";
    document.querySelector("nav .after").style.transform = (document.querySelector("nav ul").style.display == 'none') ? "translateX(-50%) rotate(45deg)" : "translateX(-50%) translateY(10px) rotate(225deg)"; 
  })}