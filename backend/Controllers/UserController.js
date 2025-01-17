import User from "../Models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class UserController{
    static async login(req, res){
        const {email, password} = req.body
        
        const user = await User.findOne({email:email})

        if(!user){
            res.status(422).json({message: "Este email não está cadastrado"})
            return 
        }

        const confirmPass = await bcrypt.compare(password, user.password)
        
        if(confirmPass){
            const token = jwt.sign({
                name: user.name, 
                _id: user._id
            }, process.env.SECRET)

            res.status(200).json({token})
        }
    }
}

export default UserController