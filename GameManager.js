import Player from "./classes/Player.js"
import MultipleChoiceRiddle from "./classes/MultipliChoiceRiddle.js"
import readline from 'readline-sync';
import { readAll } from "./CRUD/Read.js";
const filePath = "C:/Users/JBH/OneDrive/Bureau/js/projects/riddle project/DB/riddles.txt"
import riddles from "./classes/Import.js";


export default async function main() {
    try {
        const name = readline.question("enter your name:\n")
        console.log("Hello " + name);

        const player = new Player(name)
        const riddles = await readAll(filePath)
        const choosenRiddles = chooserRiddles(riddles);

        for (const riddleData of choosenRiddles) {
            const riddle = new MultipleChoiceRiddle(riddleData)
            const time = riddle.startQuestion()
            console.log(` You took ${time} ms to answer.`);

            player.addTime(time)
        }
        player.showStats()
    } catch (err) {
        console.error("An unexpected error occurred:", err.message);
    }
}


function chooserRiddles(riddles) {
    const choosedRiddles = []
    for (let index = 0; index < 10; index++) {
        const randomIndex = Math.floor(Math.random() * riddles.length);
        const chosenRiddle = riddles[randomIndex];
        choosedRiddles.push(chosenRiddle);
        riddles.splice(randomIndex, 1);

    }
    return choosedRiddles;
}

