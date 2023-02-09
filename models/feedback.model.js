module.exports = (sequelize, Sequelize) => {
    const Feedback = sequelize.define("feedback", {
      txt: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.INTEGER
      }
    },
    {timestamps: false}
    
    );
  
    return Feedback;
  };