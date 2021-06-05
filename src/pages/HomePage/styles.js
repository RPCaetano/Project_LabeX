import styled from 'styled-components';

export const Container = styled.div`
    margin-left:20px;
    box-shadow: 4px 4px 8px 0 yellow;
    transition: 0.3s;
    width: 318px;
    min-height: 270px;
    padding-bottom: 10px;
    height: auto;
    background: black;
    cursor: pointer;
    :hover{
        box-shadow: 0 8px 16px 0 yellow;
    };
`;

export const Info = styled.div`
     margin: 20px;
     p{
        font-size:18px;
        margin: 10px;
     }
     h3{
         color: yellow;
         font-size: 20px;
         padding: 20px;
     }
`;