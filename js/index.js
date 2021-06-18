let burger = document.querySelector('.burger')
let line = burger.children
let exit = line[3].children[0]



let changeClass = ()=>{
	burger.classList.toggle('animation')
	line[0].classList.toggle('easy');
	line[1].classList.toggle('easy');
	line[2].classList.toggle('easy');
	line[3].classList.toggle('easy');
	line[3].classList.toggle('show');
}

burger.onclick = ()=>{

	changeClass()
}
console.log(line[3])

exit.children[0].onclick = ()=>{
	animation = 'exi 1s ease forwards'
	changeClass()
	console.log(line[3])
}



$('.block_stock').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 3,
	centerPadding: '100px',
	dots: true,
	responsive:[{
			breakpoint: 575,
			settings : {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
  });






