import inquirer from "inquirer";
import chalk from "chalk";
//define the list of currencies and their exchange rates
let currency = {
    "USD": 1, //UNITED STATE DOLLAR (BASE CURRENCY)
    "EUR": 0.9, //EUROPE DOLLAR
    "JYP": 113, //JAPNESE CUURENCY (YEN)
    "CAD": 1.3, //CANADIAN DOLLAR
    "AUD": 1.65, //AUSTRAILIAN DOLLAR
    "PKR": 280, // PAKISTANI RUPEE
};
console.log(chalk.redBright("<<<<<<<<<<<<<<<<<----------------------------->>>>>>>>>>>>>>>>>>>>>>>>>"));
console.log(chalk.magentaBright(" \n\t Welcome to code with Hooriya Siddique\t\n"));
console.log(chalk.redBright("<<<<<<<<<<<<<<<<<----------------------------->>>>>>>>>>>>>>>>>>>>>>>>>"));
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.blue("select a currency to convert amount from :"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.blue("select a currency to convert amount to :"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.blue("enter your amount to convert currency")
    }
]);
let from_Amount = currency[userAnswer.from_currency];
let to_Amount = currency[userAnswer.to_currency];
let amount = userAnswer.amount;
//fomula
let baseAmount = amount / from_Amount;
let convertedAmount = baseAmount * to_Amount;
//display the result
console.log(chalk.green(`your converted amount is :  ${convertedAmount}`));
