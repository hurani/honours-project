const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const tweets = [
  { name: "Anonymous", tweet: "Hello world!", timestamp: 1647201294323, id: 1 },
  {
    name: "Anonymous",
    tweet: "My First Tweet",
    timestamp: 1647201296988,
    id: 2,
  },
];

let currentId = 3;

app.get("/tweets", (req, res) => {
  console.log("GET /tweets");
  console.log(tweets);
  res.json(tweets);
});

app.post("/tweets", (req, res) => {
  req.body.id = currentId++;
  tweets.push(req.body);
  console.log("POST /tweets");
  console.log(tweets);
  res.end();
});

app.delete("/tweets/:tweetId", (req, res) => {
  for (var i = 0; i < tweets.length; i++) {
    if (tweets[i].id == req.params.tweetId) {
      console.log(tweets[i].id, req.params.tweetId);
      tweets.splice(i, 1);
    }
  }
  res.end();
});

app.listen(8000, () => {
  console.log("Listening on http://localhost:8000");
});
