const { PrismaClient } = require("@prisma/client");
const { getBrands } = require("../controllers/brand");

const router = require("express").Router();

router.get("/", getBrands, getBrands);

module.exports = router;
