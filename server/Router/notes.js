import express from 'express';
import { getAllNotes } from '../Controller/notes.js';
const router =express.Router();

//get all notes
router.get("/all",async(req,res)=>{
    try {
        const notes=await getAllNotes()
        if(notes.length <=0){
            return res.status(400).json({error:"not connected available"})
        }
        res.status(200).json({data:notes})
    } catch (error) {
        res.status(400).json({error: "intenal server error"})
    }
})

//get user notes
router.get("/user/all",async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({error: "intenal server error"})
    }
})

//add new notes
router.post("/add",async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({error: "intenal server error"})
    }
})

//edit a notes
router.post("/edit/:id",async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({error: "intenal server error"})
    }
})

//delete a notes
router.delete("/delete/:id",async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({error: "intenal server error"})
    }
})


export const notesRouter = router;