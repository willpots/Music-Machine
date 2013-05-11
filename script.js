$(document).ready(function() {
	$(document).keydown(function(event) {
		if (event.keyCode == 81) {
			$("#button1").addClass("active");
			$("#audio-1")[0].currentTime = 0;
			$("#audio-1")[0].play();
		} else if (event.keyCode == 87) {
			$("#button2").addClass("active");
			$("#audio-2")[0].currentTime = 0;
			$("#audio-2")[0].play();
		} else if (event.keyCode == 69) {
			$("#button3").addClass("active");
			$("#audio-3")[0].currentTime = 0;
			$("#audio-3")[0].play();
		} else if (event.keyCode == 82) {
			$("#button4").addClass("active");
			$("#audio-4")[0].currentTime = 0;
			$("#audio-4")[0].play();
		} else if (event.keyCode == 65) {
			$("#button5").addClass("active");
			$("#audio-5")[0].currentTime = 0;
			$("#audio-5")[0].play();
		} else if (event.keyCode == 83) {
			$("#button6").addClass("active");
			$("#audio-6")[0].currentTime = 0;
			$("#audio-6")[0].play();
		} else if (event.keyCode == 68) {
			$("#button7").addClass("active");
			$("#audio-7")[0].currentTime = 0;
			$("#audio-7")[0].play();
		} else if (event.keyCode == 70) {
			$("#button8").addClass("active");
			$("#audio-8")[0].currentTime = 0;
			$("#audio-8")[0].play();
		} else if (event.keyCode == 90) {
			$("#button9").addClass("active");
			$("#audio-9")[0].currentTime = 0;
			$("#audio-9")[0].play();
		} else if (event.keyCode == 88) {
			$("#button10").addClass("active");
			$("#audio-10")[0].currentTime = 0;
			$("#audio-10")[0].play();
		} else if (event.keyCode == 67) {
			$("#button11").addClass("active");
			$("#audio-11")[0].currentTime = 0;
			$("#audio-11")[0].play();
		} else if (event.keyCode == 86) {
			$("#button12").addClass("active");
			$("#audio-12")[0].currentTime = 0;
			$("#audio-12")[0].play();
		}

	});
	$(document).keyup(function(event) {
		if (event.keyCode == 81) {
			$("#button1").removeClass("active");
		} else if (event.keyCode == 87) {
			$("#button2").removeClass("active");
		} else if (event.keyCode == 69) {
			$("#button3").removeClass("active");
		} else if (event.keyCode == 82) {
			$("#button4").removeClass("active");
		} else if (event.keyCode == 65) {
			$("#button5").removeClass("active");
		} else if (event.keyCode == 83) {
			$("#button6").removeClass("active");
		} else if (event.keyCode == 68) {
			$("#button7").removeClass("active");
		} else if (event.keyCode == 70) {
			$("#button8").removeClass("active");
		} else if (event.keyCode == 90) {
			$("#button9").removeClass("active");
		} else if (event.keyCode == 88) {
			$("#button10").removeClass("active");
		} else if (event.keyCode == 67) {
			$("#button11").removeClass("active");
		} else if (event.keyCode == 86) {
			$("#button12").removeClass("active");
		}

	});
})