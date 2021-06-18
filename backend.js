var fs = require('fs');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

const app = express();





app.get('/', (req, res)=>{
	app.use(express.static(__dirname))
	res.status(200)
	res.sendFile(__dirname + '/jd.html')
})



app.get('/login', (req, res)=>{
	app.use(express.static(__dirname + '/Вход'))
	res.status(200)
	res.sendFile(__dirname + '/Вход/login.html')
})


app.get('/signup', (req, res)=>{
	res.status(200)
	app.use(express.static(__dirname + '/регистрация'))
	res.sendFile(__dirname + '/регистрация/registr.html')
})

app.get('/choose', (req, res)=>{
	res.status(200)
	app.use(express.static(__dirname + '/Выбор места'))
	res.sendFile(__dirname + '/Выбор места/choose.html')
})




app.listen(3000, (err)=>{
	console.log('Сервер запущен ' + PORT)
	console.log(err)
})

