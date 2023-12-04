exports.getItems = async (req, res, next) => {
  const page = req.query.p;

  const items = await req.db.item.findMany({
    take: 3,
    skip: (page - 1) * 3,
    include: { brand: { select: { name: true } } },
  });

  res.json(items);
};

exports.count = async (req, res, next) => {
  const count = await req.db.item.count();
  res.json(count);
};

exports.createItem = async (req, res, next) => {
  const data = req.body;
  const newItem = await req.db.item.create({ data });
  res.json(newItem);
};

exports.editPrice = async (req, res, next) => {
  /**
   * @type {ChangePrice[]}
   */
  const changes = req.body;
  const modifiedItem = await req.db.$transaction(
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
