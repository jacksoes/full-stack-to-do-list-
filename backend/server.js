const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))


let groceryList = [
    {
        fruit: "orange",
        quantity: 6
    },
    {
        fruit: "pineapple",
        quantity: 4
    }
]


app.post ("/api", function(req, res){
    console.log(req.body)
    groceryList.push(req.body)
    res.sendStatus(201)
})


app.get ("/api", function(req, res){
    res.json(groceryList)
})

/*

const MONGO_URI =
  "mongodb+srv://jsoesman1:pP99fWwkCQ7NQjjb@tasks.45pk8op.mongodb.net/?retryWrites=true&w=majority&appName=tasks";
const client = new MongoClient(MONGO_URI);
let database;
let tasksCollection;
async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    database = client.db("taskDatabase");
    tasksCollection = database.collection("taskCollection");

    // Perform operations using database variable
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}
connect();

// whenever the user makes an https request to the port 3000, the following code runs
app.get("/", function (req, res) {
  res.json({ testJson: "this is the test thingy" });
  /*
  try {
    const tasks = await tasksCollection.find().toArray();
    res.json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).send("Server Error");
  }*/
//});


/*
app.get("/add", function (req, res) {});

app.get("/today", function (req, res) {});

app.get("/upcoming", function (req, res) {});

app.get("/search", function (req, res) {});

app.get("/inbox", function (req, res) {});


*/
app.listen(3000);
