chrome.app.runtime.onLaunched.addListener(function(){

	var win = chrome.app.window.create('index.html', {
		width: 1000,
		height: 700,
		minWidth: 900,
		minHeight: 600,
		left: 500,
		top: 500
	});
	
});