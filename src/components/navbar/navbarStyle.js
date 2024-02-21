import styled from "styled-components";


export const NavbarWrapper = styled.div`
height: 60px;
background-color:#FFFFFF;
border-radius:10px;
position:fixed;
z-index:3;
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
    
`
export const NavbarPages = styled.div`
display: flex;
gap:20px;
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