input.onButtonPressed(Button.A, function () {
    Multicolor.showRainbow(350, 127)
})
function TimeCalculator () {
    if (start == 1) {
        temps += 1
        basic.pause(1000)
        if (temps == 1) {
            temps = 0
            ColorGestion()
        }
    }
}
function ColorGestion () {
    Multicolor.setPixelColor(led2, couleur)
    Multicolor.show()
    led2 += 1
    basic.showNumber(led2)
    if (led2 == 3) {
        couleur = neopixel.rgb(51, 204, 0)
    }
    if (led2 == 6) {
        couleur = neopixel.rgb(102, 204, 0)
    }
    if (led2 == 9) {
        couleur = neopixel.rgb(153, 204, 0)
    }
    if (led2 == 15) {
        couleur = neopixel.rgb(204, 204, 0)
    }
    if (led2 == 18) {
        couleur = neopixel.rgb(204, 153, 0)
    }
    if (led2 == 21) {
        couleur = neopixel.rgb(204, 102, 0)
    }
    if (led2 == 24) {
        couleur = neopixel.rgb(204, 51, 0)
    }
    if (led2 == 27) {
        couleur = neopixel.rgb(204, 0, 0)
    }
}
let eau = 0
let couleur = 0
let Multicolor: neopixel.Strip = null
let led2 = 0
let start = 0
let temps = 0
temps = 0
start = 0
led2 = 0
Multicolor = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
for (let index = 0; index < 30; index++) {
    Multicolor.setPixelColor(led2, neopixel.rgb(0, 0, 0))
    led2 += 1
}
led2 = 0
couleur = neopixel.rgb(0, 255, 0)
basic.forever(function () {
    eau = pins.analogReadPin(AnalogPin.P0)
    if (eau <= 450) {
        start = 1
    } else {
        start = 0
        basic.showNumber(eau)
    }
    TimeCalculator()
})
