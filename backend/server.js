import express from "express";
import taskrouter from "./routes/task.routes.js";
import middleWare from "./middleware.js";
import { connectDatabase } from "./database.js";

const app = express();
middleWare(app);

async function startServer(app) {
  connectDatabase()
    .then(() => {
      app.use("/", taskrouter);
    })
    .catch((error) => {
      console.error("failed to connect", error);
    });
}

startServer(app);

/*
app.post("/api", async function (req, res) {
  //console.log(req.body)
  //groceryList.push(req.body)
  //console.log(groceryList)
  //res.sendStatus(201)
  //console.log("sucesser!")

  const newTask = req.body;
  try {
    //const result = await tasksCollection.insertOne(newTask)
    const result = await tasksCollection.deleteMany({ task: "" });
    console.log("sucess!");
    res.status(201).send("its running");
  } catch (err) {
    console.error("error loadin task:", err);
    res.status(500).send("server error");
  }
});

// whenever the user makes an https request to the port 3000, the following code runs
app.get("/", async function (req, res) {
  try {
    const tasks = await tasksCollection.find().toArray();
    res.json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).send("Server Error");
  }
});

/*
app.get("/add", function (req, res) {});

app.get("/today", function (req, res) {});

app.get("/upcoming", function (req, res) {});

app.get("/search", function (req, res) {});

app.get("/inbox", function (req, res) {});


*/
app.listen(3000);
