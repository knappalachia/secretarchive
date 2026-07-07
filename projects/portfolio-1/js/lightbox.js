function openatlas() {
  document.getElementById("atlasmodal").style.display = "block";
  $("#atlasmodal").animate({
    opacity: 1
  }, 200, function(){});
}

function closeatlas() {
  document.getElementById("atlasmodal").style.display = "none";
  $("#atlasmodal").animate({
    opacity: 0
  }, function(){});
}


function showatlasSlides(n) {
  var i;
  var slides = document.getElementsByClassName("atlasslides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




function openGH() {
  document.getElementById("GHmodal").style.display = "block";
  $("#GHmodal").animate({
    opacity: 1
  }, 200, function(){});
}

function closeGH() {
  document.getElementById("GHmodal").style.display = "none";
  $("#GHmodal").animate({
    opacity: 0
  }, function(){});
}


function showGHSlides(n) {
  var i;
  var slides = document.getElementsByClassName("GHslides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;

}



function openSts() {
  document.getElementById("stsmodal").style.display = "block";
  $("#stsmodal").animate({
    opacity: 1
  }, 200, function(){});
}

function closeSts() {
  document.getElementById("stsmodal").style.display = "none";
  $("#stsmodal").animate({
    opacity: 0
  }, function(){});
}


function showStsSlides(n) {
  var i;
  var slides = document.getElementsByClassName("stsslides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}






function openTravelo() {
  document.getElementById("Travelomodal").style.display = "block";
}

function closeTravelo() {
  document.getElementById("Travelomodal").style.display = "none";
}


function showTraveloSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Traveloslides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




function openShirts() {
  document.getElementById("Shirtsmodal").style.display = "block";
  $("#Shirtsmodal").animate({
    opacity: 1
  }, 200, function(){});
}

function closeShirts() {
  document.getElementById("Shirtsmodal").style.display = "none";
  $("#Shirtsmodal").animate({
    opacity: 0
  }, function(){});
}


function showShirtsSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Shirtsslides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




function openArchive() {
  document.getElementById("Archivemodal").style.display = "block";
  $("#Archivemodal").animate({
    opacity: 1
  }, 200, function(){});
}

function closeArchive() {
  document.getElementById("Archivemodal").style.display = "none";
  $("#Archivemodal").animate({
    opacity: 0
  }, function(){});
}


function showArchiveSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Archiveslides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



function openTattoo() {
  document.getElementById("Tattoomodal").style.display = "block";
  $("#Tattoomodal").animate({
    opacity: 1
  }, 200, function(){});
}

function closeTattoo() {
  document.getElementById("Tattoomodal").style.display = "none";
  $("#Tattoomodal").animate({
    opacity: 0
  }, function(){});
}


function showTattooSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Tattooslides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


function openAauto() {
  document.getElementById("Aautomodal").style.display = "block";
}

function closeAauto() {
  document.getElementById("Aautomodal").style.display = "none";
}


function showAautoSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Aautoslides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function openNolan() {
  document.getElementById("Nolanmodal").style.display = "block";
  $("#Nolanmodal").animate({
    opacity: 1
  }, 200, function(){});
}

function closeNolan() {
  document.getElementById("Nolanmodal").style.display = "none";
  $("#Nolanmodal").animate({
    opacity: 0
  }, function(){});
}


function showNolanSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Nolanslides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




function openRooster() {
  document.getElementById("Roostermodal").style.display = "block";
}

function closeRooster() {
  document.getElementById("Roostermodal").style.display = "none";
}


function showRoosterSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Roosterslides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



function openExhibit() {
  document.getElementById("exhibitmodal").style.display = "block";
  $("#exhibitmodal").animate({
    opacity: 1
  }, 200, function(){});
}

function closeExhibit() {
  document.getElementById("exhibitmodal").style.display = "none";
  $("#exhibitmodal").animate({
    opacity: 0
  }, function(){});
}


function showNolanSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Nolanslides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
