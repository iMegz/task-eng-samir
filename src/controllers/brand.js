const db = require("../config/db");

exports.getBrands = async (req, res, next) => {
  const brands = await db.brand.findMany();
  res.json(brands);
};
