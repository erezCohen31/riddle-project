import { read, write } from "./fileHelper.js";
import Player from "../classes/Player.js";

export async function findOrCreatePlayer(filePath, name) {

    try {
        const players = await read(filePath);
        let player = players.find(player => player.name === name);
        if (!player) {
            player = new Player(name, players.length + 1)

            players.push(player);

            await write(filePath, players);
            console.log("New player added!");
        }

        return player;
    } catch (err) {
        console.error("Error:", err.message);
        return null;
    }
}


export async function UpdateTimeOfPlayer(filePath, player, players, time) {
    if (player.lowestTime !== 0 && player.lowestTime <= time) {
        console.log(`Existing time is better or equal, no update.`);

    } else {

        try {
            player.lowestTime = time;
            await write(filePath, players);
            console.log(`Time updated for player ${player.name}: ${time}`);
        } catch (err) {
            console.error("Error:", err.message);
        }
    }
}
