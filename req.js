const request = require('request')

request.get({
    headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json'
    },
    url: 'http://dummy.restapiexample.com/api/v1/employee/2574',
    json: true
}, function(error, response,body){

})