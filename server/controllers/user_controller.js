import { request, response } from "express"

import User from "../model/user-schema.js"


export const addUser = (request,respond) =>{
 const user =request.body;
 const newUser = new User(user);
 try{
    newUser.save();
    response.status(201).json(newUser);
 }
 catch(error){
    response.status(209).json({message:error.message});
 }

}

export const getUser = async( request,response) =>{
   try {
      const users = await User.find({});
      response.status(200).json(users)
   } catch (error) {
      response.status(404).json({message:error.message}); 
   }
}

