const Router = require('express').Router();

function checkPrime(number) {
    for (let i = 2; i <= number/2; i++) {
        if(number%i == 0) {
            return false;
        }
    }
    return true;
}

Router.get('/check/:param', (req, res, nex) => {
    let begin = parseInt(req.params.param);
    isPrime = checkPrime(begin)
    let message;
    if(isPrime) {
        message = 'prime'
    } else if(begin%2 == 0) {
        message = ('even')
    } else {
        message = ('odd')
    }
    let result = { number : begin, type : message }
    let resultJSON = JSON.stringify(result);
    res.send(resultJSON);
});

Router.get('/check/:param/:param2', (req, res, nex) => {
    let begin = parseInt(req.params.param);
    let end = parseInt(req.params.param2);

    if (end<begin) {
        res.send({"message":"please input correctly"});
        return;
    }

    let result = [];
    let message;

    for (let i = begin; i <= end; i++) {
        isPrime = checkPrime(i)
        if(isPrime) {
            message = 'prime'
        } else if(i%2 == 0) {
            message = 'even'
        } else {
            message = 'odd'
        }

        result.push({number : i, type : message})
    }

    // let resultJSON = JSON.stringify(result);
    // res.send(resultJSON);
    res.json(result)
});

module.exports = Router;