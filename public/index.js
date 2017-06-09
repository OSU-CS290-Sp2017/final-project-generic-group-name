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

function closeCancelNewMembersModal()
{
	var modalBackdrop = document.getElementById("modal-backdrop");
	var createNewMemberModal = document.getElementById("new-membermodal");

	modalBackdrop.classList.add('hidden');
	createNewMember.classList.add('hidden');
}
var createNewMemberCancel = document.getElementsByClassName('modal-cancel-button');
var createNewMemberClose = document.getElementsByClassName('modal-close-button');
createNewMemberCancel[0].addEventListener("click", closeCancelNewMemberModal);
createNewMemberClose[0].addEventListener("click", closeCancelNewMemberModal);

function createNewMembersModal(event)
{
	var name = document.getElementById("member-name-input");
	var hobby1 = document.getElementById("member-hobby1-input");
	var hobby2 = document.getElementById("member-hobby2-input");
	var hobby3 = document.getElementById("member-hobby3-input");
	var aboutInfo = document.getElementById("member-text-input");
	var uploadPhoto = document.getElementById("member-url-input");

	if (name.value == "" || hobby1.value == "" || hobby2.value == "" || hobby3.value == "" || aboutInfo.value == "" || uploadPhoto.value == "")
  {
    alert("Error: all boxes need to be filled in order to create a profile.");
    console.log("alert appeared");
    return;
  }
	else
	{
		console.log("profile created properly");
	}
}

function addNewMember()
{
	var name = document.getElementById("member-name-input").value;
	var hobby1 = document.getElementById("member-hobby1-input").value;
	var hobby2 = document.getElementById("member-hobby2-input").value;
	var hobby3 = document.getElementById("member-hobby3-input").value;
	var aboutInfo = document.getElementById("member-text-input").value;
	var uploadPhoto = document.getElementById("member-url-input").value;


}


function storeNewMember(name, hobby1, hobby2, hobby3, about, url, callback)
{
	var postURL = "/people" + name;

	var postRequest = new XMLHttpRequest();
	postRequest.open("POST", postURL);
	postRequest.setRequestHeader("Content-Type", "application/json");
	postRequest.addEventListener("load", function(event)
	{
		var error;
		if (event.target.status !== 200)
		{
			error = event.target.response;
		}
		callback(error);
	});

	var postBody =
	{
		name: name,
		url: url,
		hobby1: hobby1,
		hobby2: hobby2,
		hobby3: hobby3,
		about: about //or is it "aboutInfo?""
	};
	postRequest.send(JSON.stringify(postBody));
}
