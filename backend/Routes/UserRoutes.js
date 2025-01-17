import express from "express" 
import UserController from "../Controllers/UserController.js"

const router = express.Router()

router.post("/login", UserController.login)

export default router