const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port, ()=>{
  console.log("Server is listening...");
})

app.get("/register", (req, res) => {
  const { username } = req.query;
  res.send(`Get Request recieved, Welcome ${username}`);
})

app.post("/register", (req, res) => {
  console.log(req.body)
  res.send("Post Request recieved");
})