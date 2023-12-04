exports.getBrands = async (req, res, next) => {
  const brands = await req.db.brand.findMany();
  res.json(brands);
};
