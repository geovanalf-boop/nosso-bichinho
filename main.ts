basic.forever(function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    music.play(music.stringPlayable("C5 B A B G E A - ", 210), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        # # # # #
        . # . # .
        `)
    music.play(music.stringPlayable("C5 B A B G E A - ", 210), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    music.play(music.stringPlayable("C5 B A B G E A - ", 210), music.PlaybackMode.UntilDone)
})
