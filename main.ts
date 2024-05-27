let Ruido = 0
input.onButtonPressed(Button.A, function () {
    let ruido_alto = 0
    basic.showString("" + (ruido_alto))
})
input.onButtonPressed(Button.B, function () {
    Ruido = 1
})
basic.forever(function () {
    if (input.soundLevel() > 100) {
        Ruido += 1
    }
    basic.showString("" + (Ruido))
    basic.pause(100)
})
