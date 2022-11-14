"use strict"
/*------------For Page Slider------------*/
let wrapperLoaded = document.querySelector('.wrapper');
let pageSlider = new Swiper('.page', {
	//Свої класи
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",

	//Вертикальний слайдер
	direction: 'vertical',

	//Кількість слайдів для показу
	slidesPerVew: 'auto',

	//Вмикаєм паралакс
	parallax: true,

	//Управління клавіатурою
	keyboard: {
		//Увімкнути/вимкнути 
		enabled: true,

		//Увімкнути/вимкнути тільки коли слайдер у межах в'юпорта
		onlyInViewport: true,

		//Увімкнути/вимкнути управління pageUp/pageDown
		pageUpDown: true,
	},
	//Управління колесом миші
	mousewheel: {

		//Чутливість колеса миші
		sensitivity: 1,

		//Клас об'єкта на котрому буде спрацьовувати прокрутка миші
		//eventsTarget: ".image-slider"
	},
	//Вимкнення функціонала якщо слайдів меньш ніж треба
	watchOverflow: true,

	//Швидкість
	speed: 800,

	//Оновити Свайпер при змінені елементів слайдера
	observer: true,

	//Оновити Свайпер при змінені батьківських елементів слайдера
	observerParents: true,

	//Оновити Свайпер при змінені дочерніх елементів слайдера
	observerSlideChildren: true,	

	//Навігація
	//Булети, поточне положення, прогресбар
	//pagination: {
	//	el: '.page__pagination',
	//	type: 'bullets',
	//	clickable: true,
	//	bulletClass: "page__bullet",
	//	bulletActiveClass: "page__bullet-active",
	//},

	//Скрол
	scrollbar: {
		el: '.page__scroll',
		dragClass: 'page__drag-scroll',
		//Можливість перетягати скрол
		draggable: true,
	},

	//Відключення автоініцаліізації
	init: false,

	//Події
	on: {
		//Подія ініцалізації
		init: function () {
			menuSlider();
			wrapperLoaded.classList.add('_loaded');
		},
		//Подія зміни слайду
		slideChange: function () {
			menuSliderRemove();
			menuLinks[pageSlider.realIndex].classList.add('_active');
		},
	},
});
/*------------For Page Slider------------*/


/*------------For Navigation bar------------*/
let menuLinks = document.querySelectorAll('.menu__link');
function menuSlider() {
	if (menuLinks.length > 0) {
		menuLinks[pageSlider.realIndex].classList.add('_active');
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function (e) {
				menuSliderRemove()
				pageSlider.slideTo(index, 800);
				menuLink.classList.add('_active');
				e.preventDefault();
			});
		}
	}
}
function menuSliderRemove() {
	let menuLinkActive = document.querySelector('.menu__link._active');
	if (menuLinkActive) {
		menuLinkActive.classList.remove('_active');
	}
}
pageSlider.init();
/*------------For Navigation bar------------*/


/*------------For Mouse gradient------------*/
const wrapForGradient = document.querySelector('.wrapper');
const gradientLight = document.querySelector('.gradient__light');
const bodyWidth = document.body.clientWidth;





wrapForGradient.addEventListener('mousemove', (e) => {
	gradientLight.style.top = `${e.clientY}px`;
	gradientLight.style.left = `${e.clientX}px`;
});

/*------------For Mouse gradient------------*/


/*------------For Portfolio Slider------------*/
let portfolioSlider = new Swiper('.portfolio-slider', {
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	touchRatio: 0,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: false,
	},
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	speed: 1000,
});
/*------------For Portfolio Slider------------*/


/*------------For Contacts------------*/
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
		
		let formData = new FormData(form);

		if (error === 0) {

			let formSending = document.querySelector('.formLoading');
			formSending.classList.add('_sending');
			
			let response = await fetch("https://formsubmit.co/ajax/likepw10789@gmail.com", {
				method: 'POST',
				body: formData
            });
            if (response.ok) {
               let result = await response.json();
               alert(result.message);
				form.reset();
				formSending.classList.remove('_sending');
			} else {
				alert('ERROR!');
				formSending.classList.remove('_sending');
			}
		} else {
			alert('Complete the required fields correctly.');
		}
	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	} 
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
})
/*------------For Contacts------------*/

/*------------For Popup------------*/
const openPopup = document.querySelector('.popup-cv__link');
const closePopup = document.querySelector('.close-popup');
const popup = document.querySelector('.popup');

openPopup.addEventListener('click', function (e) {
	e.preventDefault();
	popup.classList.add('open');
});

closePopup.addEventListener('click', function (e) {
	e.preventDefault();
	popup.classList.remove('open');
});
/*------------For Popup------------*/



/*------------For Animate Blocks------------*/
//const animItems = document.querySelectorAll('._anim-items');

/*if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				animItem.classList.remove('_active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientReact(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	animOnScroll();
}*/





/*------------For Animate Blocks------------*/




