control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_D_DOWN, function () {
    jobb_motor = 1
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_B_DOWN, function () {
    bal_motor = 1
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_B_UP, function () {
    bal_motor = 0
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_D_UP, function () {
    jobb_motor = 0
})
let bal_motor = 0
let jobb_motor = 0
bluetooth.startLEDService()
jobb_motor = 0
bal_motor = 0
let sebesseg = 140
let kanyaradó_sebesség = 80
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
    if (bal_motor == 1 && jobb_motor == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, sebesseg)
    } else {
        if (bal_motor == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, kanyaradó_sebesség)
        } else {
            maqueen.motorStop(maqueen.Motors.M1)
        }
        if (jobb_motor == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, kanyaradó_sebesség)
        } else {
            maqueen.motorStop(maqueen.Motors.M2)
        }
    }
})
