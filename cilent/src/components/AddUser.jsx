import {
 
  Button,
  FormControl,
  FormGroup,
  Grid,
  Input,
  InputLabel,
  styled,

} from "@mui/material";
import { useState } from "react";

import { addUser } from "../services/api";
import {useNavigate} from 'react'
const Formstyle = styled("InputLabel")({
  width: "50%",
  backgroundColor: "#000",
  marginTop:'50px'
});



const defaultValue = {
    name:'',
    email:'',
    password:'',
}


// key : value 

const Adduser = () => {
    const onValueChange = (e) =>{
        console.log(e.target.value);
        setUser({...user, [e.target.name] : e.target.value})
        console.log(user);
    }

const addUserDetails = async () => {
  await addUser(user)
}

const [user, setUser] =useState(defaultValue);


  return (
    <>


      <Formstyle>
        <FormGroup></FormGroup>
      </Formstyle>

      <Grid container>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="name"/>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="email" />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl>
            <InputLabel>Password</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name="password" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <Button variant="contained" onClick={() => addUserDetails()}>ADD USER</Button>
          </FormControl>
        </Grid>

 
      </Grid>
    </>
  );
};

export default Adduser;
