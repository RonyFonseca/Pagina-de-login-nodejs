import mongoose from "../db/conn.js"
import {Schema} from "mongoose"

const User = mongoose.model("User", 
    new Schema({
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    })
)

export default User