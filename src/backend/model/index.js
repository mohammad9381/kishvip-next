const sequelize = require("../db/Sequelize-config");
const Sequelize = require("sequelize");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cellphone_code = require("./cellphone_code.model.js")(sequelize, Sequelize);
db.invoice = require("./invoice.model.js")(sequelize, Sequelize);
db.payment = require("./payment.model.js")(sequelize, Sequelize);
db.service = require("./service.model.js")(sequelize, Sequelize);
db.ticket = require("./ticket.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.user_cellphone = require("./user_cellphone.model.js")(sequelize, Sequelize);
db.product = require("./product.model.js")(sequelize, Sequelize);
db.order = require("./order.model.js")(sequelize, Sequelize);

db.payment.belongsTo(db.invoice, {
  foreignKey: "invoice_id",
  as: "invoice",
  targetKey: "id",
});

db.ticket.belongsTo(db.invoice, {
  foreignKey: "invoice_id",
  as: "invoice",
  targetKey: "id",
});

db.order.belongsTo(db.product, {
  foreignKey: "product_id",
  as: "product",
  targetKey: "id",
});

module.exports = db;
