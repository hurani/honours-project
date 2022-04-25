const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
const http = require('http');

const server = http.createServer(app);
const { Server } = require("socket.io");

app.use(cors());
app.use(express.json());

let tweetsCollection;

app.get("/tweets", async (req, res) => {
  const tweets = await tweetsCollection.find({}).toArray();
  res.status(200).json(tweets);
});

app.post("/tweets", async (req, res) => {
  try {
    await tweetsCollection.insertOne(req.body);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
  res.status(201).end();
});

app.delete("/tweets/:tweetId", async (req, res) => {
  await tweetsCollection.deleteOne({ _id: ObjectId(req.params.tweetId) });
  res.status(200).end();
});

const io = new Server(server, {cors: {origin: "*"}});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('newTweet', (msg) => {
    console.log('newTweet');
    socket.broadcast.emit('newTweet', true);
  });
})

console.log("Connecting to mongo...");
MongoClient.connect(
  "mongodb+srv://karim:carleton@cluster0.iwmx3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  async (err, client) => {
    if (err) throw err;
    console.log("Successfully connected to mongo server!");
    const db = client.db("tut5");

    try {
      await db.createCollection("tweets", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["name", "tweet", "timestamp"],
            properties: {
              name: {
                bsonType: "string",
                description: "must be a string and is required",
              },
              tweet: {
                bsonType: "string",
                description: "must be a string and is required",
                minLength: 1,
                maxLength: 280,
              },
            },
          },
        },
      });
    } catch (err) {
      console.log("Collection already exists");
    }
    
    
    tweetsCollection = db.collection("tweets");
    server.listen(process.env.PORT || 8000, () => {
      console.log("Listening on http://localhost:8000");
    });
    
  }
);
