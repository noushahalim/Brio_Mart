const loginGet=(req,res)=>{
    if(req.session.email){
        res.redirect('/home')
    }
    else{
        res.render('Login')
    }
}

module.exports={loginGet}