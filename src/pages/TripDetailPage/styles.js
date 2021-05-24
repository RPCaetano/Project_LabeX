import styled from 'styled-components';

export const Container = styled.div`
  
  display:flex;
  justify-content:space-around;
`;

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 320px;
    min-height:270px;
    padding-bottom:10px;
    height:auto;
    background:yellow;
    cursor:pointer;
     & :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)
    
  }
  img{
   width:18px;
   height:18px;
   
 } `;
  

  export const Info = styled.div`
  margin: 28px;
 h4, p{
  padding: 2px 16px;
 } `
