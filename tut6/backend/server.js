const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

app.use(cors());
app.use(express.json());

let tweetsCollection;

app.get("/tweets", async (req, res) => {
  const tweets = await tweetsCollection.find({}).toArray();
  res.json(tweets);
});

app.post("/tweets", async (req, res) => {
  await tweetsCollection.insertOne(req.body);
  res.end();
});

app.delete("/tweets/:tweetId", async (req, res) => {
  await tweetsCollection.deleteOne({ _id: ObjectId(req.params.tweetId) });
  res.end();
});

console.log("Connecting to mongo...");
MongoClient.connect(
  "mongodb+srv://karim:carleton@cluster0.iwmx3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  function (err, client) {
    if (err) throw err;
    console.log("Successfully connected to mongo server!");

    tweetsCollection = client.db("tut4").collection("tweets");
    app.listen(8000, () => {
      console.log("Listening on http://localhost:8000");
    });
  }
);
