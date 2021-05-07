function TimeToShow () {
    if (Time > 0) {
        Time = Time - 1
        _4digit.show(Time)
    } else {
        EndFonction()
    }
}
blockytalky.onReceivedNumber(function (key, value) {
    if (key == "TimeToChange") {
        Time = value
    }
})
function EndFonction () {
    _4digit.show(8888)
    music.playMelody("G A G A G A G A ", 500)
}
function TimeCalculator () {
    if (start == 1) {
        temps += 1
        basic.pause(1000)
    }
}
blockytalky.onReceivedString(function (key, receivedString) {
	
})
let eau = 0
let temps = 0
let Time = 0
let _4digit: grove.TM1637 = null
let start = 0
let ShowerTime = 900
start = 0
ShowerTime = 5
_4digit = grove.createDisplay(DigitalPin.P2, DigitalPin.P16)
Time = ShowerTime
basic.forever(function () {
    eau = pins.analogReadPin(AnalogPin.P1)
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
