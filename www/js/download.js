function downloadMusic(URL, name) {
    // show download progress screen
    var file_path = 'cdvfile://localhost/persistent/' + encodeB64(URL);
    downloadFile(encodeURI(URL), file_path,
		 entry => {
		     db.transaction(tx => {
			 tx.executeSql('CREATE TABLE IF NOT EXISTS FILES (id, name, path)');
			 console.log(getDbSize());
			 getDbSize(size => {
			     tx.executeSql('INSERT INTO FILES VALUES (?, ?, ?)', [size + 1, name, file_path]);
			 });
		     });
		 },
		 error => {
		     alert("download error source " + error.source + '<br>' +
			   "download error target " + error.target + '<br>' +
			   "error code" + error.code);
		 });
}

document.addEventListener("deviceready", () => {
    downloadMusic("https://ptpb.pw/3W4j.mp3", 'Rocky Mountain High', true);
    // show progress screen, cancel button, etc
});
