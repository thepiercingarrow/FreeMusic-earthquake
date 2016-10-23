function dbg(str) {
    console.log(str); // comment out to disable debugging messages
}

function encodeB64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
		return String.fromCharCode('0x' + p1);
	    }));
}

function downloadFile(downloadURI, path) {
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(downloadURI);

    function onDownloadSuccess(entry) {
	dbg("download complete: " + entry.toURL());
    }

    function onDownloadError(error) {
	dbg("download error source " + error.source);
	dbg("download error target " + error.target);
	dbg("upload error code" + error.code);
    }

    fileTransfer.download(uri, path + encodeB64(downloadURI) + '.mp3', onDownloadSuccess, onDownloadError);
    return fileTransfer;
}
