//Code from w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}

	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active", "");
	}

	slides[slideIndex-1].style.display = "block";
}

function showNewMembersModal()
{
	var modalBackdrop = document.getElementById("modal-backdrop");
  var createNewMemberModal = document.getElementById("new-member-modal");

  modalBackdrop.classList.remove('hidden');
  createNewMember.classList.remove('hidden');
}
var createNewMember = document.getElementById('create-new-member-button');
createNewMember.addEventListener('click', showNewMembersModal);
