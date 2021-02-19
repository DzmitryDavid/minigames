function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {
	const slides = document.querySelectorAll(slide);
	const slider = document.querySelector(container);
	const prevBtn = document.querySelector(prevArrow);
	const nextBtn = document.querySelector(nextArrow);
	const currentNum = document.querySelector(currentCounter);
	const totalNum = document.querySelector(totalCounter);
	const slidesWrapper = document.querySelector(wrapper);
	const slidesField = document.querySelector(field);
	const width = window.getComputedStyle(slidesWrapper).width;
	let slideIndex = 1;
	let offset = 0;


	if (slides.length < 10) {
		totalNum.textContent = `0${slides.length}`;
		currentNum.textContent = `0${slideIndex}`;
	} else {
		totalNum.textContent = slides.length;
		currentNum.textContent = slideIndex;
	}

	slidesField.style.width = 100 * slides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';
	slidesWrapper.style.overflow = 'hidden';

	slides.forEach(slide => {
		slide.style.width = width;
	});

	// slider.style.display = 'none';

	const indicators = document.createElement('ol');
	const dots = [];

	indicators.classList.add('carousel-indicators');
	slider.append(indicators);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.classList.add('dot');
		if (i === 0) {
			dot.style.opacity = 1;
		}
		indicators.append(dot);
		dots.push(dot);
	}

	function removeNotDigits(str) {
		return +str.replace(/\D/g, '');
	}

	nextBtn.addEventListener('click', () => {
		if (offset === removeNotDigits(width) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += removeNotDigits(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex === slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		if (slides.length < 10) {
			currentNum.textContent = `0${slideIndex}`;
		} else {
			currentNum.textContent = slideIndex;
		}

		dots.forEach(dot => dot.style.opacity = '0.5');
		dots[slideIndex - 1].style.opacity = 1;
	});

	prevBtn.addEventListener('click', () => {
		if (offset === 0) {
			offset = removeNotDigits(width) * (slides.length - 1);
		} else {
			offset -= removeNotDigits(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		if (slides.length < 10) {
			currentNum.textContent = `0${slideIndex}`;
		} else {
			currentNum.textContent = slideIndex;
		}

		dots.forEach(dot => dot.style.opacity = '0.5');
		dots[slideIndex - 1].style.opacity = 1;
	});

	dots.forEach(dot => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = removeNotDigits(width) * (slideTo - 1);
			slidesField.style.transform = `translateX(-${offset}px)`;

			if (slides.length < 10) {
				currentNum.textContent = `0${slideIndex}`;
			} else {
				currentNum.textContent = slideIndex;
			}

			dots.forEach(dot => dot.style.opacity = '0.5');
			dots[slideIndex - 1].style.opacity = 1;
		});
	});
}

slider({
	container: '.offer__slider',
	slide: '.offer__slide',
	nextArrow: '.offer__slider-next',
	prevArrow: '.offer__slider-prev',
	totalCounter: '#total',
	currentCounter: '#current',
	wrapper: '.offer__slider-wrapper',
	field: '.offer__slider-inner'
});
