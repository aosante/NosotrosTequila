const express = require('express');
const router = express.Router();

//Modelo de mongoose de usuario
let User = require('../models/user.model');


router.post('/add', (req, res) => {
    let user = new User();
    article.first_name = req.body.first_name;
    article.last_name = req.body.last_name;
    article.email = req.body.email;
    article.comment = req.bpdy.comment;
    user.save(err => {
       if(err) {
           console.log(err);
       } else {
           console.log('Successful registration!!');
       }
    });
});

module.exports = router;