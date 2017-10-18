var screenW = screen.width;
var screenH = screen.height;
var goTop = document.getElementById('goTop');
var mainContent = document.getElementById('main');


window.onscroll = function () {
	if((document.body.scrollTop > screenH) || (document.documentElement.scrollTop > screenH)) {
		document.getElementById('goTop').classList.add('is-active');
	} else {
		document.getElementById('goTop').classList.remove('is-active');
	}
}

mainContent.onscroll = function () {
	if((mainContent.scrollTop > 200) || (mainContent.scrollTop > 200)) {
		document.getElementById('goTop').classList.add('is-active');
	} else {
		document.getElementById('goTop').classList.remove('is-active');
	}
}


goTop.addEventListener('click', function() {
	if (screenW > 640) {
		mainContent.scrollTop = 0;
	}	else {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
});