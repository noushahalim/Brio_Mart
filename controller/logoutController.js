const logoutGet=(req,res)=>{
    req.session.destroy()
    res.redirect('/')
}


module.exports={logoutGet}