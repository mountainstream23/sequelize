module.exports = {
  
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "1",
    DB: "OZNA_TM",
    port: 5432,  
   
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
