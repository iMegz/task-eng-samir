const router = require("express").Router();
const itemRouter = require("./item");

router.use("/item", itemRouter);

module.exports = router;
