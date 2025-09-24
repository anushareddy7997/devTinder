const adminAuth =  (req, res, next) => {
    const token = "xyz"
    const isAdminAuthorized = token === "xyz"
    if(isAdminAuthorized){
        res.status(401).send("Unauthorized request")
        console.log("token invalid")
    }else {
      next() ;
   };  
}
const userAuth = (req, res, next) => {
    const token = "xyz"
    const userAuthenticated = token ==="xyz"
    if(!userAuthenticated){
        res.status(401).send("User unauthenticated")
    }else {
       next()
    }
}
module.exports = {
    adminAuth,
    userAuth
}