//Udvid sektion for affaldssortering ved tast//


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
function getCookie(){
  var name = "view_setting" + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
	var c = ca[i];
	while (c.charAt(0) == ' ') {
	  c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
	 console.log("View settings found.");
	 return c.substring(name.length, c.length);
	}
  }
  console.log("No view settings found. Sorry boss.");
  return "";
}

function save_view_setting() {
  var d = new Date();
  d.setTime(d.getTime() + (720*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = "view_setting" + "=" + view_setting + ";" + expires + ";path=/";
  console.log("Saved view settings");
  alert("Dine indstillinger er nu gemt.");

}


