//git add ___    , git commit -m 1 
//app.get(()=>{})

const express = require('express')
var app = express()


app.get('/:input', (req,res) => {
    res.send(req,params.inout)
})


app.get('/webhook', (req, res) => {
    // push blockgit
    let msg = 'Hello World!'
    push(msg)
    res.send(msg)
  })