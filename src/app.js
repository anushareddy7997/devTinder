const express = require("express"); //importing express module from express library
const app = express();//this express func will return an object and that object will be stored in the app with key value pairs

// req /user, it will match /user/xyz, /user/1
app.get("/user/:userId/:name/:password",(req, res)=>{
    console.log(req.params);
res.send({firstName: "Anusha", lastName: "Reddy"})
})

app.listen("3000",()=>{
    console.log("I am a server I am listening at port 3000")// We created the server at 3000 port and we are listening to the requests
})