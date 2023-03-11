// import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
    
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,



//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// export default swiper;


// import Swiper, { Navigation, Pagination } from 'swiper';
//   // import Swiper and modules styles
//   import 'swiper/css';
//   import 'swiper/css/navigation';
//   import 'swiper/css/pagination';

//   // init Swiper:
//   const swiper = new Swiper('.swiper', {
//     // configure Swiper to use modules
//     modules: [Navigation, Pagination],
//     ...
//   });


import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
    
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export default swiper;