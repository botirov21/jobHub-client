import React from 'react'
import { Hamburger, NavbarPages, NavbarTop, NavbarWrapper } from './navbarStyle'
import Button from '@mui/material/Button';
import Header from './resposiveHamburger';
import { Link } from 'react-router-dom';

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
                <Link to='/loginPage'>
                <Button className='MyPofile'  variant="contained" disableElevation  sx={{background: "#4348DB", textTransform: "none"}}>
                    Submit job for $199
                </Button>
                </Link>
            </NavbarTop>
        </NavbarWrapper>
    )
}

export default Navbar
