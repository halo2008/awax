var viewPortWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewPortWidth < 998) {
	document.getElementById('menu').classList.add('hide');
	document.getElementById('hamburger').addEventListener('click', function(){
		document.querySelector('.menu').classList.toggle('hide');
	})
}

else {
	document.getElementById('menu').classList.remove('hide');
}




document.getElementById('up').addEventListener('click', function() {
	document.querySelector('.header').scrollIntoView({
	  behavior: 'smooth'
	});
});

//modal
var showModal = function(event){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.add('show');
};

var modalLinks = document.querySelectorAll('.show-modal');

modalLinks.forEach(function(element) {
  element.addEventListener("click", function() {
      document.querySelector(event.currentTarget.getAttribute("href")).classList.add('show');
    });
});

for(var i = 0; i < modalLinks.length; i++){
  modalLinks[i].addEventListener('click', showModal);
}

var hideModal = function(event){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.remove('show');

  var closeModal = document.querySelectorAll('.modal');

  for(var i = 0; i < closeModal.length; i++){
    closeModal[i].classList.remove('show');
  }
};

document.addEventListener('keyup', function(event) {
  if(event.keyCode === 27) {
    hideModal(event);
  }
})

var closeButtons = document.querySelectorAll('.modal .close');

for(var i = 0; i < closeButtons.length; i++){
  closeButtons[i].addEventListener('click', hideModal);
}

document.querySelector('#modal-overlay').addEventListener('click', hideModal);

var modals = document.querySelectorAll('.modal');

for(var i = 0; i < modals.length; i++){
  modals[i].addEventListener('click', function(event){
    event.stopPropagation();
  });
}
