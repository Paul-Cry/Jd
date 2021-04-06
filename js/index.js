
let date = document.querySelectorAll('.date')
let stock =document.querySelector('.block_stock');
let left = document.querySelector('.arrow1');
let right = document.querySelector('.arrow2');

console.log(pageWidth);

for(let element of date){
	console.log(element)
	element.onfocus = function(){
		console.log(date)
		element.setAttribute('type', 'date');

	}
	element.onblur = function(){
		element.setAttribute('type', 'text');
	}
}


left.addEventListener('click', function(){
	stock.style.transform = 'translateX(0px)';
})



right.addEventListener('click', function(){
	const pageWidth = document.documentElement.scrollWidth;
	if( pageWidth <'430'){
	stock.style.transform = 'translateX(-1025px)';
	}else{
		stock.style.transform = 'translateX(-1025px)';
	}
	
})







