const router = require("express").Router();

router.get("/", (req, res) => {res.send("welcome to my world")});

router.use("/contacts", require("./contacts"));

module.exports = router;