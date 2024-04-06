#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("SIRZIA CALCULATOR");
    await sleep();
    rainbowTitle.stop();
    console.log(`
    _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}
await welcome();
async function askQuestion() {
    const ans = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform? \n",
            choices: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division"
            ]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter first number: \n"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number: \n"
        }
    ]);
    // Use user feedback for... whatever!!
    if (ans.operator == "Addition") {
        console.log(chalk.green(`${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`));
    }
    else if (ans.operator == "Subtraction") {
        console.log(chalk.green(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`));
    }
    else if (ans.operator == "Multiplication") {
        console.log(chalk.green(`${ans.num1} * ${ans.num2} = ${ans.num1 * ans.num2}`));
    }
    else if (ans.operator == "Division") {
        console.log(chalk.green(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`));
    }
}
;
// askQuestion(); 
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? (y/n)"
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'Yes');
}
startAgain();
