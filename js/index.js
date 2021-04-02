let stock =document. querySelectorAll('.stock');
let left = document.querySelector('.arrow1');
let right = document.querySelector('.arrow2');
var person = document.querySelector('.collection_peson');
var add = document.querySelector('.test-5-add');
var remove = document.querySelector('.test-5-remove');
var listPerson = document.querySelector('.position__person');
var number = document.querySelector('.input_person ');




add.addEventListener('click', function(){
	var counter =   Number(number.value) + 1;
	number.value = counter;
	addElement();
})

remove.addEventListener('click', function(){
	if( number.value > 1){
	var counter =   Number(number.value) - 1;
	number.value = counter;
	addElement();
}
})



// var addElement = function(){
// 	var countCollection = (listPerson.children.length) - 1;
// 	var personNumber = Number(number.value);
// 	for( let i=countCollection; personNumber  > countCollection; i++){
// 		var element= person.cloneNode(true);
// 		var lastElm = listPerson.children[countCollection];
// 		lastElm.appendChild(element);
// 	}
// 	for(let i=countCollection; personNumber < countCollection; i--){
// 		listPerson.children[countCollection].remove;
// 	}
	
// }


var nullElement = listPerson.children[0];
listPerson.children.appendChild(add);
console.log(listPerson)


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



