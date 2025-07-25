const router = require("express").Router();

router.use("/", require("./swagger"));

router.get("/", (req, res) => {
    //#swagger.tags=["Welcome to my World"]
    res.send("Welcome to my World");
});

router.use("/contacts", require("./contacts"));

module.exports = router;