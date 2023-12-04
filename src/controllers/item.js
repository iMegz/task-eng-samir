const db = require("../config/db");

exports.getItems = async (req, res, next) => {
  const page = req.query.p;
  const items = await db.item.findMany({
    take: 3,
    skip: (page - 1) * 3,
    include: { brand: true },
  });

  res.json(items);
};

exports.count = async (req, res, next) => {
  const count = await db.item.count();
  res.json(count);
};

exports.createItem = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  const newItem = await db.item.create({ data });
  res.json(newItem);
};

exports.editPrice = async (req, res, next) => {
  /**
   * @type {ChangePrice[]}
   */
  const changes = req.body;
  const modifiedItem = await db.$transaction(
    changes.map((change) => {
      return db.item.update({
        data: { price: +change.newValue },
        where: { id: +change.id },
      });
    })
  );
  res.json(modifiedItem);
};

/**
 * @typedef {Object} ChangePrice
 * @property {string} id - The identifier.
 * @property {string} oldValue - The old value.
 * @property {string} newValue - The new value.
 */
