const fs = require('fs');
const userData = JSON.parse(fs.readFileSync('./model/data.json', 'utf-8'));

const homeGet=(req,res)=>{
    if(req.session.email){
      res.render('home', { users: userData })
    }
    else{
      res.redirect('/')
    }
  }


const homePost=(req, res) => {
    if(req.session.email){
      res.render('home', { users: userData });
    }
    else{
      res.redirect('/')
    }
  }


module.exports={homeGet,homePost}