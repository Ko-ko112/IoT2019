var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()

app.post('/webhook', (req, res) => res.sendStatus(200))
app.listen(port)

app.use(bodyParser.json())

app.set('port', (process.env.PORT || 4000))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

