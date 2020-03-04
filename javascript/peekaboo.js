// peekaboo transition på scroll
function yScrollHandler() {
    var win = document.getElementById("peekaboo");
    if ((window.pageYOffset + window.innerHeight) >= document.body.offsetHeight) {
        //win.style.webkitTransition = "right 0.7s ease-in-out 0s";
        win.style.transition = "right 0.7s ease-in-out 0s";
        win.style.left = "0px";
    } else {
        win.style.transition = "right 0.7s ease-in-out 0s";
        win.style.left = "-345px";
    }
}
window.onscroll = yScrollHandler;