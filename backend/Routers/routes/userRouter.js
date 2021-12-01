const express = require("express");

const userRouter = express.Router();

const {getUser,getAllUser,updateUser,addNewUser,getPersonInfo} = require("../controllers/user");
const { users } = require("../db");


userRouter.get('/',getAllUser);
userRouter.post('/login/',getUser);
userRouter.post('/',getPersonInfo);
userRouter.post('/rigester/',addNewUser);
userRouter.put('/user',updateUser);

module.exports={userRouter};