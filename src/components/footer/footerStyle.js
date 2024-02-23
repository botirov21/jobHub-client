const { default: styled } = require("styled-components");

export const FooterWrapper = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
width: 100vw;
ul {
    list-style-type: none;
    color: #4348DB;
}
`
export const FooterData = styled.div`
display: flex;
align-items:center;
margin: 0 8%;
height: fit-content;    
li{
    font-family: Outfit;
    font-weight: 200px;
    color: #AAAAAA;
    padding-top:10px;
}
@media (max-width: 430px) {
margin: 0 5%;
}
@media (max-width: 830px) {
display: flex;
margin-left: 5%;
justify-content: space-between;
}
`
export const FirstColumn = styled.div`
display: flex;
flex: 1;
`
export const SecondColumn = styled.div`
display: flex;
flex: 1;
`
export const ThirdColumn = styled.div`
display: flex;
flex: 1;
@media (max-width: 950px) {
display: none;
}
`
export const FourthColumn = styled.div`
display: flex;
flex: 1;
@media (max-width: 430px) {
display: none;
}
`
export const SocialLinks = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 10%;
border-top: solid  #ECECEC 1px;
`
