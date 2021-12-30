let timeC = ''

const setTimeC = v => {
    timeC = v
    
    setInterval(() => {
        updateCountDown((new Date(timeC)).getTime())
    },1000)
}

const updateCountDown = v => {
    let now = new Date().getTime()

    if(v<=now) {
        document.getElementById('timerDone').setAttribute('style','display: block;')
        return
    }

	let distance = v - now

	let days = Math.floor(distance / (1000 * 60 * 60 * 24))
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds

    updateCountDown((new Date(timeC)).getTime())
}