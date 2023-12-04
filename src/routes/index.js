const router = require("express").Router();
const itemRouter = require("./item");
const brandRouter = require("./brand");

router.use("/item", itemRouter);
router.use("/brand", brandRouter);

module.exports = router;
