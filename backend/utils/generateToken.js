import jwt from "jsonwebtoken"
export const genererToken = (id,res,dataExpiration)=>{
    const token =  jwt.sign({id},process.env.ACCESS_TOKEN,{
        expiresIn:dataExpiration
    })

    res.cookie("access_token",token,{
        httpOnly:true,
    })
    
}