const express = require("express"); //importing express module from express library
const app = express();//this express func will return an object and that object will be stored in the app with key value pairs
const {adminAuth, userAuth} = require("./middleware/adminAuth")
// "/admin"
app.use("/admin", adminAuth)
app.get("/admin/getAllData", (req, res)=> {
    res.send("All data sent")
    console.log("All data recieved")
});
app.get("/user/getAllData", userAuth, (req, res)=>{
    res.send("All user data sent")
});
app.get("/admin/deleteUser", (req,res)=>{
    res.send("Deleted a User")
    console.log("All data deleted")
});


app.listen("3000",()=>{
    console.log("I am a server I am listening at port 3000")// We created the server at 3000 port and we are listening to the requests
})