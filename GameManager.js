import Player from "./classes/Player.js"
import MultipleChoiceRiddle from "./classes/MultipliChoiceRiddle.js"
import riddles from "./classes/Import.js";
import readline from 'readline-sync';

export default function main() {
    const name = readline.question("enter your name:\n")
    console.log("Hello " + name);

    const player = new Player(name)

    for (const riddleData of riddles) {
        const riddle = new MultipleChoiceRiddle(riddleData)
        const time = riddle.startQuestion()
        console.log(` You took ${time} ms to answer.`);

        player.addTime(time)
    }
    player.showStats()
}
