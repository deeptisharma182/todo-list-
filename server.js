const express=require('express')
const srv = express();
const todoRoute =require('./routes/todos')
//accessing todo.js


srv.use(express.json())
srv.use(express.urlencoded({extended:true}))



srv.get('/hello',(req,res)=>{
    res.send("HELLO")
})

srv.use('/public',express.static(__dirname+ "/public"))
//express.static will make this folder available as a static website
//static websites are those where you save the html file
//And those html files are served over your http requests
//There is no dynamic content i.e whatever response you are getting from the server does not depend upon what the request was

srv.use('/todos',todoRoute)


srv.listen(4657);