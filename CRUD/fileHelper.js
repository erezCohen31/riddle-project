import { console } from "inspector";
import { readFile, writeFile } from 'node:fs/promises';


export async function write(filePath, riddles) {
    try {
        await writeFile(filePath, JSON.stringify(riddles, null, 2), 'utf-8');

    } catch (error) {
        console.error(error)
    }

}

export async function read(filePath) {
    try {
        const data = await readFile(filePath, 'utf-8');
        if (!data) return []
        const riddles = JSON.parse(data);
        return riddles
    }
    catch (error) {
        console.error(error)
        return []
    }
}
