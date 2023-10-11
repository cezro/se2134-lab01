"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filename = "debts.txt";
function appendDebt(debt, callback) {
    var debtRow = "".concat(debt.name, ": ").concat(debt.amount, "\n");
    fs.appendFile(filename, debtRow, function (error) {
        if (error) {
            callback(error);
        }
        else {
            fs.readFile(filename, "utf-8", function (error, debt) {
                if (error) {
                    console.log(error);
                }
                if (debt) {
                    console.log(debt);
                }
            });
        }
    });
}
var debt = { name: "someone i sued", amount: 255 };
appendDebt(debt, function (error) {
    console.log(error);
});
