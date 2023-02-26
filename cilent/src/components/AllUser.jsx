import { TableBody, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import { useEffect,useState } from 'react';

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

    return(  
 <Table>
           <TableHead>
          <TableRow>
         
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
      
          </TableRow>
        </TableHead>
        <TableBody>
            {
                user.map(users => (
                    <TableRow>
                       <TableCell>{users._id}</TableCell> 
                       <TableCell>{users.name}</TableCell> 
                       <TableCell>{users.email}</TableCell> 
                    </TableRow>
                ))
            }
        </TableBody>
 </Table>
    )
    }
    
    export default AllUser