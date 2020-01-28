var express = require('express');
var router = express.Router();


router.get('/banner', function(req, res, next) {
  res.send({
    code: 200,
    message: 'success',
    data: [
      '/images/1.png',
      '/images/2.png'
    ]
  })
});

router.get('/banner/v2/list', function(req, res, next) {
  res.send({
    code: 200,
    message: 'success',
    data: [
      '/images/v2_1.png'
    ]
  })
});


module.exports = router;
