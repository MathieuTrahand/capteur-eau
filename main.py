def on_button_pressed_a():
    Multicolor.show_rainbow(350, 127)
input.on_button_pressed(Button.A, on_button_pressed_a)

def TimeCalculator():
    global temps
    if start == 1:
        temps += 1
        basic.pause(1000)
def LedFlashing():
    while True:
        range2.show_color(neopixel.rgb(255, 0, 0))
        basic.pause(1000)
        range2.show_color(neopixel.rgb(0, 0, 0))
        basic.pause(1000)
def ColorGestion():
    global led2, couleur
    Multicolor.set_pixel_color(led2, couleur)
    Multicolor.show()
    led2 += 1
    basic.show_number(led2)
    if led2 == 3:
        couleur = neopixel.rgb(51, 204, 0)
    if led2 == 6:
        couleur = neopixel.rgb(102, 204, 0)
    if led2 == 9:
        couleur = neopixel.rgb(153, 204, 0)
    if led2 == 15:
        couleur = neopixel.rgb(204, 204, 0)
    if led2 == 18:
        couleur = neopixel.rgb(204, 153, 0)
    if led2 == 21:
        couleur = neopixel.rgb(204, 102, 0)
    if led2 == 24:
        couleur = neopixel.rgb(204, 51, 0)
    if led2 == 27:
        couleur = neopixel.rgb(204, 0, 0)
    if led2 == 30:
        LedFlashing()
eau = 0
couleur = 0
range2: neopixel.Strip = None
Multicolor: neopixel.Strip = None
led2 = 0
start = 0
ShowerTime = 900
temps = 0
start = 0
led2 = 0
Multicolor = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
range2 = Multicolor.range(0, 30)
range2.show_color(neopixel.rgb(0, 0, 0))
led2 = 0
couleur = neopixel.rgb(0, 255, 0)

def on_forever():
    global eau, start, temps
    eau = pins.analog_read_pin(AnalogPin.P0)
    if eau <= 450:
        start = 1
        if temps == 3:
            temps = 0
            ColorGestion()
    else:
        start = 0
        basic.show_number(eau)
basic.forever(on_forever)

def on_forever2():
    TimeCalculator()
basic.forever(on_forever2)
