function showCreatememberModal()
{
  var modalBackdrop = document.getElementById('modal-backdrop');
  var creatememberModal = document.getElementById('create-member-modal');
  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  creatememberModal.classList.remove('hidden');
}

function closeCreatememberModal()
{
  var modalBackdrop = document.getElementById('modal-backdrop');
  var creatememberModal = document.getElementById('create-member-modal');
  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  creatememberModal.classList.add('hidden');
  clearmemberInputValues();
}

function clearmemberInputValues()
{
  var memberInputElems = document.getElementsByClassName('member-input-element');
  for (var i = 0; i < memberInputElems.length; i++)
  {
    var input = memberInputElems[i].querySelector('input, textarea');
    input.value = "";
  }
}

function generateNewmemberElem(memberText, memberName, memHobby1, memHobby2, memHobby3, memUrl) {

  var memberTemplate = Handlebars.templates.member;
  var memberData = {
    about: memberText,
    name: memberName,
    hobby1: memHobby1,
    hobby2: memHobby2,
    hobby3: memHobby3,
    url: memUrl
  };
  return memberTemplate(memberData);
}

function insertNewmember() {

  var about = document.getElementById('member-about-input').value;
  var name = document.getElementById('member-name-input').value;
  var hobby1 = document.getElementById('member-hobby1-input').value;
  var hobby2 = document.getElementById('member-hobby2-input').value;
  var hobby3 = document.getElementById('member-hobby3-input').value;
  var url = document.getElementById('photo-url-input').value;

 storeNewMember(name, hobby1, hobby2, hobby3, about, url, function (err) {

        if (err) {
          alert("Unable to save member card.  Got this error:\n\n" + err);
        };
 });
 
  if (about && name && url && hobby1 && hobby2 && hobby3) {

      var newmemberElem = generateNewmemberElem(about, name, hobby1, hobby2, hobby3, url);
      var memberContainer = document.querySelector('.member-container');
      memberContainer.insertAdjacentHTML('beforeend', newmemberElem);
    

      closeCreatememberModal();

  } else {

    alert('You must input your name, bio info, three hobbies, and image URL to submit!');

  }
}

function storeNewMember(name, hobby1, hobby2, hobby3, about, url, callback)
{
	var postURL = "/aboutMembers.html";

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
		about: about 
	};
	postRequest.send(JSON.stringify(postBody));
}


/*
 * Wait until the DOM content is loaded, and then hook up UI interactions, etc.
 */
window.addEventListener('DOMContentLoaded', function ()
{
  var creatememberButton = document.getElementById('create-member-button');
  creatememberButton.addEventListener('click', showCreatememberModal);

  var modalCloseButton = document.querySelector('#create-member-modal .modal-close-button');
  modalCloseButton.addEventListener('click', closeCreatememberModal);

  var modalCancalButton = document.querySelector('#create-member-modal .modal-cancel-button');
  modalCancalButton.addEventListener('click', closeCreatememberModal);

  var modalAcceptButton = document.querySelector('#create-member-modal .modal-accept-button');
  modalAcceptButton.addEventListener('click', insertNewmember);
});
