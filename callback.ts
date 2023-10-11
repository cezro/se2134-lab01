import * as fs from "fs";

const filename = "debts.txt";

interface Debts {
  name: string;
  amount: number;
}

function appendDebt(debt: Debts, callback: (error?: Error) => void): void {
  const debtRow = `${debt.name}: ${debt.amount}\n`;
  fs.appendFile(filename, debtRow, (error) => {
    if (error) {
      callback(error);
    } else {
      fs.readFile(filename, "utf-8", (error, debt) => {
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

const debt = { name: "someone i sued", amount: 255 };

appendDebt(debt, (error) => {
  console.log(error);
});
