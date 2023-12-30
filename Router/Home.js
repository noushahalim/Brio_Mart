const express = require("express");
const router = express.Router();
const fs = require('fs');
const userData = JSON.parse(fs.readFileSync('./model/data.json', 'utf-8'));
const {homeGet,homePost}=require('../controller/homeController')


// router.route('/')
router.get('/',homeGet)
router.post('/',auth,homePost)



function auth(req,res,next){
  const { email, password } = req.body;
  const user = userData.find((val) => val.email === email && val.password === password);
  if (user) {
    req.session.email=user.email
    console.log(req.session.email);
    next()
  } else {
    console.log("No such user found");
    res.redirect('/');
  }
}

module.exports = router;
