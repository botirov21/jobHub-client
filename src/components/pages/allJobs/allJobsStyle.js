import styled from "styled-components";

export const JobsWrapper = styled.div`
background-color: #F3F3F3;
display:flex;
flex-direction:column;
align-items: center;
height:100vw;
`
export const JobsText = styled.div`
height: 300px;
width: 100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
background-color:#FFFFFF;
position: relative;

p{
    font-family: Outfit;
    font-size: 40px;
}
`
export const FiltersWrapper = styled.div`
height: 150px;
width: 80%;
display:flex;
background-color:#FFFFFF;
border: solid #ECECEC 1px;
border-radius: 25px;
position: absolute;
z-index:2;  
top:220px;
@media (max-width: 435px) {
    display: none;

}
`
export const FiltersLeft = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:20px;
flex : 1;
`
export const FiltersRight = styled.div`
display:flex;
align-items:center;
flex : 1.5;
`
export const Jobs = styled.div`
height:fit-content;
margin-top:100px;
width: 80%;
`

