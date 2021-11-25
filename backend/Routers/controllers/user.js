const express = require('express')
const {users} = require('../db')

// _________________________________________________________________________
                //  getUser
// _________________________________________________________________________
const getAllUser = (req,res)=>{
    res.send(users)
}

const getUser = (req, res) => {
    // console.log(req.body)
    // console.log(user);
    const {email, password} = req.body;
    // console.log("email sent:",email)
    const foundUser = users.find( (elem) => {
        // console.log("email in database:", elem.email)
        return (elem.email == email && elem.password == password)} );
      console.log(foundUser);
    if(foundUser)
      res.send(foundUser);
    else
      res.status(404).send("We couldn’t find an account matching the email and password you entered. Please check and try again.");
  };

const addNewUser = (req,res)=>{
    const addedUser = {
        name: req.body.name,
        job: req.body.job,
        Tell:req.body.Tell,
        birthCity:req.body.birthCity,
        birthCountry:req.body.birthCountry
    }

    users.push(addedUser)

    res.status(201).send(addedUser);
}

const updateUser = (req,res)=>{
    const userId = req.query.id
    users.forEach((elem,i)=>{
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
    users.forEach((elem,i)=>{
        if(i == userId){
            elem.name = req.body.name;
            elem.job = req.body.job;
            elem.Tell=req.body.Tell;
            elem.birthCity=req.body.birthCity;
            elem.birthCountry=req.body.birthCountry;
           
        }
    })
}

 function getPersonInfo(req, res) {
     console.log('Inside Person Info')
    //const id = req.params.id; // '1'
    const result = users.find( ({ id }) => id === parseInt(req.params.id));
      console.log(result);
    if(result)
      res.send(result);
    else
      res.status(404).send("We couldn’t find an account matching the email and password you entered. Please check and try again.");
  };

module.exports = {getAllUser,getUser,updateUser,addNewUser,registrUser, getPersonInfo}