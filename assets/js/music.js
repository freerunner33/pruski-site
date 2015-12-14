$(document).ready(function() {
	var audio = document.getElementsByTagName('audio')[0]

	// detect new page and store the time

    if (sessionStorage.getItem('musicTime') > 0 && sessionStorage.getItem('musicTime') < (audio.duration-5)) {
    	audio.currentTime = sessionStorage.getItem('musicTime')
    } else {
    	audio.currentTime = 0
    }
    if (sessionStorage.getItem('musicPaused') == 'true') {
    	audio.pause()
    } else {
    	audio.play()
    }
})

function music() {
	$('div#audio').toggleClass('active')
}

$('a').on('click', function() {
	var audio = document.getElementsByTagName('audio')[0]
	var time = audio.currentTime
	var p = audio.paused
	sessionStorage.setItem('musicTime', time)
	sessionStorage.setItem('musicPaused', p)
})