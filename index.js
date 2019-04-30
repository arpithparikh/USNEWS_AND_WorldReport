let express = require('express');
let app = express();


/**
 * @requires maxv_alue and word
 *@author arpitparikh
 * @returns {Promise<Array>}
 *
 */
app.get('/api', async(req, res)=> {
    let maxNumber = req.query.max_value;
    let word      = req.query.word;
    let response  = {};


    if(maxNumber == undefined || maxNumber == null || maxNumber == "" || word == undefined || word == null || word == ""){

        response = {
            statusCode: 400,

        };
        res.send(response);

    }else{

    let batch_promises = [];
    for(let i = 1 ; i <= maxNumber ;i++){
            batch_promises.push(checkDivisibleOrNot(i,word))
    }
    let results = await Promise.all(batch_promises);
    let filtered = results.filter(function (el) {
        return el != null;
    });
    let result =   {"status": "ok", "numbers": filtered};
    response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
        },
        body: result
    };
    res.send(response);

    }
});



// check Divisible
function checkDivisibleOrNot(number,word){
    let divider = 1;
    if(word == "fizz"){
        divider = divider * 3;
    }else if(word == "buzz"){
        divider = divider * 5;
    }else if(word == "fizzbuzz") {
        divider = divider * 15;
    }
    if(number%divider == 0){
        return number;
    }else{
        return null;
    }
}

console.log("API server started on port 8080")
app.listen(8080);