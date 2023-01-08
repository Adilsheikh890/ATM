import inquirer from "inquirer";
async function cashdeposit(balance) {
    const amount = await inquirer.prompt([
        {
            name: "amt",
            type: "number",
            message: "enter  Your amount."
        }
    ]);
    balance -= amount.amt;
    return balance;
}
export default cashdeposit;
