microbit_CAR.setPixelRGB(microbit_CAR.Lights.All, RGBColors.Off)
microbit_CAR.showLight()
basic.forever(function () {
    serial.writeValue("left", microbit_CAR.LightSensorValueGet(microbit_CAR.LightSensorIndex.LEFT))
    serial.writeValue("right", microbit_CAR.LightSensorValueGet(microbit_CAR.LightSensorIndex.RIGHT))
    serial.writeValue("distance", microbit_CAR.UltraSensorValueGet())
    basic.pause(1000)
})
