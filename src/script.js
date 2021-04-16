const imgLogo = document.querySelector('.logo_img');

imgLogo.addEventListener('click', ()=> {
	imgLogo.classList.toggle('active');
	if(imgLogo.classList.contains('active')) {
		imgLogo.style.transform = 'rotate(180deg)'
	} else {
		imgLogo.style.transform = 'rotate(-180deg)'
	}
});

const hamburger = document.querySelector('.menu_hamburger');
const aside = document.querySelector('aside');
console.log(aside);
hamburger.addEventListener('click', ()=> {
	hamburger.classList.toggle('active');
	if(hamburger.classList.contains('active')) {
		aside.style.transform = 'translateX(0)';
	} else {
		aside.style.transform = 'translateX(-100%)';
	}
	
});