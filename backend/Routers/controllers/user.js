const e = require('express')
const {user} = require('../db')

// _________________________________________________________________________
                //  getUser
// _________________________________________________________________________
const getAllUser = (req,res)=>{
    res.send(user)
}

const getUser = (req, res) => {
    // console.log(req.body)
    // console.log(user);
    const foundUser = user.find( ({ email, password }) => email === req.body.email && password === req.body.password );
      console.log(foundUser);
    if(foundUser)
      res.send(foundUser);
    else
      res.status(404).send("We couldn’t find an account matching the email and password you entered. Please check and try again.");
  };

const addNewUser = (req,res)=>{
    const addedUser = {
        name: req.body.name,
        id: req.body.id,
        job: req.body.job,
        Tell: req.body.Tell,
        email: req.body.email,
        password: req.body.password,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        birthCity: req.body.birthCity,
        birthCountry: req.body.birthCountry,
        maritalStatus: req.body.maritalStatus,
        dateBrith: req.body.dateBrith,
        role: req.body.role

    }

    user.push(addedUser)

    res.status(201).send(addedUser);
}

const updateUser = (req,res)=>{
    const userId = req.query.id
    user.forEach((elem,i)=>{
        if(i == userId){
            elem.name = req.body.name;
            elem.job = req.body.job;
            elem.Tell=req.body.Tell;
            elem.birthCity=req.body.birthCity;
            elem.birthCountry=req.body.birthCountry;
        
        }
    })
}

// const userLogin=(req,res)=>{
//     const loginUser = {
//         name: req.body.name,
//         email: req.body.email,
//     }

//     user.push(loginUser)

//     res.status(201).send(loginUser)

// }


const registrUser = (req,res)=>{
    const userId = req.query.id
    user.forEach((elem,i)=>{
        if(i == userId){
            elem.name = req.body.name;
            elem.job = req.body.job;
            elem.Tell=req.body.Tell;
            elem.birthCity=req.body.birthCity;
            elem.birthCountry=req.body.birthCountry;
           
        }
    })
}
module.exports = {getAllUser,getUser,updateUser,addNewUser,registrUser}