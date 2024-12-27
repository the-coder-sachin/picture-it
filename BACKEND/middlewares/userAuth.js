import jwt from 'jsonwebtoken'


const userAuth = async (req,res,next)=>{
    const {token} = req.headers;

    if(!token){
      return res.json({ success: false, message: "please login again" });
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if(decodedToken.id){
            req.body.userID = decodedToken.id
        }else{
            return res.json({ success: false, message: "please login again" });
        }
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}

export default userAuth;