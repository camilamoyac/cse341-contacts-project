const router = require("express").Router();

router.get("/", (req, res) => {res.send("welcome to my world")});

module.exports = router;