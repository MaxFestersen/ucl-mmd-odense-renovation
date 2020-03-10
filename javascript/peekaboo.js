// peekaboo transition på scroll
function yScrollHandler() {
    var win = document.getElementById("peekaboo");
    if ((window.pageYOffset + window.innerHeight) >= document.body.offsetHeight) {
        //win.style.webkitTransition = 
        win.style.transition = "left 1s ease-in-out 0.1s";
        win.style.left = "0px";
    } else {
        win.style.transition = "left 0.5s ease-in-out 0.2s";
        win.style.left = "-852px";
    }
}
window.onscroll = yScrollHandler;

alert("NOTE: Dette er blot et studieprojekt og er kun ment som et mock-up eksempel på et alternativt udkast til en Subpage for OdenseRenovation. Du kan scrolle længere ned for at finde mere information om hjemmesiden.");