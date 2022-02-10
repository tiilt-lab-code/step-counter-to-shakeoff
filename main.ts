input.onButtonPressed(Button.A, function () {
    basic.showNumber(final_step)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 2; index++) {
        basic.showNumber(index)
    }
    basic.showString("Go")
    step = 0
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
    }
    final_step = step
    basic.showString("X")
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    step += 1
})
let step = 0
let final_step = 0
basic.showString("A+B to start")
basic.forever(function () {
	
})
