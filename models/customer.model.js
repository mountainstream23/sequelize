module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customers", {
      name: {
        type: Sequelize.STRING
      }
    },
    {timestamps: false});
  
    return Customer;
  };