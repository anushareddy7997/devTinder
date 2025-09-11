const express = require("express"); //importing express module from express library
const app = express();//this express func will return an object and that object will be stored in the app with key value pairs

//It  route will only match the get call to /user
app.get("/user",(req, res)=>{
res.send({firstName: "Anusha", lastName: "Reddy"})
})
app.post("/user", (req, res)=>{
    //saving data to db
    res.send("Data sucessfully saved to the data base")
})
//This will match all the http method API calls to /test
app.use("/test",(req,res)=>{
    res.send("Abrakadabra")
})

app.delete("/user", (req, res)=>{
    res.send("Deleted Succesfully")
})
app.listen("3000",()=>{
    console.log("I am a server I am listening at port 3000")// We created the server at 3000 port and we are listening to the requests
})