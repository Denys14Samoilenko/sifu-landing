const toggle = document.getElementsByClassName('navbar-toggle');
toggle[0].addEventListener('click', function (event) {
	event.preventDefault();
	let scrollMenu = toggle[0].classList.toggle('is-active');
	if (scrollMenu === true) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'visible';
	}
});

const bannerSwiper = new Swiper('.banner-swiper', {
	pagination: {
		el: '.swiper-pagination',
	},
});

const photosSwiper = new Swiper('.photos-swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		992: {
			slidesPerView: 2,
		}
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
},
});

const videosSwiper = new Swiper('.videos-swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		992: {
			slidesPerView: 2,
		}
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
},
});



const navContainer = document.querySelector('.navbar');

navContainer.addEventListener('click', (event) => {
	const target = event.target;

	if (target.classList.contains('nav-link')) {
		const activeLink = navContainer.querySelector('.nav-link.active');
		if (activeLink) {
			activeLink.classList.remove('active');
		}

		target.classList.add('active');
	}
});

const tabsButtons = document.querySelectorAll('.tabs-button');
const slider = document.querySelector('.tabs-slide');

tabsButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		const prevActiveItem = document.querySelector('.tabs-item.active');
		const prevActiveButton = document.querySelector('.tabs-button.active');

		if (prevActiveButton) {
			prevActiveButton.classList.remove('active');
		}

		if (prevActiveItem) {
			prevActiveItem.classList.remove('active');
		}

		btn.classList.add('active');
		const nextActiveItemClass = `.${btn.getAttribute('data-tab')}`;
		const nextActiveItem = document.querySelector(nextActiveItemClass);

		nextActiveItem.classList.add('active');

		const buttonRect = btn.getBoundingClientRect();
		const parentRect = btn.parentNode.getBoundingClientRect();

		slider.style.width = `${buttonRect.width}px`;
		slider.style.left = `${buttonRect.left - parentRect.left}px`;
	});
});
