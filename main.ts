input.onButtonPressed(Button.A, function () {
    number = randint(1, 10)
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    wins = 0
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        wins += 1
        basic.showNumber(wins)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
let number = 0
let wins = 0
wins = 0
