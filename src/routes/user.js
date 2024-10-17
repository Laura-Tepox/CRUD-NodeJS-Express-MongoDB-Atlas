const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//create user
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    //res.send("create user");
});

//get all users
router.get("/users", (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    //res.send("create user");
});

//encontrar un usuario
router.get("/users/:id", (req, res) => {
    const{ id }= req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    //res.send("create user");
});
//actualizar un usuario
router.put("/users/:id", (req, res) => {
    const{ id }= req.params;
    const {name,age,email} = req.body;
    userSchema
    .updateOne({_id: id}, { $set: {name, age, email}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    //res.send("create user");
});

//eliminar usuario
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    //res.send("create user");
});

module.exports = router;