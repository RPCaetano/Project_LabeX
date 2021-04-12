import {createGlobalStyle}from 'styled-components'


const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing:border-box ;
   
}
:root{
--white:#fff;
--background:#d8e3e7;
--footer:#126e82;
--title:#aaaaaa;
}
@media(max-width:1888px){
html{
    font-size:93.75%;
    }
}
@media(max-width:728px){
    html{
        font-size:87.5%;
        }
    }
body{
    background-color:var(--background) ;
    color:var(--text);
}
body,input,textarea,button{
    font:400 16px "Akaya Telivigala", sans-serif;
}
button{
    cursor:pointer;
}
a{
    font-size: 20px;
    text-decoration:none;
}
h1{
    font:600 16px "Akaya Telivigala"
}
`
export default GlobalStyle