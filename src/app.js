const express = require("express"); //importing express module from express library
const app = express();//this express func will return an object and that object will be stored in the app with key value pairs
app.use("/", (req, res)=>{
res.send("I am / path....")
})
app.use("/hello",(req,res)=>{
    res.send("I am path hello")
})
app.use('/praveen',(req, res)=>{
    res.send("I am praveen")
})
app.listen("3000",()=>{
    console.log("I am a server I am listening at port 3000")// We created the server at 3000 port and we are listening to the requests
})