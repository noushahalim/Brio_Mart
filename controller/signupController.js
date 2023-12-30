const { error } = require('console')
const fs=require('fs')
const emailRejex=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const numberRejex=/^\+?[0-9\s-]{10,10}$/ 
const passwordRejex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/


const signUpGet = (req,res)=>{
    if(req.session.email){
        res.redirect('/home')
    }
    else{
        res.render('signUp')
    }
}


const signUpPost =(req,res)=>{
    const reqData=req.body
    let userData=[]
    const {email,number,password,password2}=req.body
    if(email==='' || number==='' || password==='' || password2===''){
        res.render('signup', { error: 'Please fill in all fields.' });
    }
    else if(!emailRejex.test(email)){
        res.render('signup', { error: 'Email is not valid' });
    }
    else if(!numberRejex.test(number)){
        res.render('signup', { error: 'Please check your Mobile' });
    }
    else if(!passwordRejex.test(password)){
        res.render('signup', { error: 'Password must be strong' });
        // need atleast 1 number,1 Upcase chare, 1 lowcase chare, 1 number & 1 special char.
    }
    else if(password2!==password){
        res.render('signup', { error: 'Confirm password must be same as Password' });
    }
    else{
        userData.push(reqData)
        res.redirect('/')
        fs.readFile('./model/data.json','utf-8',(err,data)=>{
            if(err){
                console.log('error');
            }
            else{
                const parseData=JSON.parse(data)
                const concatData=userData.concat(parseData)
                let stringData=JSON.stringify(concatData,null,2)
                fs.writeFile('./model/data.json',stringData,(err)=>{
                    if(err){
                        console.log('error found');
                    }
                    else{
                        console.log("stringData");
                    }
                })
            }
        })
    }
}


module.exports={signUpGet,signUpPost}
