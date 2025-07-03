export async function findPlayer(filePath, name) {
    try {
        const players = await read(filePath);
        let player = players.find(player => player.name === name);

        if (!player) {
            player = {
                id: players.length + 1,
                name,
                lowestTime: 0
            };
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