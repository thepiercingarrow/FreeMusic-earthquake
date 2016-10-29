document.addEventListener("deviceready", load);

$('listen-link').addEventListener("click", e => {
    window.location.replace('listen/index.html');
});

$('download-link').addEventListener("click", e => {
    window.location.replace('download.html');
});

function load() {
    if (StatusBar.isVisible) {
	StatusBar.hide();
    }
    navigator.splashscreen.hide();
}
