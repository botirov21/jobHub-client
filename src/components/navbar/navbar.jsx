import React from 'react'
import { NavbarPages, NavbarTop, NavbarWrapper } from './navbarStyle'
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarTop>
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
                    <div>Other</div>
                </NavbarPages>
                <Button  variant="contained" disableElevation  sx={{background: "#4348DB", textTransform: "none"}}>
                    Submit job for $199
                </Button>
            </NavbarTop>
        </NavbarWrapper>
    )
}

export default Navbar
