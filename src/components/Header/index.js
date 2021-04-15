import React from 'react';
import * as S from './styles';
import logo from '../../assets/logo.png';
import style from '../Header/style.css'
import onClickMenu from '../Header/onClickMenu'
import{Link} from 'react-router-dom'

function Header() {
  return (
   <>
   <S.Container>
        <img src={logo} alt='nave espacial logo'></img>
        <p>LabeX</p>
      
        <div id="menu-bar">
        <div id='menu' onClick={onClickMenu}>
        <div id="bar1" class="bar"></div>
        <div id="bar2" class="bar"></div>
        <div id="bar3" class="bar"></div>
      </div>
      <ul class='nav' id='nav'>
      <li><Link to={'/mission'}>Nossa Missão</Link></li>
      <li><Link to={'/inscricao'}>Quero me candidatar</Link></li>
      <li><Link to={'/login'}>Login Administrador</Link></li>
      <li><Link to={'/'}>Home</Link></li>
   
      </ul>
    </div>
    <div class='menu-bg' id='menu-bg'></div>
    </S.Container>    
 </>
  );
}

export default Header;