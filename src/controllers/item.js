const db = require("../config/db");

exports.getItems = async (req, res, next) => {
  const page = req.query.p;
  const items = await db.item.findMany({ take: 3, skip: (page - 1) * 3 });
  res.json(items);
};

exports.count = async (req, res, next) => {
  const count = await db.item.count();
  res.json(count);
};

exports.createItem = async (req, res, next) => {
  const data = req.body;
  const newItem = await db.item.create({ data });
  res.json(newItem);
};

exports.editPrice = async (req, res, next) => {
  const id = +req.params.id;
  const price = req.body.price;
  const modifiedItem = await db.item.update({ data: { price }, where: { id } });
  res.json(modifiedItem);
};
