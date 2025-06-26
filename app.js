import Player from "./classes/Player.js"
import Riddle from "./classes/Riddle.js"
import riddles from "./classes/Import.js";
import readline from 'readline-sync';


const name = readline.question("enter your name:\n")
console.log("Hello " + name);

const player = new Player(name)

for (const riddleData of riddles) {
    const riddle = new Riddle(riddleData)
    const time = riddle.startQuestion()
    console.log(`🕒 You took ${time} ms to answer.`);

    player.addTime(time)
}
player.showStats()
