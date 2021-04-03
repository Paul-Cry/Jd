let stock =document. querySelector('.block_stock');
let left = document.querySelector('.arrow1');
let right = document.querySelector('.arrow2');
var person = document.querySelector('.collection_peson');
var add = document.querySelector('.test-5-add');
var remove = document.querySelector('.test-5-remove');
var listPerson = document.querySelector('.position__person');
var number = document.querySelector('.input_person ');




// add.addEventListener('click', function(){
// 	var counter =   Number(number.value) + 1;
// 	number.value = counter;
// 	// addElement();
	
// 	console.log(personNubmer)
// })

// remove.addEventListener('click', function(){
// 	if( number.value > 1){
// 	var counter =  Number(number.value) - 1;
// 	number.value = counter;
// 	// addElement();
// }
// })




// var addElement = function(){
// 	var countCollection = (listPerson.children.length) - 1;
	
// 	if(personNumber > countCollection){
// 		var element= person.cloneNode(true);
// 		var lastElm = listPerson.children[countCollection];
// 		lastElm.appendChild(element);
// 	}
// 	if(personNumber < countCollection){
// 		listPerson.children[countCollection].remove();
// 	}

// }


// var nullElement = listPerson.children[0];
// listPerson.children.appendChild(add);
// console.log(listPerson)


left.addEventListener('click', function(){
	stock.style.transform = 'translateX(0px)';
})



right.addEventListener('click', function(){
	stock.style.transform = 'translateX(-1025px)';
})




