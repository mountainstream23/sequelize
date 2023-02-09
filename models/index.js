const config = require("../db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },
    timestamps: false
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require("./product.model.js")(sequelize, Sequelize);
db.feedback = require("./feedback.model.js")(sequelize, Sequelize);
db.customer = require("./customer.model.js")(sequelize, Sequelize);

db.customer.belongsToMany(db.product, {
  through: "feedback",
  foreignKey: "customerId",
  otherKey: "productId"
});

db.product.belongsToMany(db.customer, {
  through: "feedback",
  foreignKey: "productId",
  otherKey: "customerId"
});

module.exports = db;