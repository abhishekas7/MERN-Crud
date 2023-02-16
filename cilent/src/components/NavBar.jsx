import {AppBar,Toolbar,styled} from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header=styled(AppBar)
    `
    background :#111111
    `;

    const Tabs=styled(NavLink)({
  color:'white',
  marginRight:'50px'
    });
 

const NavBar = () => {
return(
<Header position='static'>

        <Toolbar>
                <NavLink><Tabs to='/'>Hello</Tabs></NavLink>
                <NavLink><Tabs to='/add'>Add users</Tabs></NavLink>
                <NavLink><Tabs to='/all'>All Users</Tabs></NavLink>
        </Toolbar>

</Header>
)
}

export default NavBar