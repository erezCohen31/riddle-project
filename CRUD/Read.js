import { readFile } from 'node:fs/promises';

export async function readById(filePath, riddleId) {
    try {
        const data = await readFile(filePath, 'utf-8');
        const riddles = JSON.parse(data);
        const riddle = riddles.find(riddle => riddle.id === riddleId);
        return riddle
    } catch (error) {
        console.error(error)
        return null;
    }
}

export async function readAll(filePath) {
    try {
        const data = await readFile(filePath, 'utf-8');
        const riddles = JSON.parse(data);
        return riddles
    } catch (error) {
        console.error(error)
        return null;
    }
}

