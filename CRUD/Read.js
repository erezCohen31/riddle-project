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
        const riddles = await read(filePath)
        console.log(`riddle inside readall ${riddles}`);

        for (const riddle of riddles) {
            console.log(riddle);
        }
    } catch (error) {
        console.error(error)
        return null;
    }
}
const filePath = '../DB/riddles.txt';

