const fs = require('fs');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const privateKey = fs.readFileSync('../secret-files/private.pem');


router.post('/login', function(req, res, next) {
  const token = jwt.sign({ id: 2020, name: 'miser' }, privateKey, { algorithm: 'RS256', expiresIn: '1h'});
  res.send({
    code: 200,
    message: 'success',
    token: token
  });
});

router.get('/profile', function(req, res, next) {
  const id = req.headers['eg-consumer-id'];
  res.send({
    code: 200,
    message: 'success',
    data: {
      id
    }
  });
});


module.exports = router;
