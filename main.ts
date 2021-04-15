input.onPinPressed(TouchPin.P0, function () {
    led.stopAnimation()
    Step += 1
    if (Step == 11) {
        Step = 0
    }
    turnOffAll()
    if (Step == 0) {
    	
    } else if (Step == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (Step == 2) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (Step == 3) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else if (Step == 4) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else if (Step == 5) {
        pins.digitalWritePin(DigitalPin.P12, 1)
    } else if (Step == 6) {
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else if (Step == 7) {
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else if (Step == 8) {
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else if (Step == 9) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else if (Step == 10) {
        turnOnAll()
    } else {
    	
    }
})
function turnOnAll () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P5, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function turnOffAll () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
let Step = 0
Step = 0
turnOffAll()
basic.forever(function () {
    basic.showNumber(Step)
})
