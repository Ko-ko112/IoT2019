const express = require('express')
var app = express()

//app.get(()=>{})
app.get('/:input', (req,res) => {
    res.send(req,params.inout)
})


app.get('/webhook', (req, res) => {
    // push block
    let msg = 'Hello World!'
    push(msg)
    res.send(msg)
  })