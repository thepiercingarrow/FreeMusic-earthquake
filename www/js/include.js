function dbg(str) {
    console.log(str); // comment out to disable debugging messages
}

function encodeB64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode('0x' + p1)));
}

var $ = document.getElementById.bind(document);
var getfs = f => requestFileSystem(LocalFileSystem.PERSISTENT, 0, f);

function downloadFile(uri, file_path, onSucc, onErr) {
    // show download progress screen
    new FileTransfer().download(uri, file_path, onSucc, onErr);
    // hide download progress screen
}

function strToFile(file, str) {
    getfs(fs => {
	fs.root.getFile(file, { create: true, exclusive: false }, entry =>
			entry.createWriter(fileWriter => {
			    blob = new Blob([str], { type: 'text/plain' });
			    fileWriter.write(blob);
			}));
    });
}

var songs;

document.addEventListener("deviceready", retrieveSongIndex);

function retrieveSongIndex() {
    songs = new Set(JSON.parse(localStorage.getItem('songs')));
}

function saveSongIndex() {
    localStorage.setItem('songs', JSON.stringify([...songs]));
}

function insertSong(meta) {
    songs.add(meta);
    saveSongIndex();
}
