import React from 'react'
import { Hamburger, NavLink, NavbarPages, NavbarTop, NavbarWrapper, ProfileWrapper } from './navbarStyle'
import Header from './resposiveHamburger';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
             <AccountCircleIcon/>   <Typography>My profile </Typography>
            </List>
            <Divider />
        </Box>
    );
    return (
        <NavbarWrapper>
            <NavbarTop>
                <Hamburger>
                    <Header />
                </Hamburger>
                    <h3 style={{color: '#4348DB'}}>JobHub</h3>
                <NavbarPages>
                    <NavLink to="/"><p>All Jobs</p></NavLink>
                    <NavLink to="/fullTime"><p>Full Time</p></NavLink>
                    <NavLink to="/partTime"><p>Part Time</p></NavLink>
                </NavbarPages>
                <ProfileWrapper >
                    <NavLink to='/loginPage'>
                        <Typography>Sign in</Typography>
                    </NavLink> 
                    {["right"].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}><AccountCircleIcon/></Button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </ProfileWrapper>
            </NavbarTop>
        </NavbarWrapper>
    )
}

export default Navbar
