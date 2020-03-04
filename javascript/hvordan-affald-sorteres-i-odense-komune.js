//Udvid sektion for affaldssortering ved tast//
  //MADAFFALD onclick remove "display: hidden"
  //MADAFFALD  onlick "close" add "display hidden"



//Indsæt linje med forklaring og eksempel//


//Luk sektion for affaldssortering ved tryk på "X"//


//Peekaboo med link til sorteringsguide//


// ADD SEMANTIC FUNCTIONALITY TO IE 8 AND BELLOW
document.createElement('nav'); //nav is semantic element
document.createElement('header'); //header is semantic element
document.createElement('main'); //main is semantic element
document.createElement('section'); //section is semantic element
document.createElement('article'); //article is semantic element
document.createElement('footer'); //footer is semantic element


/*Cookie code*/
/*Code based on https://www.w3schools.com/js/js_cookies.asp*/
var studieopgave_oplysning = document.getElementById("studieopgave_oplysning");
var studieopgave_oplysning_closebth = document.getElementById("studieopgave_oplysning_closebth");

function getCookie(){
	//console.log('Getting cookies')
	var name = "studieopgave_oplysning" + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		//console.log('Searching for cookie content')
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			//console.log('Validating cookie content')
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			//console.log('Found cookie match')
			studieopgave_oplysning.style.display='none';
			console.log("#studieopgave_oplysning has been hidden.");
			return c.substring(name.length, c.length);
		}
	}
	//console.log('Found matching cookie.')
	return "";
}
getCookie();

function hideAndSave() {
	//console.log('Saving cookie.')
	var d = new Date();
	d.setTime(d.getTime() + (720*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = "studieopgave_oplysning" + "=" + 1 + ";" + expires + ";path=/";
	studieopgave_oplysning.style.display='none';
	console.log('cookie is saved.')
}

studieopgave_oplysning_closebth.onclick = hideAndSave;
