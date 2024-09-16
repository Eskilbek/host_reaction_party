enum RadioMessage {
    message1 = 49434
}
function PressB () {
    for (let index = 0; index < 6; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `, 150)
basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # # .
            `, 150)
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 999) {
        basic.clearScreen()
        basic.showString("GAME!")
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    NyRunda = 1
    basic.pause(randint(2000, 6000))
    Minispel = list._pickRandom()
    radio.sendString("Ny runda!")
    if (Minispel == 1) {
        PressA()
    } else if (Minispel == 2) {
        PressB()
    } else if (Minispel == 3) {
        AB()
    } else if (Minispel == 4) {
        Shake()
    } else if (Minispel == 5) {
        ArrowL()
    } else if (Minispel == 6) {
        ArrowR()
    }
})
function ArrowL () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `, 100)
basic.showLeds(`
        . . # . .
        . # . . .
        # # # # .
        . # . . .
        . . # . .
        `, 100)
basic.showLeds(`
        . . # . .
        . # . . .
        # # # . .
        . # . . .
        . . # . .
        `, 100)
basic.showLeds(`
        . . . . .
        . # . . .
        # # . . .
        . # . . .
        . . . . .
        `, 100)
basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `, 100)
basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `, 100)
basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `, 100)
basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        . . . . .
        . . . . .
        `, 100)
basic.showLeds(`
        . . # . .
        . . . . .
        . . # # #
        . . . . .
        . . # . .
        `, 100)
basic.showLeds(`
        . . # . .
        . # . . .
        . # # # #
        . # . . .
        . . # . .
        `, 100)
basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `, 100)
}
function Shake () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
        . . . . .
        . # . . .
        # . # . #
        . . . # .
        . . . . .
        `, 100)
basic.showLeds(`
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        `, 100)
basic.showLeds(`
        . . . . .
        . . . # .
        # . # . #
        . # . . .
        . . . . .
        `, 100)
basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        `, 100)
basic.showLeds(`
        . . . . .
        . # . . .
        # . # . #
        . . . # .
        . . . . .
        `, 100)
    }
}
function AB () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `, 150)
basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `, 150)
    }
}
function ArrowR () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `, 100)
basic.showLeds(`
        . . # . .
        . . . # .
        . # # # #
        . . . # .
        . . # . .
        `, 100)
basic.showLeds(`
        . . # . .
        . . . # .
        . . # # #
        . . . # .
        . . # . .
        `, 100)
basic.showLeds(`
        . . . . .
        . . . # .
        . . . # #
        . . . # .
        . . . . .
        `, 100)
basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `, 100)
basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `, 100)
basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `, 100)
basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `, 100)
basic.showLeds(`
        . . # . .
        . . . . .
        # # # . .
        . . . . .
        . . # . .
        `, 100)
basic.showLeds(`
        . . # . .
        . . . # .
        # # # # .
        . . . # .
        . . # . .
        `, 100)
basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `, 100)
}
radio.onReceivedValue(function (name, value) {
    if (NyRunda == 1) {
        if (value == Minispel) {
            radio.sendValue(name, 111)
            NyRunda = 0
        }
        if (value != Minispel) {
            radio.sendValue(name, 222)
        }
    }
})
function PressA () {
    for (let index = 0; index < 6; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `, 150)
basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `, 150)
    }
}
let Minispel = 0
let NyRunda = 0
let list: number[] = []
basic.clearScreen()
let gameOver = 0
radio.setGroup(18)
list = [
1,
2,
3,
4,
5,
6
]
