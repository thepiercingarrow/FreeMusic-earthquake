function play_song(path) {
    var media = new Media(path, () => {
	    dbg("Song finished.");
	},
	() => {
	    dbg("Error playing song!");
	}
	);
    media.play();
    return media;
}


document.addEventListener("deviceready", () => {
	// do stuff
	var song = play_song('cdvfile://localhost/persistent/aHR0cHM6Ly93d3cueW91dHViZWlubXAzLmNvbS9kb3dubG9hZC9nZXQvP2k9cW1UQVRBTXFPZG1SQ1B2M1Viem1tbjZsbjR3YUxTWnc5TTFEWSUyRndhVWFhWVpqeko3cktwRm4wSjVCVTc4VXFjJTJGTmt4N1VMM1M3Z2VwM2xMckE2M2NRJTNEJTNE.mp3');
    });
