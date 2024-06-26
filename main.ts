#! /usr/bin/env node
import inquirer from "inquirer"


const currency: any = {
    USD: 1, 
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 277.42,
    LIRA: 32.35,
    YEN: 153.06, 
    MYR: 4.74,
    SAR: 3.75,
    DHR: 3.67,
};

let user_answer = await inquirer.prompt(
    [
       {
           name: "from",
           message: "Enter from currency",
           type: "list",
           choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'LIRA', 'YEN', 'MYR', 'SAR', 'DHR']
       },
       {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'LIRA', 'YEN', 'MYR', 'SAR', 'DHR']
       },
       {
        name: "amount",
        message: "Enter your amount",
        type: "number"
       }
    ]
);


let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount.toFixed(2));

