
import bycrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';
const registerController = async (req, res, next) => {
    try {
      const {email,username,password}=req.body;
      const user=await User.findOne({email});
      if(user){
        return res.status(400).send({message:"Email already exist", field: 'email'})
      }
      const isUserNameExist=await User.findOne({username});
      if(isUserNameExist){
        return res.status(400).send({message:"Username already exist", field: 'username'})
      }
      const salt=bycrypt.genSaltSync(8);
      const hashPassword=bycrypt.hashSync(password,salt);
      const newUser=await User.create({
        email,username,password:hashPassword
      })
      const payload={email,username};
      const token=jwt.sign(payload,process.env.JWT_SECREAT);
      res.send({message:"User registered succesfully",username,email,token});
    } catch (error) {
      res.send({message:"Some error occured",error:error.message});
    }
  };

export default registerController;