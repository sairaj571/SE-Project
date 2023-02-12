var express = require('express');
var router = express.Router();

router.get('/:firstNumber/and/:secondNumber', function(req, res, next) {
    console.log(req.params.firstNumber + req.params.secondNumber);
    let number1 = parseInt(req.params.firstNumber),
        number2 = parseInt(req.params.secondNumber);
    res.json({"Sum_of_Numbers" : number1 + number2});
});

module.exports = router;