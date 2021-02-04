let eau = 0
let Multicolor = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
basic.forever(function () {
    eau = pins.analogReadPin(AnalogPin.P0)
    if (eau <= 450) {
        Multicolor.showRainbow(1, pins.map(
        eau,
        0,
        3823,
        0,
        360
        ))
    } else {
        Multicolor.showRainbow(1, pins.map(
        eau,
        0,
        50,
        100,
        200
        ))
    }
})
