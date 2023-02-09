module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {     
      product: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.FLOAT
      }
    },
    {timestamps: false});
  
    return Product;
  };