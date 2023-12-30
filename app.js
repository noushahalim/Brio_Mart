const express=require("express")
const path=require("path")
const dotenv=require('dotenv').config()
const login=require('./Router/Login')
const session=require('express-session')
const nocache = require("nocache")
const signUp=require("./Router/SignUp")
const home=require("./Router/Home")
const logout=require("./Router/Logout")
const port=process.env.port || 7000
const app=express()


app.use(express.json())
app.use(nocache())
app.use(session({
    secret: 'noushah',
    resave: true,
    saveUninitialized: true
  }))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))

app.set('view engine','ejs')
app.set('views','views')

app.use('/',login)
app.use('/signUp',signUp)
app.use('/home',home)
app.use('/logout',logout)

app.listen(port,()=>console.log(`Server Running on ${port}`))