import * as fs from "fs";

const filename = "debts.txt";

interface Debts {
  name: string;
  amount: number;
}

async function appendDebt(debt: Debts): Promise<void> {
  const debtRow = `${debt.name}: ${debt.amount}\n`;
  await fs.promises.appendFile(filename, debtRow)
}

async function displayDebts(): Promise<void> {
  const debts = await fs.promises.readFile(filename, 'utf-8')
	console.log(debts)
}

const debt1 = {name: 'some guy', amount: 200}

appendDebt(debt1)
displayDebts()