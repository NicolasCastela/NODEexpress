const express = require("express");
const port = 8080;
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Request-Type: ${req.method} `);
  console.log(`Content-Type: ${req.headers["content-type"]} `);
  console.log(`Data: ${new Date()}`);
  next();
});
const UserModel = require("../src/models/user.model");

app.get("/", (req, res) => {
  res.status(200).send("hello");
});
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.listen(port, () => console.log(`Running in ${port}`));
