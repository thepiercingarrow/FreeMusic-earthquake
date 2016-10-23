var IS_IOS = true;
var READY = false;
var DOWNLOAD_PATH;


document.addEventListener("deviceready", () => {
	READY = true;
	DOWNLOAD_PATH = cordova.file.documentsDirectory;
    });
