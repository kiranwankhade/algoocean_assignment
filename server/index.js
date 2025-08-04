const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

let user = null;

// Post the User
app.post("/api/user", (req, res) => {
  user = req.body;
  res.status(201).json({ message: "User saved successfully" });
});

// Get the users
app.get("/api/user", (req, res) => {
  if (!user) {
    res.status(404).send({ message: "Users Not Found..!" });
  }
  res.send(user);
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
