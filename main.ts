let eau = 0
basic.forever(function () {
    eau = pins.analogReadPin(AnalogPin.P0)
    if (eau <= 450) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
