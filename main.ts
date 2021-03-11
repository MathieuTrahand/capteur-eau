function TimeToShow () {
	
}
function TimeCalculator () {
    if (start == 1) {
        temps += 1
        basic.pause(1000)
    }
}
let eau = 0
let temps = 0
let start = 0
let ShowerTime = 900
start = 0
basic.forever(function () {
    eau = pins.analogReadPin(AnalogPin.P0)
    if (eau <= 450) {
        start = 1
        if (temps == 1) {
            temps = 0
            TimeToShow()
        }
    } else {
        start = 0
        basic.showNumber(eau)
    }
})
basic.forever(function () {
    TimeCalculator()
})
