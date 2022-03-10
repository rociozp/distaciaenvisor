let distancia = 0
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.showString("" + (distancia))
    if (distancia < 60) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 5)
        basic.pause(200)
    }
    if (distancia < 10) {
        basic.showString("" + (distancia))
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(500)
        basic.showLeds(`
            # # # . #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
    }
})
