import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  padding:16px;
  margin:20px;
  align-items:center ;

  h1{
      text-align: center;
  }
  img{
      margin-right:5px;
      width:25px;
      height:25px;
      &:hover{
          width:25px;
          height:25px;
        }
  }
  button{
    border: none;
    background-color: orangered;
    color:var(--text);
    border-radius: 25px;
    padding: 7px;
  }    
  p{
    color:var(--text);
  }
  a{
    text-decoration:none;
  }
`
export const List= styled.div`
display:flex;
flex-direction:column;
`
export const Buttom= styled.div`
display:flex;
justify-content:space-between;
width:90vw;
`
