import Player from "./classes/Player.js"
import MultipleChoiceRiddle from "./classes/MultipliChoiceRiddle.js"
import readline from 'readline-sync';
import { readAll } from "./CRUD/Read.js";
const filePath = "C:/Users/JBH/OneDrive/Bureau/js/projects/riddle project/DB/riddles.txt"

export default async function main() {
    try {
        const name = readline.question("enter your name:\n")
        console.log("Hello " + name);

        const player = new Player(name)
        const riddles = await readAll(filePath)

        for (const riddleData of riddles) {
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
