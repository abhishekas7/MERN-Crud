import {
 
  Button,
  FormControl,
  FormGroup,
  Grid,
  Input,
  InputLabel,
  styled,
  TableRow,

} from "@mui/material";
import { useState} from "react";
import { addUser } from "../services/api" //api for adding
import {useNavigate} from 'react-router-dom'
const Formstyle = styled("InputLabel")({
  width: "90%",
  backgroundColor: "#000",
  marginTop:'50px auto 0 auto'
});

const THead = styled(TableRow)`
background:#000000;

`


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
        // console.log(user);
    }

const navigate = useNavigate();  

const addUserDetails = async () => {
  await addUser(user);
  navigate('/all');
}

const [user, setUser] =useState(defaultValue);


  return (
    <>

<h1>Add User</h1>
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
