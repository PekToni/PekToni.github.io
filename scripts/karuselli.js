var slideIndex = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
var slideIndex4 = 1;
showSlides(slideIndex);
showSlides2(slideIndex2);
showSlides3(slideIndex3);
showSlides4(slideIndex4);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Next/previous controls
function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("code1");
  var dots2 = document.getElementsByClassName("dot");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";

  //dots2[slideIndex2-1].className += " active";
} 

function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("code2");
  var dots3 = document.getElementsByClassName("dot");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  for (i = 0; i < dots3.length; i++) {
      dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";

  //dots3[slideIndex3-1].className += " active";
} 

function showSlides4(n) {
  var i;
  var slides4 = document.getElementsByClassName("code3");
  var dots4 = document.getElementsByClassName("dot");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
  }
  for (i = 0; i < dots4.length; i++) {
      dots4[i].className = dots4[i].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";

  //dots4[slideIndex4-1].className += " active";
} 