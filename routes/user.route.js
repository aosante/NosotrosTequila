const express = require('express');
const router = express.Router();

//Modelo de mongoose de usuario
let User = require('../models/user.model');

router.get('/test', (req, res) => {
    res.render('index.html');
})

router.post('/add', (req, res) => {
    let user = new User();
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.email = req.body.email;
    user.comment = req.body.comment;
    user.save(err => {
       if(err) {
           console.log(err);
           return;
       } else {
            res.redirect('/');
       }
    });
});



module.exports = router;