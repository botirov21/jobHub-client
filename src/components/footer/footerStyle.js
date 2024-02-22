const { default: styled } = require("styled-components");

export const FooterWrapper = styled.div`
display: flex;
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
margin: 0 10%;
height: fit-content;
li{
    font-family: Outfit;
    font-weight: 200px;
    color: #AAAAAA;
    padding-top:10px;
}
`
