function downloadFile(downloadURI, path, add) {
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(downloadURI);

    function onDownloadSuccess(entry) {
	dbg("download complete: " + entry.toURL());
	if (add)
	    ; // store key for file
    }

    function onDownloadError(error) {
	dbg("download error source " + error.source);
	dbg("download error target " + error.target);
	dbg("upload error code" + error.code);
    }

    fileTransfer.download(uri, path + encodeB64(downloadURI) + '.mp3' + , onDownloadSuccess, onDownloadError);
    return fileTransfer;
}

function cURL(url) {
    downloadFile(url, cordova.file.cacheDirectory);
    
}

function getLink(youtubeURL) {
    var text = cURL('https://www.youtubeinmp3.com/fetch/?format=text&video=' + youtubeURL);
    if (text.match('not found'))
	dbg('Youtube URL not found: ' + youtubeURL);
    else
	return text.replace('Title: .*<br\/>Length: .*<br\/>Link: ', '');
}

