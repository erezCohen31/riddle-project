import { read, write } from "./fileHelper.js";
import readline from 'readline-sync';


export async function updateRiddle(filePath, targetId) {
    try {
        const riddles = await read(filePath);
        const riddlesChanged = changeRiddle(riddles, targetId);
        await write(filePath, riddlesChanged);
        console.log(" riddle changed !");
    } catch (err) {
        console.error("error :", err.message);
    }
}

function changeRiddle(riddles, targetId) {

    const riddle = riddles.find(riddle => riddle.id === Number(targetId));
    if (!riddle) {
        console.log(`No riddle found with id ${targetId}`);
        return riddles;
    }
    const fieldToChange = readline.question("What field do you want to change? (name, taskDescription, correctAnswer, choices): ");
    if (!(fieldToChange in riddle)) {
        console.log(`Field "${fieldToChange}" does not exist.`);
        return riddles;
    }
    if (fieldToChange === "choices") {
        const newChoices = [];
        for (let i = 0; i < 4; i++) {
            const choice = readline.question(`Choice ${i + 1}: `);
            newChoices.push(choice);
        }
        riddle[fieldToChange] = newChoices;
    } else {
        riddle[fieldToChange] = readline.question("enter the new value:")
    }
    return riddles
}


const filePath = '../DB/riddles.txt';

