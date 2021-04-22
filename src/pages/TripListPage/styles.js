import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  padding:16px;
  margin:20px;

  h1{
      text-align: center;
  }
  img{
      
      width:25px;
      height:25px;
      &:hover{
          width:25px;
          height:25px;
        }
  }
  button{
    display: block;
    min-width: 120px;
    border: none;
    background-color: black;
    color:var(--text);
    border-radius: 25px;
    margin: auto;
    padding: 7px;
    &:hover{
          width:40px;
          height:40px;
          color:var(--text);  
          background-color:orangered;
}
  p{
    color:var(--text);
  }
`;
