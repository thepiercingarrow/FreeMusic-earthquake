function dbg(str) {
    console.log(str); // comment out to disable debugging messages
}

function encodeB64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
		return String.fromCharCode('0x' + p1);
	    }));
}

function downloadFile(downloadURI, path, save) {
    new FileTransfer().download(uri, path, onDownloadSuccess, onDownloadError);
    function onDownloadSuccess(entry) {
	alert("download complete: " + entry.toURL());
	// then hide the download progress screen
	if (save)
	    
    }
    function onDownloadError(error) {
	alert("download error source " + error.source + '<br>' +
	      "download error target " + error.target + '<br>' +
	      "error code" + error.code);
	// hide download progress screen
    }
    return path;
}

function downloadURL(URL, path, save) {
    return downloadFile(encodeURI(URL), path + encodeB64(URL) + '.mp3', save)
}
