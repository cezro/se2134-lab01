"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filename = "debts.txt";
function appendDebt(debt) {
    var debtRow = "".concat(debt.name, ": ").concat(debt.amount, "\n");
    fs.promises.appendFile(filename, debtRow).then(function () {
        fs.promises.readFile(filename, 'utf-8').then(function (debt) {
            console.log(debt);
        }).catch(function (error) {
            console.log(error);
        });
    }).catch(function (error) {
        console.log(error);
    });
}
var debt1 = { name: 'someone that promised to pay', amount: 9999 };
appendDebt(debt1);
