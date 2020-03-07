// INTERACTIVE MAIN CONTENT JavaScript

// VARS
var siteName = window.location.href
siteName = siteName.split("#");
siteName = siteName[0];
var interactiveMainContent = document.getElementById("interactive_main_content");
var MadaffaldButton = document.getElementById("madaffald-button");
var topDisplay = document.getElementById("top-display");
var bottomDisplay = document.getElementById("bottom-display");
var restaffaldButton = document.getElementById("restaffald-button");
var glasButton = document.getElementById("glas-button");
var metalButton = document.getElementById("metal-button");
var indholdOverAffaldsorteringsIkoner = document.getElementById("indhold-over-affaldsorterings-ikoner");
var indholdUnderAffaldsorteringsIkoner = document.getElementById("indhold-under-affaldsorterings-ikoner");
var affaldsorteringsIkoner = document.getElementById("affaldsorterings-ikoner");

//Udvid sektion for affaldssortering ved tast
function showDisplay(color, id){
  switch(id) {
	case 'madaffald-button':
	  // vars
	  var category = document.getElementById("madaffald");
	  var display = topDisplay;
	  var destination = indholdOverAffaldsorteringsIkoner;
	  break;
	case 'restaffald-button':
	  // vars
	  var category = document.getElementById("restaffald");
	  var display = topDisplay;
	  var destination = indholdOverAffaldsorteringsIkoner;
	  break;
	case 'glas-button':
	  // vars
	  var category = document.getElementById("glas");
	  var display = topDisplay;
	  var destination = indholdOverAffaldsorteringsIkoner;
	  break;
	case 'metal-button':
	  // vars
	  var category = document.getElementById("metal");
	  var display = topDisplay;
	  var destination = indholdOverAffaldsorteringsIkoner;
	  break;
	case 'papir-button':
	  // vars
	  var category = document.getElementById("papir");
	  var display = bottomDisplay;
	  var destination = indholdUnderAffaldsorteringsIkoner;
	  break;
	case 'smaat-pap-button':
	  // vars
	  var category = document.getElementById("smaat-pap");
	  var display = bottomDisplay;
	  var destination = indholdUnderAffaldsorteringsIkoner;
	  break;
	case 'plast-button':
	  // vars
	  var category = document.getElementById("plast");
	  var display = bottomDisplay;
	  var destination = indholdUnderAffaldsorteringsIkoner;
	  break;
	case 'oevrigt-button':
	  // vars
	  var category = document.getElementById("oevrigt");
	  var display = bottomDisplay;
	  var destination = indholdUnderAffaldsorteringsIkoner;
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
  var staticTitle = getFirstClassFromId(category, 'main_content_title');
  // placering = definer hvor skal sættes
  var topTitle = getFirstClassFromId(display, 'main_content_title');
  // sæt placering = hentested
  topTitle.innerHTML = staticTitle.innerHTML;

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
	  hideDisplay(topDisplay)
  } else {
	  hideDisplay(bottomDisplay)
  }
  
  // Update URL
  window.history.pushState(siteName, document.title, "#"+id);

  // Scroll smoothly to section
  destination.scrollIntoView({ behavior: 'smooth' });
}

function getFirstClassFromId(id, Class) {
  var content = id.getElementsByClassName(Class);
  content = content[0];
  return(content)
}

//MADAFFALD  onlick "close" add "display hidden"
//Luk sektion for affaldssortering ved tryk på "X"
function hideDisplay(display){
  // Hide display
  //console.log("#top-display hidden with hidden class.")
  display.classList.add("hidden");
  
  // Scroll to #affaldsorterings-ikoner
  // Update URL
  window.history.pushState(siteName, document.title, "#affaldsorterings-ikoner");

  // Scroll smoothly to section
  affaldsorteringsIkoner.scrollIntoView({ behavior: 'smooth' });
}

//On esc press
document.addEventListener("keyup", event=> {
  const key = event.key.toLowerCase();
  if(key=="escape"){
    hideDisplay(topDisplay);
    hideDisplay(bottomDisplay);
  }
});

// Fjern href fra affalds kort og knapper i top og bottom display.
var links = interactiveMainContent.querySelectorAll("a");
for (i = 0; i < links.length; i++) {
  links[i].removeAttribute("href");
}
