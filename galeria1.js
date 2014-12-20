var $leftPhoto = document.querySelector('.photosLContainer');
var $rightPhoto = document.querySelector('.photosRContainer');
var numOfPhotos = 10;
var counter = 0;


$leftPhoto.addEventListener("click", prevPhoto);
$rightPhoto.addEventListener("click", nextPhoto);

function nextPhoto() {
	counter+=1;
	if(counter===numOfPhotos){
		counter=0;
	}
	showPhoto();
}

function prevPhoto () {
	counter-=1;
	if(counter===-1){
		counter=numOfPhotos-1;
	}
	showPhoto();
}

function showPhoto () {
	var photosL = $('.photosLContainer img');

	photosL.each(function(i) {
	var photoL=$(this);
	if (counter === i) {
			photoL.css('opacity', 1);

		} else {
			photoL.css('opacity', 0);
		}
	});
		var photosC = $('.photosCContainer img');

	photosC.each(function(i) {
	var photosC=$(this);
	if (counter === i) {
			photosC.css('opacity', '1');
		} else {
			photosC.css('opacity', 0);
		}
	});
		var photosR = $('.photosRContainer img');

	photosR.each(function(i) {
	var photoR=$(this);
	if (counter === i) {
			photoR.css('opacity', 1);
		} else {
			photoR.css('opacity', 0);
		}
	});
}

document.addEventListener('keydown', KeyPress);

function KeyPress (e) {			
	var key=e.which;
		if (key === 37) {
		prevPhoto();
	} else if (key === 39) {
		nextPhoto();
	}
}
	