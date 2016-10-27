document.addEventListener("deviceready", load);

document.getElementById('listen-link').addEventListener("click", e => window.location.replace('listen/index.html'));
document.getElementById('download-link').addEventListener("click", e => window.location.replace('download.html'));

function load() {
    if (StatusBar.isVisible) {
	StatusBar.hide();
    }
    navigator.splashscreen.hide();
}
