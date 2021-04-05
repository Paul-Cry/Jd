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
	var element= person.cloneNode(true);
	var result= personNumber - countCollection;
		while(result > 0){
			result--;
			console.log(result);
			listPerson.appendChild(element);
			console.log(result);
		}
		if(personNumber < countCollection){
			listPerson.children[countCollection].remove();
		}
}
