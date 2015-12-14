$(document).ready(function() {
	var audio = document.getElementsByTagName('audio')[0]

	// detect new page and store the time

    if (sessionStorage.getItem('musicTime') > 0 && sessionStorage.getItem('musicTime') < (audio.duration-5)) {
    	audio.currentTime = sessionStorage.getItem('musicTime')
    } else {
    	audio.currentTime = 0
    }
    audio.play()
})

function music() {
	$('div#audio').toggleClass('active')
}

$('a').on('click', function() {
	var audio = document.getElementsByTagName('audio')[0]
	var link = $(this).attr('href')
	var time = audio.currentTime
	sessionStorage.setItem('musicTime', time)
})