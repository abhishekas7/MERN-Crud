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
  import { useState,useEffect} from "react";
  import { addUser, getUserid } from "../services/api" //api for adding
  import {useNavigate,useParams} from 'react-router-dom'
  const Formstyle = styled("InputLabel")({
    width: "90%",
    backgroundColor: "#000",
    marginTop:'50px auto 0 auto'
  });
  

  
  
  const defaultValue = {
      name:'',
      email:'',
      password:'',
  }
  
  
  // key : value 
  
  const Edituser = () => {
      const onValueChange = (e) =>{
          console.log(e.target.value);
          setUser({...user, [e.target.name] : e.target.value})
          // console.log(user);
      }
  
  const navigate = useNavigate();
  const {id} = useParams(); 
  
  useEffect(() =>{
    loadDetails();
  },[])
  

  const loadDetails = async () =>{
    const response = await getUserid(id); 
    setUser(response.data)  //await here used for fetch a single user , then go to api
  }

  const addUserDetails = async () => {
    await addUser(user);
    navigate('/all');
  }
  
  const [user, setUser] =useState(defaultValue);
  
  
    return (
      <>
  
  <h1>Edit User</h1>
        <Formstyle>
          <FormGroup></FormGroup>
        </Formstyle>
  
        <Grid container>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel>Name</InputLabel>
              <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel>Email</InputLabel>
              <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email} />
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
  
  export default Edituser;
  