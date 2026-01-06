// Aボタンを押したら数字が1増えるプログラム
let counter = 0
input.onButtonPressed(Button.A, function () {
    counter += 5 // カウンターを５増やす
    basic.showNumber(counter)　// 今の数字を表示
})
