let lightsOn = false
input.onSound(DetectedSound.Loud, function () {
    lightsOn = !(lightsOn)
    if (lightsOn) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
