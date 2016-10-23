alert(IS_IOS);

function encodeb64(string) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
		return String.fromCharCode('0x' + p1);
	    }));
}

function downloadFile(downloadURI) {
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(downloadURI);
    var fileURL = "cdvfile://localhost/persistent/" + encodeb64(downloadURI);

    function onDownloadSuccess(entry) {
	console.log("download complete: " + entry.toURL());
    }

    function onDownloadError(error) {
	console.log("download error source " + error.source);
	console.log("download error target " + error.target);
	console.log("upload error code" + error.code);
    }

    fileTransfer.download(uri, DOWNLOAD_PATH, onDownloadSuccess, onDownloadError);
    return fileTransfer;
}

alert('downloadFile("http://www.stephaniequinn.com/Music/Pachelbel%20-%20Canon%20in%20D%20Major.mp3")');

downloadFile("http://www.stephaniequinn.com/Music/Pachelbel%20-%20Canon%20in%20D%20Major.mp3");
