import { tasksCollection } from "../database.js";

export const taskGetController = async (req, res) => {
  try {
    const tasks = await tasksCollection.find().toArray();
    res.status(201).json(tasks)
    
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).send("Server Error");
  }
};

export const taskAddController = async (req, res) => {
  const addedTask = req.body;
  try {
    const result = await tasksCollection.insertOne(addedTask);
    console.log("inserted result:", result);
    res.status(201).send("Server Success!: Add task");
  } catch (err) {
    console.error("Error adding task", err);
    res.status(500).send("Server Error: Add task");
  }
};

export const taskDeleteController = async (req, res) => {
  const removedTask = req.body;
  console.log(removedTask);
  try {
    const result = await tasksCollection.deleteOne(removedTask);
    console.log("deleted result:", result);
    res.status(201).send("Server Success!: Delete task");
  } catch (err) {
    console.log("there was an error removing the task");
    res.status(500).send("Server Erorr: Delete task");
  }
};
