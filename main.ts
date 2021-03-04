input.onButtonPressed(Button.A, function () {
    Multicolor.showRainbow(350, 127)
})
function TimeCalculator () {
    if (start == 1) {
        temps += 1
        basic.pause(1000)
    }
}
input.onButtonPressed(Button.B, function () {
    let eau = 0
    Multicolor.showRainbow(1, pins.map(
    eau,
    0,
    50,
    100,
    200
    ))
})
let Multicolor: neopixel.Strip = null
let start = 0
let temps = 0
start = 0
Multicolor = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
basic.forever(function () {
    TimeCalculator()
})
