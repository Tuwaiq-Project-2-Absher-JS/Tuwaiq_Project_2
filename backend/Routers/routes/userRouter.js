const express = require("express");

const userRouter = express.Router();

const {getUser,getAllUser,updateUser,addNewUser,} = require("../controllers/user");
const { user } = require("../db");


userRouter.get('/',getAllUser);
userRouter.get('/',getUser);
userRouter.post('/rigester/',addNewUser);
userRouter.put('/user',updateUser);

module.exports={userRouter};