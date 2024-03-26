import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
text-decoration: none;
`

export const NavbarWrapper = styled.div`
height: 60px;
background-color:#FFFFFF;
border-radius:10px;
position:fixed;
z-index:3;
top: 0px;
width:100vw;
`
export const NavbarTop = styled.div`
height: 60px;
border-bottom: solid #ECECEC 1px;
margin: 0 10%;
display: flex;
justify-content: space-between;
align-items:center;
background-color:#FFFFFF;
.h3{
color: #4348DB;
}
@media (max-width: 820px) {
.MyPofile{
 display: none
}
}
@media (max-width: 435px) { 
.MyPofile{
    display: none
}
}   
`
export const ProfileWrapper = styled.div`
display: flex;
align-items: center;
@media (max-width: 820px){
display: none;
}
`
export const NavbarPages = styled.div`
display: flex;
gap:20px;
p{
font-family: Outfit;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal
}
p:hover{
color: #4348DB;
cursor: pointer;
}
@media (max-width: 820px) {
    display: none;

}
@media (max-width: 435px) {
    display: none;
}
`
export const NavbarText = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
padding-top:30px;
p{
    font-family: Outfit;
    font-size: 40px;
}
`
export const Hamburger = styled.div`
display:none;
@media (max-width: 820px) {
    display: flex;

}
@media (max-width: 435px) {
    display: flex;
}
`
export const Hamburgerdata = styled.div`
display: flex;
flex-direction:column;
gap:20px;
padding: 5% 0% 0% 10%;
p{
font-family: Outfit;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0px
}
p:hover{
color: #4348DB;
cursor: pointer;
}
h3{
font-family: Outfit;
font-weight: 600px;
font-size:25px;
color: #4348DB;
margin-bottom: 5px;
}
`