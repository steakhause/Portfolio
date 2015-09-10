


function setLoc(x) {
	if (x == 1){
		localStorage.setItem("setting", "desert");
	}else if (x == 2){
		localStorage.setItem("setting", "mountians");
	}else if (x == 3){
	    localStorage.setItem("setting", "city"); 
	}else if (x == 4){
		localStorage.setItem("setting", "tropics");
	}
	$('.pictures').slideUp('slow');
	document.getElementById('goTo').innerHTML= 'So you would like to visit the ' + localStorage.getItem('setting') + '. That is a great place to visit but you will have to wait.';
	document.getElementById('goTo2').innerHTML= 'This site is still under development';
}	

$(document).ready(main);
