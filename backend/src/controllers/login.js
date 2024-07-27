import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bycrypt from 'bcryptjs'
const loginController = async (req, res, next) => {
      try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
          return res.status(400).send({message:"Email not exist"})
        }
        const passwordMatch=bycrypt.compareSync(password,user.password);
        if(!passwordMatch){
          return res.status(400).send({message:"Credentials are wrong"})
        }
        const payload={email:user.email,username:user.username};
        const token=jwt.sign(payload,process.env.JWT_SECREAT);
        res.send({message:"User login succesfully",username:user.username,email:user.email,token});
    } catch (error) {
      res.send({message:"Some error occured",error:error.message});
    }
  };

export default loginController;