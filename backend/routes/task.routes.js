import { taskGetController, taskAddController, taskDeleteController } from "../controllers/task.controller.js"
import express from "express";
const router = express.Router()



router.get("/task", taskGetController)

router.post("/task", taskAddController)
router.post("/taskRemove", taskDeleteController)


export default router;