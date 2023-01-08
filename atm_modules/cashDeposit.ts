import inquirer from "inquirer";


async function cashdeposit(balance:number){
    const amount= await inquirer .prompt([
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