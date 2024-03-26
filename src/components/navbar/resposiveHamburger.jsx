import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Hamburgerdata, NavLink } from './navbarStyle';
export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200, }} role="presentation" onClick={toggleDrawer(false)}>
      <Hamburgerdata>
        <h3>JobHub</h3>
        <NavLink to="/"><p>All Jobs</p></NavLink>
        <NavLink to="/fullTime"><p>Full Time</p></NavLink>
        <NavLink to="/partTime"><p>Part Time</p></NavLink>
        <NavLink to='/loginPage'>
         <p>Sign in</p>
        </NavLink> 
      </Hamburgerdata>
    </Box>
  );

  return (
    <div>
      <MenuIcon onClick={toggleDrawer(true)}/>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}