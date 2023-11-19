const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcryt = require('bcrypt');
const jwt = require('jsonwebtoken');


//REGISTER 
router.post("/register", async (req,res) => {
    try {
        const {username,email,password}=req.body
        const newUser = new User({username,email,password})
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)

    } 
    catch (err) {
        res.status(500).json(err)
    }
})  


// LOGIN



// LOGOUT