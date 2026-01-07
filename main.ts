let counter = 0
let running = true

/**
 * ずっとブロック（forever）内で1ずつカウントアップします
 */
basic.forever(function () {
    if (running) {
        counter += 1
        basic.showNumber(counter)
    }
    // カウントの速さ（ミリ秒）。必要に応じて調整してください。
    basic.pause(1000)
})

/**
 * Aボタンを押したらカウントを止める
 */
input.onButtonPressed(Button.A, function () {
    running = false
})

/**
 * Bボタンを押したらカウントを0にリセット
 */
input.onButtonPressed(Button.B, function () {
    counter = 0
    basic.showNumber(counter)
})

/**
 * A+Bボタンで再びカウントを始める
 */
input.onButtonPressed(Button.AB, function () {
    running = true
})
