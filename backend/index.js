import express from "express" 
import dotenv from "dotenv"
import cors from "cors"

import UserRoutes from "./Routes/UserRoutes.js"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

//routes
app.use("/user", UserRoutes)
app.listen(process.env.PORT)