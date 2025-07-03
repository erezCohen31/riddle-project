import { addRiddle, DeleteRiddleById, updateRiddle, readAll, } from "../CRUD/RiddleManager.js";
import { read } from "../CRUD/fileHelper.js";
import { findOrCreatePlayer, UpdateTimeOfPlayer } from "../CRUD/PlayerManager.js";



export {
    addRiddle,
    read,
    DeleteRiddleById,
    updateRiddle,
    readAll,
    findOrCreatePlayer,
    UpdateTimeOfPlayer
};
