function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function search(num, ans) {
    if (num>ans) {
        message = "Загаданное число меньше"
        return message
    } else if (num<ans) {
        message = "Загаданное число больше"
        return message
    } else {
        message = "Вы победили"
        return message
    }
}

module.exports = {
    randNum: randNum,
    search: search
};