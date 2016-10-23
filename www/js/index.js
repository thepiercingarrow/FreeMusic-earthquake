document.addEventListener("deviceready", load, false);

function load() {
    if (StatusBar.isVisible) {
	StatusBar.hide();
    }
    navigator.splashscreen.hide();
}
