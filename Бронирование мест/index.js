var add = document.querySelector('.test-5-add');
var remove = document.querySelector('.test-5-remove');
var listPerson = document.querySelector('.position__person');
var number = document.querySelector('.input_person ');
var person = listPerson.children[1];



number.onchange = function(){
	addElement();
};

add.addEventListener('click', function(){
	var counter =   Number(number.value) + 1;
	number.value = counter;
	addElement();
})

remove.addEventListener('click', function(){
	if( number.value > 1){
	var counter =  Number(number.value) - 1;
	number.value = counter;
	addElement();
}
})






var addElement = function(){
	var countCollection = (listPerson.children.length) - 1;
	var personNumber = Number(number.value);
	var result_one = personNumber - countCollection;
	var result_two = countCollection  - personNumber  ;
	while(result_one > 0){
		var element= person.cloneNode(true);
		result_one--;
		listPerson.appendChild(element);
	}
	while(result_two > 0){
		result_two--;
		countCollection = (listPerson.children.length) - 1;
		listPerson.children[countCollection].remove();
	}
}
