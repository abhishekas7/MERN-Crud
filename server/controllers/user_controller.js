import { request } from "express"

export const addUser = (req,res) =>{
    const user=req.body;

    console.log(user);

}