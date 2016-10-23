var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
	document.addEventListener("deviceready", this.load, false);
    },
    load: function() {
	navigator.spashscreen.hide();
    }
};

app.initialize();
