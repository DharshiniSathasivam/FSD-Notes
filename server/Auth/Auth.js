import jwt from "jsonwebtoken"

export const genrateToken=(id)=>{
    return jwt.sign({id},process.env.SECRET_KEY)
}