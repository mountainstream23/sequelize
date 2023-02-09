const controller = require("../controllers");

module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
app.post(
    "/test",   
    controller.test
  );

app.post(
    "/api/getListProduct",
    controller.getListProduct
  );

app.post(
  '/api/editfeedback',
  controller.editFeedback
)


app.post(
  '/api/deleteFeedback',
  controller.deleteFeedback
)


app.post(
  '/api/addRate',
  controller.addRate
)
};