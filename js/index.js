let stock =document. querySelectorAll('.stock');

let left = document.querySelector('.arrow1');
let right = document.querySelector('.arrow2');


left.addEventListener('click', function(){
	for( let element of stock){
		element.style.animation = 'left 5s linear';
		element.style.animationFillMode = 'forwards';
	}
	
})

right.addEventListener('click', function(){
	for( let element of stock){
		element.style.animation = 'right 5s linear';
		element.style.animationFillMode = 'forwards';
	}
})

console.log(left);
console.log(324234);