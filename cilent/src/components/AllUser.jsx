import styled from '@emotion/styled';
import { Button, TableBody, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

import {getUser} from '../services/api';


const AllUser = () =>{

    const[user,setUsers] = useState([]);

    useEffect(() =>{
        getAllUsers();
    },[]);

const getAllUsers = async () => {
        let response = await getUser();
        setUsers(response.data);
      
    }

    const THead = styled(TableRow)`
background:lightblue;
color:#00000;
margin-top:20px;

`

    return(  
 <Table>
    <THead>
    <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell colSpan={2}>Change</TableCell>
    </THead>

        <TableBody>
            {
                user.map(user => (
                    <TableRow>
                       <TableCell>{user._id}</TableCell> 
                       <TableCell>{user.name}</TableCell> 
                       <TableCell>{user.email}</TableCell> 
                       <TableCell><Button variant='contained' component={Link} to={`/edit/${user._id}`}>Edit</Button></TableCell> 
                       <TableCell><Button variant='contained' color='secondary'>Delete</Button></TableCell> 
                    </TableRow>
                ))
            }
        </TableBody>
 </Table>
    )
    }
    
    export default AllUser