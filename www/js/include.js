function dbg(str) {
    console.log(str); // comment out to disable debugging messages
}

function encodeB64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
		return String.fromCharCode('0x' + p1);
	    }));
}

function downloadFile(uri, file_path, onSucc, onErr) {
    // show download progress screen
    new FileTransfer().download(uri, file_path, onSucc, onErr);
    // hide download progress screen
}

var db = openDatabase('files', '', 'files', 2 * 1024 * 1024);

function getDbSize(func) {
    db.transaction(tx => {
	tx.executeSql('SELECT * FROM FILES', [], (tx, results) => {
	    func(results.rows.length);
	});
    });
}
