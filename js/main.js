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

const swiper = new Swiper('.banner-swiper', {
	pagination: {
		el: '.swiper-pagination',
	},
});

// navigation: {
// 	nextEl: '.swiper-button-next',
// 	prevEl: '.swiper-button-prev',
// },
