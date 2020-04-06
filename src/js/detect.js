$(document).ready(function(){

	var width = $(window).width();
	var urlnow = window.location.href;
	console.log(width);

	if (width >= 1151) {
		if (!urlnow.match("normal")){
			location.href = "normal.html";
		}
	}

	else if (width <= 1150) {
		if (!urlnow.match("mobile")){
			location.href = "mobile.html";
		}
	}

});

