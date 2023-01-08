import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";




async function OtherAmount(balance:number){
    const otherAmt = await inquirer .prompt([
        {
            name: "OtherAmount",
            type: "number",
            message: "Please Select Your amount."

        }]);
        if(otherAmt.OtherAmount > balance){
            balance -=otherAmt.OtherAmount

        }else{
            console.log(chalk.red("You Have Unsufficent Balance"));
            balance = await OtherAmount(balance);
            
        }
        return balance;
    }



async function cashwidthdraw(balance: number){
    const answer = await inquirer .prompt([
        {
            name: "amount",
            type: "list",
            choices: ['500', '1000','2000', '5000', '10000', 'OtherAmount'],
            message: "Please Select Your amount."

        }
    ]);

   

    switch(answer.amount){
            case "500":
            if(balance > Number(answer.amount)){
                balance -=500;
                console.log(chalk.yellow(`your new balance is: ${balance}`));
            }else{
            console.log(chalk.red("your balance is unsufficient"));
        }
            break;
            case "1000":
                if(balance > Number(answer.amount)){
                    balance -=1000;
                    console.log(chalk.yellow(`your new balance is: ${balance}`));
                }else{
                    console.log(chalk.red("your balance is unsufficient"));   
            }
             break;
            case "2000":
                if(balance > Number(answer.amount)){
                    balance -=2000;
                    console.log(chalk.yellow(`your new balance is: ${balance}`));
                }else{
                    console.log(chalk.red("your balance is unsufficient"));
            }
             break;
            case "5000":
                if(balance > Number(answer.amount)){
                    balance -=5000;
                    console.log(chalk.yellow(`your new balance is: ${balance}`));
                }else{
                    console.log(chalk.red("your balance is unsufficient"));
            }
            break;
            case "10000":
                if(balance > Number(answer.amount)){
                    balance -=10000;
                    console.log(chalk.yellow(`your new balance is: ${balance}`));
                }else{
                    console.log(chalk.red("your balance is unsufficient"));
            }
            break;
            case "OtherAmount":
            balance = await OtherAmount(balance);
            console.log("OtherAmount");
            break;
    
    }
    
}

export default cashwidthdraw;