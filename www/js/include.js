function dbg(str) {
    console.log(str); // comment out to disable debugging messages
}

function encodeB64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode('0x' + p1)));
}

function downloadFile(uri, file_path, onSucc, onErr) {
    // show download progress screen
    new FileTransfer().download(uri, file_path, onSucc, onErr);
    // hide download progress screen
}

function createFile(name, onSucc, onErr) {
    requestFileSystem(LocalFileSystem.PERSISTENT, 0, fs => {
	fs.root.getFile(name, { create: true, exclusive: false }, onSucc, onErr);
    });
}

function localStorageToStr() {
    var files = {};
    for (var i = 0; i < localStorage.length; ++i) {
        var key = localStorage.key(i);
        var val = localStorage.getItem(key);
        files[key] = val;
    }
    return JSON.stringify(files);
}

function strToLocalStorage(str) {
    var obj = JSON.parse(str);
    for (var property in obj)
        if (obj.hasOwnProperty(property))
            localStorage.setItem(property, obj[property]);
}

function strToFile(fileEntry, str) {
    fileEntry.createWriter(fileWriter => {
	blob = new Blob([str], { type: 'text/plain' });
	fileWriter.write(blob);
    });
}

function backupLocalStorage() {
    createFile('localstoragebackup.txt',
	       entry => strToFile(entry, localStorageToStr()),
	       error => console.log(error));
}
