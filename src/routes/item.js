const {
  getItems,
  count,
  createItem,
  editPrice,
} = require("../controllers/item");

const router = require("express").Router();

router.get("/", getItems);

router.get("/count", count);

router.post("/", createItem);

router.patch("/", editPrice);

module.exports = router;
