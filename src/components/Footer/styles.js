import styled from 'styled-components';


export const Container = styled.div`

padding:20px;
flex-direction:row;
align-items:center;
text-align:center;
position:absolute;
bottom:0px;
width:100%;
background-color:var(--footer);

p{
    color:var(--text);
}
`;

export const ImgRedesSociais=styled.div`
display:flex;
align-items:center;
padding:15px;
text-align:center;
margin-left:40%;

img{
margin-left:10px;
height:25px;
width:25px;
}
`
