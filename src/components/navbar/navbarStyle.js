import styled from "styled-components";


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
@media (max-width: 950px) {
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
export const NavbarPages = styled.div`
display: flex;
gap:20px;
@media (max-width: 950px) {
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
@media (max-width: 950px) {
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
font-weight: 400px;
font-size:20px;
margin: 0px
}
h3{
font-family: Outfit;
font-weight: 600px;
font-size:25px;
color: #4348DB;
margin-bottom: 5px;
}
`