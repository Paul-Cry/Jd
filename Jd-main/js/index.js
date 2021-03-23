var two = document.querySelectorAll('.one_block2');
var thee = document.querySelectorAll('.one_block3');
var button = document.querySelector('.test-0-fbs');
var win = document.querySelector('.one_title');
var text = document.querySelectorAll('.one_text');
var blockThree = document.getElementById('one')

window.onscroll= function(){ 
 // 36 
    	if(window.pageYOffset >826 & window.pageYOffset< 1100){
    		var sum = (window.pageYOffset-826)*1.4;
    		if(sum == 375){
    			alert('ld');
    		}
    		two[0].style.transform= `translate(${sum}px, 0px)`;
    		win.innerHTML= window.pageYOffset;
    		blockThree.innerHTML= sum;
    	}
   
};

 // button.addEventListener('click', function(){
 // 	two[0].style.marginLeft= '60px';
 // });


