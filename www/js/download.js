var READY = false;

function downloadMusic(meta) {
    requestFileSystem(LocalFileSystem.PERSISTENT, 0, fs => {
	fs.root.getDirectory('cdvfile://localhost/persistent/', { create: true }, dir => {
	    dir.getDirectory('songs', { create: true });
	});
    });
    meta.file_path = 'cdvfile://localhost/persistent/songs/' + encodeB64(JSON.stringify(meta));
    dbg(meta);
    downloadFile(encodeURI(meta.url), meta.file_path,
		 entry => insertSong(meta),
		 error => alert("download error code: " + error.code));
}

document.addEventListener("deviceready", () => {
    READY = true;
});

$('download-button').addEventListener("click", () => {
    if (!READY) {
	alert('Device not ready!');
	return;
    }
    if ($('url-field').value == '') {
	alert('Please enter a url.');
	return;
    }
    downloadMusic({
	url: $('url-field').value,
	title: $('title-field').value,
	artist: $('artist-field').value
    });
});
