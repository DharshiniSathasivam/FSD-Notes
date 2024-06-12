import express from "express";
import { getUserByEmail } from "../Controller/user.js";
import { genrateToken } from "../Auth/Auth.js";
import bcrypt from "bcrypt"
import { User } from "../modules/user.js";

const router = express.Router();

router.post("/login" ,async(req,res)=>{
    try {
        let user=await getUserByEmail(req)
        if(!user){
            return res.status(400).json({error:"invalid cerdential"})
        }
        //password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        )
        if(!validPassword){
            return res.status(400).json({error:"invalid password"})
        }
        //gentrate token
        const token = genrateToken(user._id)
        res.status(200).json({data:"Logged Succesfully",token})
    } catch (error) {
       res.status(400).json({error: "intenal server error"})
    }
})
router.post("/signup",async(req,res)=>{
    try {
        //user already exit
     let user = await getUserByEmail(req)

     if(user){
        return res.status(400).json({error:"user already exit "})
     }
     const salt =await bcrypt.genSalt(10);
     const hasdedPassword = await bcrypt.hash(req.body.password,salt)
     user = await new User({
        ...req.body,
        password: hasdedPassword,
     }).save()
     const token=genrateToken(user._id)
     res.status(200).json({data:"Successfully register",token})
    } catch (error) {
        console.log(error)
        res.status(400).json({error: "intenal server error"})
    }
})

export const userRouter = router;