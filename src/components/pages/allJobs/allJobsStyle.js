import styled from "styled-components";
import img from "../../assets/react.png"

export const JobsWrapper = styled.div`
background-color: #F3F3F3;
display:flex;
flex-direction:column;
align-items: center;
padding-bottom: 40px;
height: 100%;
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

h3{
    font-family: Outfit;
    font-size: 40px;
    margin:0px
}
p{
    color: #AAAAAA;
    margin:3px;
    font-family: Outfit;
    font-size: 24px;
}
`
export const FiltersWrapper = styled.div`
height:fit-content;
width: 80%;
display:flex;
background-color:#FFFFFF;
border: solid #ECECEC 1px;
border-radius: 25px;
margin-top: -75px;
z-index:2;
padding:5px;
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
display:flex;
flex-direction: column;
border-radius: 25px;
gap:20px;
height:fit-content;
margin-top:50px;
width: 80%;
`
export const JobImg = styled.div`
background-image: url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 48.42px;
height: 48.433px;
`
// export const CardData = styled.div`

// `

