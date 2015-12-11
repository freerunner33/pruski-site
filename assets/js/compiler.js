$(document).ready(function() {
	$.getJSON("http://jsonip.com/?callback=?", function (data) {
        alert('Welcome user at IP address: ' + data.ip);
    })
})