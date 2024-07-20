import { taskController } from "../controllers/task.controller.js"
import express from "express";
const router = express.Router()


//router.post ("/task", (req, res) =>{

//})


router.get("/task", taskController)


export default router;