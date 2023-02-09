const { Pool, Client } = require("pg");

const pool_pg = new Pool({
  user: "postgres",

  // host: '46.191.140.145',
  // database: 'OZNA_TM',
  // password: 'tm162#bcdef',
  // port: 5432,


  // user: "postgres",
  host: "localhost",
  database: "OZNA_TM",
  password: "1",
  port: 5432,
  //  host: "localhost",
  //  database: "dfm",
  //  password: "1",
  //  port: 5432,
});

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.test = (req, res) => {
  console.log('test');
 // res.json('res2');
  pool_pg.query('SELECT NOW()', (err, res2) => {
    console.log(err, res2)
    res.json(res2);
   // pool_pg.end()
  })
};


const db = require("../models");

const Product = db.product;
const Feedback = db.feedback;

exports.getListProduct = (req,res) => {
  
  Product.findAll({   
    order: [
        ['rate', 'DESC'],
        ['product', 'ASC'],
    ],
    attributes: ['rate', 'product']
})
.then(products =>{return res.send(products)})
;
}

exports.addRate = (req,res) => {
  let productId = req.headers.productid;
  let rate = req.headers.rate;

/////

Feedback.findAll({
  attributes: [[Feedback.sequelize.fn('AVG', Feedback.sequelize.col('rate')), 'rate']],  
  where: { 'productId':productId}
}).then((r) => { console.log('rrr',r[0].dataValues.rate)

});

/////
 
  Product.update(
    {     
      rate: rate
  },{
      where:{
          'id':productId         
      }    
    }
)
.then(() =>{return res.status(200).send('ok')})
.catch(err => {
  res.status(500).send({ message: err.message });
});

}


exports.editFeedback = (req,res) => {
  let productId = req.headers.productid;
  let customerId = req.headers.customerid;
  let txt = req.body.txt;
  let rate = req.body.rate;

  Feedback.update(
    {
      txt: txt,
      rate: rate
  },{
      where:{
          'productId':productId,
          'customerId':customerId
      }    
    }
)
.then(() =>{return res.status(200).send('ok')})
.catch(err => {
  res.status(500).send({ message: err.message });
});
;
}

exports.deleteFeedback = (req,res) => {
  let productId = req.headers.productid;
  let customerId = req.headers.customerid;
 
  Feedback.destroy(
  {
      where:{
          'productId':productId,
          'customerId':customerId
      }    
    }
)
.then(() =>{return res.status(200).send('ok')})
.catch(err => {
  res.status(500).send({ message: err.message });
});
}