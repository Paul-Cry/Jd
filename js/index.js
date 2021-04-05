

let stock =document. querySelector('.block_stock');
let left = document.querySelector('.arrow1');
let right = document.querySelector('.arrow2');





left.addEventListener('click', function(){
	stock.style.transform = 'translateX(0px)';
})



right.addEventListener('click', function(){
	stock.style.transform = 'translateX(-1025px)';
})







