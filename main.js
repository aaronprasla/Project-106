function record(){
	navigator.mediaDevices.getUserMedia({audio: true});
	classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/NW6zjWp-g/model.json', modelReady);
}

function modelReady() {
	classifier.classify(gotResults);
}

function gotResults(error, results) {
	if(error){
		console.error(error);
	} else {
		console.log(results);

		r = Math.floor(Math.random() * 255);
		g = Math.floor(Math.random() * 255);
		b = Math.floor(Math.random() * 255);

		document.getElementById('accuracy').innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + '%';
		document.getElementById('accuracy').style.color = 'rgb(' + r + ',' + g + ','+ b + ')';

		note = document.getElementById('tnote');

		if(results[0].label == 'A') {
			note.src = 'A.png';
		} else if(results[0].label == 'B') {
			note.src = 'B.png';
		} else if(results[0].label == 'C') {
			note.src = 'C.png';
		} else if(results[0].label == 'D') {
			note.src = 'D.png';
		} else if(results[0].label == 'E') {
			note.src = 'E.png';
		} else if(results[0].label == 'F') {
			note.src = 'F.png';
		} else if(results[0].label == 'G') {
			note.src = 'G.png';
		} else if(results[0].label == 'Background Noise') {
			note.src = 'backgroundnoise.png';
		}
	}
}