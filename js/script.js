"use strict"

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
		},
		//Подія зміни слайду
		slideChange: function () {
			menuSliderRemove();
			menuLinks[pageSlider.realIndex].classList.add('_active');
		},
	},
});

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



//document.addEventListener('DOMContentLoaded', function () {
//	const form = document.getElementById('form');
//	form.addEventListener('submit', formSend)
//	async function formSend(e) {
//		e.preventDefault();
//	}
//})








const wrapForGradient = document.querySelector('.wrapper');
const gradientLight = document.querySelector('.gradient__light');

wrapForGradient.addEventListener('mousemove', (e) => {
	gradientLight.style.top = `${e.clientY}px`
	gradientLight.style.left = `${e.clientX}px`
})