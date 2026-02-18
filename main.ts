input.onButtonPressed(Button.A, function () {
    basic.showString("Linux")
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # # . # #
        # # . # #
        `)
    basic.showString("You a very good")
})
console.log("You go to good world")
basic.showLeds(`
    . # # # .
    # . . . #
    # . # . #
    # . . . #
    . # # # .
    `)
