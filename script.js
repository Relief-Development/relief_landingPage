var test = 1;

function changeFooterState() {
    var footer = document.getElementById("footer");

    if (test == 1) {

        footer.style.height = "35px";
        test = 0;
    } else {
        footer.style.height = "440px";
        //footer.textContent = "Close";
        test = 1;
    }
}

							 /*PRUEBA CARROUSEL*/ 

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");

  if (n > slides.length) {
  	slidePosition = 1
  }

  if (n < 1) {
  	slidePosition = slides.length
  }

  for (i = 0; i < slides.length; i++) {

      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {

      circles[i].className = circles[i].className.replace(" enable", "");
  }

  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 



									/*PRUEBA CARROUSEL*/