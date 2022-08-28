
let body = document.querySelector('body');

function bodyLock() {
	const lockPaddingValue =
	  window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
	body.style.paddingRight = lockPaddingValue;
	body.classList.add("lock");
 }
 function bodyUnlock() {
	setTimeout(function () {
	  body.style.paddingRight = "0px";
	  body.classList.remove("lock");
	}, 100);
 }

if ($('#main-body').length > 0) {


	window.onload = function () {
		 modalExit();
	};
	
	// InputCity

	// $('.form__input-city').on('keypress', function () {
	//     var that = this;

	//     setTimeout(function () {
	//         var res = /[^А-Яа-я \-]/g.exec(that.value);
	//         if (res !== null) {
	//             alert('Введите название города русскими буквами')
	//         }


	//         that.value = that.value.replace(res, '');
	//     }, 0);
	// });

	//CheckBox

/* 	let checkboxes = document.querySelectorAll('.custom-checkbox');
	for (let i = 0; i < checkboxes.length; i++) {
		 checkboxes[i].addEventListener('click', function () {
			  if (checkboxes[i].checked) {
					checkboxes[i].classList.remove('validate')
			  }
		 })

	} */


	//ValidateInputs 

	let inputs = document.querySelectorAll('input');
	

	for (let i = 0; i < inputs.length; i++) {
		 inputs[i].addEventListener('change', function () {
			  let activeInput = inputs[i];
			  if (activeInput.classList.contains('form__input-phone')) {
					if (activeInput.value.includes('_')) {
						 return;
					}
					else {
						 activeInput.classList.remove('validate')
					}
			  }
			  if (activeInput.classList.contains('form__input-email')) {
					let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
					if (reg.test(activeInput.value) == false) {
						 return;
					}
					else {
						 activeInput.classList.remove('validate');
					}
			  }
			  if (activeInput.classList.contains('form__input-name')) {
					if (activeInput.value == '') {
						 return;
					}
					else {
						 activeInput.classList.remove('validate');
					}
			  }
			  if (activeInput.classList.contains('form__input-city')) {
					if (activeInput.value == '') {
						 return;
					}
					else {
						 activeInput.classList.remove('validate');
					}
			  }
		 })
	}
 


	//Popup

	let presentationBtn = document.querySelectorAll('.top-btn');
	let phoneBtn = document.querySelectorAll('.modal-phone');
	let politicyBtn = document.querySelectorAll('.politicy');

	let popupPresentation = document.querySelector('.popup-franchising');
	let popupPhone = document.querySelector('.popup-phone');
	let popupPoliticy = document.querySelector('.popup-politicy');

	presentationBtn.forEach(item => {
		item.addEventListener('click', () => {
			presentation();
	  });
	})
	

	function presentation() {
		 let popupPresentation = document.querySelector('.popup-franchising');
		 let body = document.querySelector('body');
		 popupPresentation.classList.add('is-active');
		 bodyLock()
		 if (popupPresentation.classList.contains('is-active')) {
			  body.addEventListener('keydown', function (e) {
					if (e.keyCode === 27) {
						 popupPresentation.classList.remove('is-active');
						 bodyUnlock() 
					}
			  })
		 }
	}

	for (let p = 0; p < politicyBtn.length; p++) {
		 politicyBtn[p].addEventListener('click', function () {
			  popupPoliticy.classList.add('is-active');
			  bodyLock()
			  if (popupPoliticy.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupPoliticy.classList.remove('is-active');
							  bodyUnlock() 
						 }
					})
			  }
		 })
	}

	for (let p = 0; p < phoneBtn.length; p++) {
		 phoneBtn[p].addEventListener('click', function () {
			  popupPhone.classList.add('is-active');
			  bodyLock()
			  if (popupPhone.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupPhone.classList.remove('is-active');
							  bodyUnlock() 
						 }
					})
			  }
		 })
	}
	

	body.addEventListener('click', function (a) {
		 let target = a.target;
		 if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
			  popupPresentation.classList.remove('is-active');
			  popupPoliticy.classList.remove('is-active');
			  popupPhone.classList.remove('is-active');
			  bodyUnlock()
		 }
	})

	newDate()

	//input-phone

	var element = document.getElementsByClassName('form__input-phone');
	var maskOptions = {
		 mask: '+7(000) 000 0000',
		 // +7 (___) ___ ____
		 lazy: false
	}

	$('.form__input-phone').each(function (i, elem) {
		 //let IMask;
		 var mask = new IMask(elem, maskOptions);
	});

}



