import * as fs from "fs";

const filename = "debts.txt";

interface Debts {
  name: string;
  amount: number;
}

function appendDebt(debt: Debts): void {
  const debtRow = `${debt.name}: ${debt.amount}\n`;
  fs.promises.appendFile(filename, debtRow).then(() => {
    fs.promises.readFile(filename, 'utf-8').then((debt) => {
      console.log(debt)
    }).catch((error) => {
      console.log(error)
    })
  }).catch((error) => {
    console.log(error)
  })
}

const debt1 = {name: 'someone that promised to pay', amount: 9999}
appendDebt(debt1)
