import { Notes } from "../modules/note.js";


export function getAllNotes(){
    return Notes.find();
}