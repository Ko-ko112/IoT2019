//git add -A    , git commit -m 1 
//app.get(()=>{})

const express = require('express')
var app = express()

var stdDB = mongoose.model('student_database',stdSchema)



app.get('/:input', (req,res) => {
    res.send(req,params.inout)
})


app.get('/webhook', (req, res) => {
    // push blockgit
    let msg = 'Hello World!'
    push(msg)
    res.send(msg)
  })


  http://dummy.restapiexample.com/api/v1/employee/4484
/*   ----------------------------------------------------------------------------------- */


  app.get('/geteq', (req,res) => {
    stdDB.find({id:{$eq:req.params.inout}}).then((docs)=>{
        res.send(docs)
    },(err)=>{
        res.status(404).send(err)
    })
})


app.get('/getgt', (req,res) => {
    stdDB.find({id:{$gt:req.params.input}}).then((docs)=>{
        res.send(docs)
    },(err)=>{
        res.status(404).send(err)
    })
})


app.get('/getgte', (req,res) => {
    stdDB.find({id:{$gte:req.params.input}}).then((docs)=>{
        res.send(docs)
    },(err)=>{
        res.status(404).send(err)
    })
})



app.get('/getbtw/:min/:max', (req,res) => {
    stdDB.find({id:{$gte:req.params.min , $gte:req.params.max }}).then((docs)=>{
        res.send(docs)
    },(err)=>{
        res.status(404).send(err)
    })
})
