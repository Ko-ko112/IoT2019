/*
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
  let msg = 'Hi!'
  push(msg)
  res.send(msg)
})


// Reply
app.post('/webhook', (req, res) => {
  // reply block
  let reply_token = req.body.events[0].replyToken
  let msg = req.body.events[0].message.text
    if(msg.slice(0,3) == get){
        data.find({age:{$eq:msg.slice(3)}}).then((docs)=>{
          let msg_send = 'SID : ' + docs[0].s_id + '\nName: ' + docs[0].name
          console.log(docs)
            reply(reply_token, msg_send)
        })  
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

app.listen(process.env.PORT || port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

*/

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    reply(reply_token)
    res.sendStatus(200)
})
app.listen(port)
function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer AhSpmjQhLRScfIWaeDHx0rCMLlEBVsC/VrdQ1J+AWx9ecNtt4Bm7lKNaRimu0/GgnZvk5YkPyjuAmtwyEcP71HS3BUCcWlty6wf1+jlWB7ubaWor+ZmrUcmZ5g6OeLIXa9n5qaxDEXHKoPcnq5YDcAdB04t89/1O/w1cDnyilFU='
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: 'Hello'
        },
        {
            type: 'text',
            text: 'How are you?'
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}

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









/*------------------------------------------------------------------------*/
/*
var dataSchema= new Schema({
  s_id:{type:String, require:true, unique:true},
  name:{type:String, require:true},
  age:{type:String, require:true}
})

var data = mongoose.model('Student_data', dataSchema)    //ตัวแปร data เพื่อใช้ app.get

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

app.get('/getbyage/:age1',(req,res)=>{
    data.find({age:{$gt:paraseInt(req.params.age1)}}).then((docs)=>{
        res.send(docs)
    })
})

app.get('/delete',(req,res)=>{
    data.remove({},()=>{
        res.send('Drop compt=lete!')
    })
})

app.post('/postdata',(req,res)=>{
    let buffer = new data({
      sid : req.body.s_id,
      name : req.body.name,
      age : req.body.age
    })
    buffer.save().then((docs)=>{
      res.send(docs)
    },(err)=>{
        res.send(err)
    })
})

*/