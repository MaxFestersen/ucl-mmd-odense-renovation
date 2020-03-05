//Udvid sektion for affaldssortering ved tast
var Madaffald_button = document.getElementById("madaffald-button");
var top_display = document.getElementById("top-display");
function fuck(color){
  console.log("virker");
  top_display.style.backgroundColor = color;
  top_display.classList.remove("hidden");
}
var Restaffald_button = document.getElementById("restaffald-button");
var Glas_button = document.getElementById("glas-button");
var Glas_button = document.getElementById("metal-button");
  //MADAFFALD onclick remove "display: hidden"
  //MADAFFALD  onlick "close" add "display hidden"
function hideTopdisplay(){
  top_display.classList.add("hidden");
}
//On esc press//
console.log("test")
document.addEventListener("keyup", event=> {
  const key = event.key.toLowerCase();
  console.log("prøve")
  if(key=="escape"){
    console.log("hideTopdisplay")
    hideTopdisplay();
  }
});

//Indsæt linje med forklaring og eksempel


//Luk sektion for affaldssortering ved tryk på "X"
