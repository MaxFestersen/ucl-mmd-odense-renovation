// INTERACTIVE MAIN CONTENT JavaScript

// VARS
var MadaffaldButton = document.getElementById("madaffald-button");
var topDisplay = document.getElementById("top-display");
var bottomDisplay = document.getElementById("bottom-display");
var restaffaldButton = document.getElementById("restaffald-button");
var glasButton = document.getElementById("glas-button");
var metalButton = document.getElementById("metal-button");

//Udvid sektion for affaldssortering ved tast
function showDisplay(color, id){
  switch(id) {
	case 'madaffald-button':
	  // vars
	  var category = document.getElementById("madaffald");
	  var display = topDisplay;
	  break;
	case 'restaffald-button':
	  // vars
	  var category = document.getElementById("restaffald");
	  var display = topDisplay;
	  break;
	case 'glas-button':
	  // vars
	  var category = document.getElementById("glas");
	  var display = topDisplay;
	  break;
	case 'metal-button':
	  // vars
	  var category = document.getElementById("metal");
	  var display = topDisplay;
	  break;
	case 'papir-button':
	  // vars
	  var category = document.getElementById("papir");
	  var display = bottomDisplay;
	  break;
	case 'smaat-pap-button':
	  // vars
	  var category = document.getElementById("smaat-pap");
	  var display = bottomDisplay;
	  break;
	case 'plast-button':
	  // vars
	  var category = document.getElementById("plast");
	  var display = bottomDisplay;
	  break;
	case 'oevrigt-button':
	  // vars
	  var category = document.getElementById("oevrigt");
	  var display = bottomDisplay;
	  break;
	default:
	  console.log('Kategorien blev ikke genkendt.')
	  return(false);
	}
  // Update logo
  var staticIcon = getFirstClassFromId(category, 'main_content_icon');
  var icon = getFirstClassFromId(display, 'main_content_icon');
  icon.src = staticIcon.src; // Opdaterer src (billederefferencen)
  icon.alt = staticIcon.alt; // Opdaterer alt (teksten der står hvis billedet ikke bliver indlæst)
  icon.title = staticIcon.title; // Opdaterer title (tooltip)

  // Update title
  // hentested = definer hvor det skal hentes
  // placering = definer hvor skal sættes
  // sæt placering = hentested

  // Update content
  var staticContent = getFirstClassFromId(category, 'main_content_content');
  var topContent = getFirstClassFromId(display, 'main_content_content');
  topContent.innerHTML = staticContent.innerHTML;
  
  // Show section
  //console.log("#top-display visable by removal of hidden class.");
  display.style.backgroundColor = color;
  display.classList.remove("hidden");
  
  // Hide section
  if(display == bottomDisplay){
	  hideTopdisplay()
  } else {
	  // hidebottomdisplay?
  }
}

function getFirstClassFromId(id, Class) {
  var content = id.getElementsByClassName(Class);
  content = content[0];
  return(content)
}
//MADAFFALD  onlick "close" add "display hidden"
function hideTopdisplay(){
  console.log("#top-display hidden with hidden class.")
  topDisplay.classList.add("hidden");
}
//On esc press
document.addEventListener("keyup", event=> {
  const key = event.key.toLowerCase();
  if(key=="escape"){
    hideTopdisplay();
  }
});

//Indsæt linje med forklaring og eksempel


//Luk sektion for affaldssortering ved tryk på "X"