function phone() {
	let phoneBtn = document.querySelectorAll('.modal-phone');
	let popupPhone = document.querySelector('.popup-phone');

	for (let p = 0; p < phoneBtn.length; p++) {
		 phoneBtn[p].addEventListener('click', function () {
			  popupPhone.classList.add('is-active');
			  bodyLock()
			  if (popupPhone.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupPhone.classList.remove('is-active');
							  bodyUnlock()
						 }
					})
			  }
		 })
	}


	body.addEventListener('click', function (a) {
		 let target = a.target;
		 if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
			  popupPhone.classList.remove('is-active');
			  body.classList.remove('no-scroll');
		 }
	})

}

function politicy() {
	let politicyBtn = document.querySelectorAll('.politicy');
	let popupPoliticy = document.querySelector('.popup-politicy');
	let body = document.querySelector('body');

	for (let p = 0; p < politicyBtn.length; p++) {
		 politicyBtn[p].addEventListener('click', function (m) {
			  let targetM = m.target;
			  popupPoliticy.classList.add('is-active');
			  body.classList.add('no-scroll');
			  if (popupPoliticy.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupPoliticy.classList.remove('is-active');
							  body.classList.remove('no-scroll');
						 }
					})
			  }
		 })
	}

	body.addEventListener('click', function (a) {
		 let target = a.target;
		 if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
			  popupPoliticy.classList.remove('is-active');
			  body.classList.remove('no-scroll');
		 }
	})
}
function newDate() {
	const dateNow = new Date().getFullYear();
	let dateText = document.querySelectorAll('.date-now')
	dateText.innerHTML = dateNow;
}

//PopupExit

// modalExit();
function modalExit() {
	let popupExit = document.querySelector('.popup-exit');
	let body = document.querySelector('body');
	let count = 0
	$(document).mouseleave(function (e) {
		 if (count > 0) {
			  return
		 }
		 if (e.clientY < 10) {
			  popupExit.classList.add('is-active');
			  bodyLock() 
			  if (popupExit.classList.contains('is-active')) {
					body.addEventListener('keydown', function (e) {
						 if (e.keyCode === 27) {
							  popupExit.classList.remove('is-active');
							  bodyUnlock() 
						 }
					})
			  }
			  count++;
		 }
	})
	body.addEventListener('click', function (a) {
		 let target = a.target;
		 if (target.classList.contains('popup__inner') || target.classList.contains('popup-close')) {
			  popupExit.classList.remove('is-active');
			  bodyUnlock() 
		 }
	})
}



if ($('#thanks-body').length > 0) {

	let thanksName = document.querySelector('.thanks-name');
	let the_title = document.querySelector("title");
	let nameValue = localStorage.getItem('lpg3746_name');
	if (nameValue == ' ') {
		 thanksName.innerHTML = localStorage.getItem('lpg3746_name');
		 the_title.innerHTML = 'Cпасибо, Ваша заявка принята';
	}
	else {
		 thanksName.innerHTML = localStorage.getItem('lpg3746_name') + ',';
		 the_title.innerHTML = localStorage.getItem('lpg3746_name') + ', спасибо, Ваша заявка принята';
	}



	politicy();
	newDate();

}
/* if ($('#thanks2-body').length > 0) {


    let nameValue = localStorage.getItem('lpg3746_name');
    let thanksName = document.querySelector('.thanks-name');
    let cityName = document.querySelector('.thanks-city');
    let the_title = document.querySelector("title");

    cityName.innerHTML = localStorage.getItem('lpg3746_city');

    if (nameValue == ' ') {
        thanksName.innerHTML = localStorage.getItem('lpg3746_name');
        the_title.innerHTML = 'Cпасибо, Ваша заявка принята';
    }
    else {
        thanksName.innerHTML = localStorage.getItem('lpg3746_name') + ',';
        the_title.innerHTML = localStorage.getItem('lpg3746_name') + ', спасибо, Ваша заявка принята';
    }


    politicy();
    newDate();
} */

// Slider

$('.feedback__slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow:
	'<img class="arrow  arrow__left" src="img/feedback/left-arrow.svg" alt="arrow"/>',
 nextArrow:
	'<img class="arrow  arrow__right" src="img/feedback/right-arrow.svg" alt="arrow"/>',
 });


 // Tabs


 const tabItem = document.querySelectorAll(".stage__tab-btn");
   const tabContent = document.querySelectorAll(".stage__content");
	const tabText = document.querySelectorAll(".stage__tab-descr");


   function tabChanger(item, content, text) {
      item.forEach((tab, index) => {
         tab.addEventListener('click', function(){
				item[index].classList.toggle('active');           
            content[index].classList.toggle('active');
            text[index].classList.toggle('active');
            
         })
      })
   }
   tabChanger(tabItem, tabContent, tabText);