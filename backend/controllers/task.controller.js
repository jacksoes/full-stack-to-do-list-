import { tasksCollection } from "../database.js"

export const taskController = async (req, res) => {
    try {
        const tasks = await tasksCollection.find().toArray();
        res.json(tasks);
      } catch (err) {
        console.error("Error fetching tasks:", err);
        res.status(500).send("Server Error");
      }
}


