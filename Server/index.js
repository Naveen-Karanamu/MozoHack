const express = require("express");
const mongoose = require("mongoose");

const user=express();

user.use(express.json());

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("db connected"));

const database= require("./database/user")

const UserModel =require("../Server/database/user.schema")

user.get("/", (req,res)=>{
    try {
        return res.status(200).json({message:"done"});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})
user.listen(4000,()=>console.log("Server established"));

/*
Route: /user
Description: to get all the users
Access: public
parameters:None
Method: Get
*/
user.get("/user",async (req,res)=>{
    try {
        const getAllUsers=await database.user;
        if(getAllUsers) return res.json({users:getAllUsers});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

/*
Route: /user/name
Description: to get all the users
Access: public
parameters:name
Method: Get
*/
user.get("/user/name/:name", async(req,res)=>{
    try {
        const getUserByName=await UserModel.findOne({
            name:req.params.name           
        })
        if(!getUserByName) {
            return res.json({error:`No user found with the name: ${req.params.name}`})
        }
        return res.status(200).json({user:getUserByName});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

/*
Route: /user/age
Description: to get all the users by age
Access: public
parameters:age
Method: Get
*/
user.get("/user/age/:age", async(req,res)=>{
    try {
        const getUserByAge=await UserModel.findOne({
            age:req.params.age           
        })
        if(!getUserByAge) {
            return res.json({error:`No user found with the name: ${req.params.age}`})
        }
        return res.status(200).json({user:getUserByAge});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})
/*
Route: /user/target
Description: to get all the users by target
Access: public
parameters:target
Method: Get
*/
user.get("/user/target/:target", async(req,res)=>{
    try {
        const getUserByTarget=await UserModel.findOne({
            target:req.params.target           
        })
        if(!getUserByTarget) {
            return res.json({error:`No user found with the name: ${req.params.target}`})
        }
        return res.status(200).json({user:getUserByTarget});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})
/*
Route: /user/category
Description: to get all the users by category
Access: public
parameters:target
Method: Get
*/
user.get("/user/target/:category", async(req,res)=>{
    try {
        const getUserByCategory=await UserModel.findOne({
            category:req.params.category           
        })
        if(!category) {
            return res.json({error:`No user found with the category: ${req.params.category}`})
        }
        return res.status(200).json({user:getUserByCategory});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

/*
Route: /user
Description: to upload all the users
Access: public
parameters:None
Method: post
*/
user.post("/user", async(req,res)=>{
    try {
        const newUser=req.body.newUser;
        const addnewUser=await UserModel.create(newUser);
        return res.json({users:addnewUser, message:"User created"});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})