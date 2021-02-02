const express = require("express");
const router = express.Router();
mongoose = require("mongoose");
//test-----------------------------
router.get("/user", (req, res) => {
  res.send("Hello world");
});
module.exports = router;

// Connect mongoose
const url = process.env.URL_DB;
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    else console.log("DB is connected");
  }
);

//mongoose model
const user = require("../models/userSchema");

// Get all the users
router.get("/users", (req, res) => {
  user
    .find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});
//Add a new user
router.post("/newUser", (req, res) => {
  const newUser = new user(req.body);
  newUser
    .save()
    .then(() => res.send("new user added successfully"))
    .catch((err) => console.log(err));
});

//Update a user by id
router.put("/userUpdate/:id", (req, res) => {
  user
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

//Remove a user by id
router.delete("/user/:id", (req, res) => {
  user
    .findByIdAndRemove(req.params.id, req.body)
    .then(() =>
      res.status(200).send(`user by the id of : ${req.params.id} is removed !`)
    )
    .catch((err) => console.log(err));
});
