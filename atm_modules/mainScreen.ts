import inquirer from "inquirer";
import chalk from "chalk";
import cashwidthdraw from "./cashwidthdraw.js";
import cashdeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import Utility from "./utilityBil.js";










async function anotherTransaction(){
    const OTrans = await inquirer.prompt([
        { 
            name : "otherTrans",
            type : "list",
            choices : ["Yes" , "No"],
            message : "Do You Want Another Transaction? "
        }
    ])
          return OTrans.otherTrans;
}


async function mainScreen(balance: number){
    do{
        const options = await inquirer .prompt([
            {
                name: "menu",
                type: "list",
                choices: ['Balance Inquairy', 'Cash Widthdraw', 'Cash Deposit', 'Transfer', 'Utility Bill', 'Exit'],
                message: "Please Select Your Transaration Type."
    
            }
        ]);
            switch(options.menu){
                    case "Balance Inquairy":
                        console.log(chalk.yellow(`your current balance is:${balance}`));
                        break;
                    case "Cash Widthdraw":
                        balance = await cashwidthdraw(balance);
                         break;
                    case "Cash Deposit":
                        balance = await cashdeposit(balance);
                         break;
                    case "Transfer":
                        balance = await transfer(balance);
                        break;
                    case "Utility Bill":
                        balance = await Utility(balance);
                       
                        break;
                    case "Exit":
                        anothertran = "No";
                        break;                 
            }   
            if(options.menu !== "Exit"){
                console.log(chalk.green(`Your Transcation Is Sucessfull Now Balance is:${balance}`));
            var anothertran = await anotherTransaction();
            }
            if(anothertran == "No"){
                console.log("Thank You For Using our Services")
            }
            
    }while(anothertran != "No")

}



export default mainScreen;
