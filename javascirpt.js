const swiper = new Swiper('.swiper', {
    loop: true,
    SpaceBetween:32,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: [-100, 0, -500],
            rotate: [0, 0, 15],
            opacity:0
        },
        next: {
            translate: [100, 0,-500],
            opacity:0
        },
    },
    pagination: {
      el: '.swiper-pagination',
    },
  
});
let Menu = document.querySelector('.menu');
let Mobile = document.querySelector('.mobile');
function showMenu(){
    if(Mobile.style.display === 'flex'){
        Mobile.style.display = 'none'
    }else{
        Mobile.style.display = 'flex'
    }
};