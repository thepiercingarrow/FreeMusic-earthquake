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
	var song = play_song('');
    });
