var name_field = document.getElementById('name-field');
var url_field = document.getElementById('url-field');
var READY = false;

function downloadMusic(URL, name) {
    var file_path = 'cdvfile://localhost/persistent/' + encodeB64(URL);
    if (localStorage.getItem(name))
	if (!confirm("Song name already exists! Replace '" + name + "'?")) {
	    alert("Download cancelled.");
	    return;
	}
    downloadFile(encodeURI(URL), file_path,
		 entry => localStorage.setItem(name, file_path),
		 error => alert("download error code" + error.code));
}

document.addEventListener("deviceready", () => {
    READY = true;
    // downloadMusic("https://ptpb.pw/3W4j.mp3", 'Rocky Mountain High');
});

document.getElementById('download-button').addEventListener("click", () => {
    if (!READY) {
	alert('Device not ready!');
	return;
    }
    downloadMusic(url_field.value, name_field.value);
});
