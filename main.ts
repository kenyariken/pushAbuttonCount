let counter = 0
/**
 * Aボタンを押したら数字が1増えるプログラム
 */
input.onButtonPressed(Button.A, function () {
    // カウンターを６増やす
    counter += 7
    // 今の数字を表示
    basic.showNumber(counter)
})
