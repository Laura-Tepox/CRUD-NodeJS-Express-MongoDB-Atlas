const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//create user
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user.save().then((data) => res.json(data)).catch(() => res.json({ message: error }))
    //res.send("create user");
});

module.exports = router;