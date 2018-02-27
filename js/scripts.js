window.onload = function() {


	var toggle = document.getElementById('toggle');
	var menu = document.getElementById('menu');
	var one = document.getElementById('one');
	var two = document.getElementById('two');
	var three = document.getElementById('three');
	var i = 0;
	toggle.onclick = function() {

		if (!i) {

			two.style.top = "7px";
			two.style.left = "30px";
			two.style.opacity = "0";

			one.style.top = "7px";
			one.style.height = "4px";
			one.style.transform = "rotate(45deg)";

			three.style.top = "7px";
			three.style.height = "4px";
			three.style.transform = "rotate(-45deg)";

			menu.style.opacity = "1";
			menu.style.left = "0px";

			i++;
		}

		else if(i) {

			two.style.top = "7px";
			two.style.left = "0px";
			two.style.opacity = "1";

			one.style.top = "14px";
			one.style.height = "3px";
			one.style.transform = "rotate(0deg)";

			three.style.top = "0px";
			three.style.height = "3px";
			three.style.transform = "rotate(0deg)";

			menu.style.opacity = "0";
			menu.style.left = "-1000px";

			i--;
		}
	}

// <div id="toggle">
// 				<span id="one"></span><span id="two"></span><span id=three></span>
// 			</div>

// 	#toggle {
// 	position: relative;
// 	z-index: 5;
// 	float: right;
// 	width: 25px;
// 	height: 25px;
// 	cursor: pointer;
// }
// #toggle span {display: block;position: absolute;width: 100%;height: 3px;background: #030303;transition: 0.5s;}
// #one {top: 0;}#two {left: 0;top: 7px;}#three {top: 14px;}

	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var slides = document.querySelectorAll('.section-1 .slide');
	var currentSlide = 0;
	var slideInterval = setInterval(nextSlide,3000);

	next.onclick = function() {
		nextSlide();
		clearInterval(slideInterval);
	}

	prev.onclick = function() {
		prevSlide();
		clearInterval(slideInterval);
	}

	function nextSlide() {
		autoSlide(currentSlide+1);
	}

	function prevSlide() {
		autoSlide(currentSlide-1);
	}

	function autoSlide(n) {
		slides[currentSlide].className = "slide noactive";
		currentSlide = (n+slides.length)%slides.length;
		slides[currentSlide].className = "slide active";
	}


	var photo = document.getElementById('but-photo');
	var design = document.getElementById('but-design');
	var print = document.getElementById('but-print');

	photo.onclick = function() {

		if (print.hasAttribute('class', 'active')) {
			print.classList.remove('active');
			print.classList.add('noactive');
		}

		else if (design.hasAttribute('class', 'active')) {
			design.classList.remove('active');
			design.classList.add('noactive');
		}

		photo.classList.remove('noactive');
		photo.classList.add('active');

	}

	design.onclick = function() {

		if (photo.hasAttribute('class', 'active')) {
			photo.classList.remove('active');
			photo.classList.add('noactive');
		}

		else if (print.hasAttribute('class', 'active')) {
			print.classList.remove('active');
			print.classList.add('noactive');
		}

		design.classList.remove('noactive');
		design.classList.add('active');

	}

	print.onclick = function() {

		if (design.hasAttribute('class', 'active')) {
			design.classList.remove('active');
			design.classList.add('noactive');
		}

		else if (photo.hasAttribute('class', 'active')) {
			photo.classList.remove('active');
			photo.classList.add('noactive');
		}

		print.classList.remove('noactive');
		print.classList.add('active');

	}





	var searchopen = document.getElementById('search-opener');
	var search = document.getElementById('search-mob');
	var s = 0;
	searchopen.onclick = function() {
		if (!s) {
			search.style.width = '100px';
			s++;
		}

		else if(s) {
			search.style.width = '30px';
			s--;
		}
		
	}




}