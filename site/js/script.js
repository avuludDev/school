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

  const nav = document.getElementsByTagName("nav")[0];

  if(window.screen.width < 750){
  nav.addEventListener("click",()=>{
    document.querySelector("nav ul").style.display = (document.querySelector("nav ul").style.display == 'none') ? "block" : "none";
    document.querySelector("nav .after").style.transform = (document.querySelector("nav ul").style.display == 'none') ? "translateX(-50%) rotate(45deg)" : "translateX(-50%) translateY(10px) rotate(225deg)"; 
  })}