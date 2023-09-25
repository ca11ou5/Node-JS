const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const {randNum, search} = require("./utils");

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});

let ans, attempts

app.post('/submit', (req, res) => {
    let minV = req.body.minvalue;
    let maxV = req.body.maxvalue;
    attempts = +req.body.attempts;

    ans = randNum(+minV, +maxV)
    console.log(minV, maxV)
    console.log(ans)

    // if (!minV || !maxV || !attempts || isNaN(minV) || isNaN(maxV) || isNaN(attempts) || attempts < 1 || maxV < minV) {
    //     return res.status(400).send('Поля должны быть все заполнены числовыми значениями, кол-во попыток не может быть меньше 1, максимальное не должно быть меньше минимального')
    // }

    res.redirect('/game');
});

app.get("/game", (req, res) => {
    // if (!isNaN(attempts) || !ans || !attempts) {
    //     res.redirect("/")
    // }

    res.render('game', {att:attempts, msg:""})
})

app.post("/game", (req, res) => {
    num = req.body.number
    msg = search(num, ans)

    attempts--
    if (attempts<1){
        msg = "Вы проиграли =`(("
        ans = 0
    }

    res.render('game', {att:attempts, msg:msg})
})

//HTTP Server
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});