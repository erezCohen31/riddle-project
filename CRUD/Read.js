import { read } from "./fileHelper.js";


export async function readById(filePath, riddleId) {
    try {
        const riddles = read(filePath)
        const riddle = riddles.find(riddle => riddle.id === riddleId);
        return riddle
    } catch (error) {
        console.error(error)
        return null;
    }
}

export async function readAll(filePath) {
    try {
        const riddles = read(filePath)
        return riddles
    } catch (error) {
        console.error(error)
        return null;
    }
}
//const filePath = '../DB/riddles.txt';
//console.log(await readAll(filePath));

