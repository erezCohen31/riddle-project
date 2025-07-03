import { read, write } from "./fileHelper.js";


export async function DeleteRiddleById(filePath, targetId) {
    try {
        const riddles = await read(filePath)
        const initialLength = riddles.length;
        const newRiddles = riddles.filter(riddle => riddle.id !== Number(targetId));

        if (newRiddles.length === initialLength) {
            console.log(`No riddle found with id ${targetId}`);
        } else {
            await write(filePath, newRiddles);
            console.log(`Riddle with id ${targetId} deleted.`);

        }
    } catch (error) {
        console.error(error)
    }


}
const filePath = '../DB/riddles.txt';

