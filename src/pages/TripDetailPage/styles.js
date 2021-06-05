import styled from 'styled-components';

export const Container = styled.div`
  
  display:flex;
  justify-content:space-around;
  h1{
    text-align:center;
  }
`;


export const Card = styled.div`
   margin-left:20px;
   padding:10px;
    box-shadow: 8px 8px 8px 8px yellow;
    transition: 0.3s;
    width: 450px;
    min-height: 270px;
    padding-bottom: 10px;
    height: 50px;
    background: black;
    cursor: pointer;
    :hover{
        box-shadow: 8px 8px 16px 8px yellow;
    }
    img{
      width:18px;
      height:18px;
     
    }
    h3{
         color: var(--title);
         font-size: 18px;
         text-align:center;
         
     }
`;

  

  export const Info = styled.div`
 margin: 20px;
     p{
        font-size:18px;
        margin: 10px;
     }
     h3{
         color: var(--title);
         font-size: 20px;
         
     }
`;
