import styled from 'styled-components';

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:50px;
`
export const Button = styled.button`
    margin-left:20px;
    box-shadow: 4px 4px 8px 0 yellow;
    transition: 0.3s;
    height: auto;
    width:auto;
    padding:10px;
    background: black;
    cursor: pointer;
    :hover{
        box-shadow: 0 8px 16px 0 yellow;
    };
    color:yellow;
    border:none;
    border-radius: 5px;
    margin-right:10px;
`;
