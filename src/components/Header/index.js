import React from 'react';
import * as S from './styles';
import logo from '../../assets/logo.png';

function Header() {
  return (
   <>
   <S.Container>
        <img src={logo} alt='nave espacial logo'></img>
        <p>LabeX</p>
    </S.Container>    
 </>
  );
}
export default Header;