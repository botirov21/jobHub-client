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
@media (max-width: 950px) {
h3{
font-family: Outfit;
font-size:25px;
margin:0px
}
p{
font-size: 10px;
color: #AAAAAA;
margin:3px;
font-family: Outfit;
}
}
@media (max-width: 435px) {
h3{
font-family: Outfit;
font-size:25px;
margin:0px
}
p{
font-size: 10px;
color: #AAAAAA;
margin:3px;
font-family: Outfit;
}
}
`
export const FiltersWrapper = styled.div`
height:fit-content;
width: 80%;
display:flex;
justify-content: center;
background-color:#FFFFFF;
border: solid #ECECEC 1px;
border-radius: 25px;
margin-top: -75px;
z-index:2;
padding:5px;
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
justify-content: center;
align-items:center;
gap:20px;
flex : 1.5;
@media (max-width: 950px) {
display: none;
}
@media (max-width: 435px) {
    display: none;
}
`
export const Jobs = styled.div`
display:flex;
flex-direction: column;
border-radius: 25px;
gap:20px;
height:fit-content;
margin-top:50px;
width: 80%;
@media (max-width: 950px) {

.resposiveCardContent{
display:flex;
flex-direction:column;
align-items:start;
gap:10px;
} 
}
@media (max-width: 435px) {
.resposiveCardContent{
display:flex;
flex-direction:column;
align-items:start;
gap:10px;
}
}
`
export const ImgWrapper = styled.div`
display: flex;
flex: 2;
gap: 10px;
`
export const ChipWrapper = styled.div`
display: flex;
flex: 1;
gap: 30px;
.chip{
font-family: Outfit;
font-weight: 400px;
background: #F6F6F6;
padding:5px;
border-radius:5px;
}
@media (max-width: 435px) {
display: flex;
flex-direction: column;
gap:10px;
.chip{
font-family: Outfit;
font-weight: 400px;
background: #F6F6F6;
padding:2px;
border-radius:5px;
}
}
`
export const ExpandMoreWrapper = styled.div`
display: flex;
flex: 1;
gap:20px;
@media (max-width: 435px) {
display: none;
}
@media (max-width: 950px) {
display: none;
}
`
export const UploadTimeWrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
align-items: end;
p{
margin:0px;
}
h4{
margin:0px;
}
@media (max-width: 950px) {
display: flex;
flex-direction:row;
gap:20px;
justify-content:space-between;
}
`
export const ExpandMoreWrapperMobile = styled.div`
display: none;
@media (max-width: 435px) {
display: flex;
flex-direction: column;
p{
margin:0px;
}
h3{
margin:0px;
}
}
`
export const JobImg = styled.div`
background-image: url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 48.42px;
height: 48.433px;
`

