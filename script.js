var test = 1;

function changeFooterState() {
    var footer = document.getElementById("footer");

    if (test == 1) {

        footer.style.height = "50px";
        test = 0;
    } else {
        footer.style.height = "440px";
        //footer.textContent = "Close";
        test = 1;
    }
}