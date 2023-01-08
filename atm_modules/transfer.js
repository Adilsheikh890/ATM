import inquirer from "inquirer";
import chalk from "chalk";
async function transfer(balance) {
    const answer = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: "Enter Account Number",
        },
        {
            name: "amount",
            type: "number",
            message: "Enter  Your Amount",
        }
    ]);
    if (balance > answer.amount) {
        balance -= answer.amount;
    }
    else {
        console.log(chalk.red("you have  unsufficient balance"));
    }
    return balance;
}
export default transfer;
