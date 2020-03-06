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