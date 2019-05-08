const bodyParser = require('body-parser')
const request = require('request')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 4000
var Schema = mongoose.Schema

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODE_URI || 'mongodb://localhost:27017/Mydb').then(()=>{
  console.log('@@@ Connect Success @@@')
},()=>{
  console.log('!!! Fail to connect !!!')
})

const hostname = '127.0.0.1'
const HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer AhSpmjQhLRScfIWaeDHx0rCMLlEBVsC/VrdQ1J+AWx9ecNtt4Bm7lKNaRimu0/GgnZvk5YkPyjuAmtwyEcP71HS3BUCcWlty6wf1+jlWB7ubaWor+ZmrUcmZ5g6OeLIXa9n5qaxDEXHKoPcnq5YDcAdB04t89/1O/w1cDnyilFU='
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Push
app.get('/webhook', (req, res) => {
  // push block
  let msg = 'Hello World!'
  push(msg)
  res.send(msg)
})

// Reply
app.post('/webhook', (req, res) => {
  // reply block
  let reply_token = req.body.events[0].replyToken
  let msg = req.body.events[0].message.text
    if(msg == 'Hello'){
    reply(reply_token, 'Hi!')
  }else{
    reply(reply_token, msg)
  }
  //reply(reply_token, msg)
})

function push(msg) {
  let body = JSON.stringify({
    // push body
    to: 'U6d240ea09c8ef1164f7e9a0e03379dde',
    messages: [
      {
        type: 'text',
        text: msg
      }
    ]
  })
  curl('push', body)
}

function reply(reply_token, msg) {
  let body = JSON.stringify({
    // reply body
    replyToken: reply_token,
    messages: [
      {
        type: 'text',
        text: msg
      }
    ]
  })
  curl('reply', body);
}

function curl(method, body) {
  request.post({
    url: 'https://api.line.me/v2/bot/message/' + method,
    headers: HEADERS,
    body: body
  }, (err, res, body) => {
    console.log('status = ' + res.statusCode)
  })
}

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})



var dataSchema= new Schema({
  name:{type:String, require:true, unique:false},
  year:{type:String}
})

var data = mongoose.model('data', dataSchema)

app.get('/getdata',(req,res)=>{
  data.find().then((docs)=>{
    res.send(docs)
  })
})

app.get('/getdata/:x',(req,res)=>{
  data.find({name:req.params.x}).then((docs)=>{
    res.send(docs)
  })
})

app.get('/delete',(req,res)=>{
    data.remove({},(docs)=>{
        res.send(docs)
    })
})

app.post('/postdata',(req,res)=>{
    let buffer = new data({
      name : req.body.name,
      year : req.body.year
    })
    buffer.save().then((docs)=>{
      res.send(docs)
    })
})
