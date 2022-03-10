let distancia = 0
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.showString("" + (distancia))
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 15)
    basic.pause(500)
    if (distancia < 35) {
        basic.showString("" + (distancia))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 15)
        maqueen.motorStop(maqueen.Motors.M2)
        basic.pause(1000)
    }
})
