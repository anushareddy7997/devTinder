const express = require("express"); //importing express module from express library
const app = express();//this express func will return an object and that object will be stored in the app with key value pairs

app.use("/user",[ (req, res,next)=>{
    console.log("1st response handler handling user route");
    next();
},
(req, res,next)=>{
console.log("2nd response handler hanling user route 2");
// res.send("2nd response")
next();
},
(req, res, next)=>{
    console.log("3rd response handler handling user route 3");
    next();
    // res.send("3rd response");
}],
(req, res, next) => {
    console.log("4th response handler handling user route 4");
    // res.send("4th response")
    next();
},
(req, res)=>{
    console.log("5th response handler handling user route 5")
    res.send("5th response")
}
)


app.listen("3000",()=>{
    console.log("I am a server I am listening at port 3000")// We created the server at 3000 port and we are listening to the requests
})