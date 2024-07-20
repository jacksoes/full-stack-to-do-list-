import { MongoClient } from "mongodb";
let tasksCollection;

const connectDatabase = () => {
  const MONGO_URI =
    "mongodb+srv://jsoesman1:pP99fWwkCQ7NQjjb@tasks.45pk8op.mongodb.net/?retryWrites=true&w=majority&appName=tasks";
  const client = new MongoClient(MONGO_URI);
  let database;
 

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
};

export { connectDatabase, tasksCollection};