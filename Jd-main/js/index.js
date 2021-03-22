let two = document.querySelectorAll('.one_block2');
let thee = document.querySelectorAll('.one_block3');
let y = window.pageYOffset;


window.onscroll= function(){  // 36 
    two.style.margin = '${y}px';
}