import { read } from "./fileHelper.js";
import readline from 'readline-sync';
import { write } from "./fileHelper.js";



const filePath = '../DB/riddles.txt';


export async function addRiddle(filePath) {
    try {
        const riddles = await read(filePath);
        const newRiddle = createRiddle(riddles);
        riddles.push(newRiddle);
        await write(filePath, riddles);

        console.log("New riddle added !");
    } catch (err) {
        console.error("error :", err.message);
    }
}


function createRiddle(riddles) {
    const name = readline.question("Category (e.g. Math, Logic, etc.): ");
    const taskDescription = readline.question("Riddle question: ");
    const correctAnswer = readline.question("Correct answer: ");

    let isInclude = false;
    const choices = [];

    while (!isInclude) {
        for (let i = 0; i < 4; i++) {
            const choice = readline.question(`Choice ${i + 1}: `);
            choices.push(choice);
        }

        if (!choices.includes(correctAnswer)) {
            console.log("Warning: The correct answer is not among the choices!");
            choices.length = 0
        } else {
            isInclude = true;
        }
    }


    const newRiddle = {
        id: riddles.length + 1,
        name,
        taskDescription,
        correctAnswer,
        choices
    };

    return newRiddle;
}

