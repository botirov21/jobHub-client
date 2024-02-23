import React from 'react'
import { Hamburger, NavbarPages, NavbarTop, NavbarWrapper } from './navbarStyle'
import Button from '@mui/material/Button';
import Header from './resposiveHamburger';

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarTop>
                <Hamburger>
                  <Header/>
                </Hamburger>
                <div>
                    <h3>JobHub</h3>
                </div>
                <NavbarPages>
                    <div>All Jobs</div>
                    <div>Internship</div>
                    <div>Fulltime</div>
                    <div>Engineering</div>
                    <div>Marketer</div>
                    <div>Designer</div>
                </NavbarPages>
                <Button className='MyPofile'  variant="contained" disableElevation  sx={{background: "#4348DB", textTransform: "none"}}>
                    Submit job for $199
                </Button>
            </NavbarTop>
        </NavbarWrapper>
    )
}

export default Navbar
