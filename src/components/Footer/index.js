import React from 'react';
import * as S from './styles';
import instagram from '../../assets/instagram.png';
import twitter1 from '../../assets/twitter1.png';
import facebook1 from '../../assets/facebook1.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';

function Footer() {
  return (
    <S.Container>
      
    <p>Fale Conosco</p>
    
    <S.ImgRedesSociais>
      <img src={instagram} alt='logo instagram'></img>
      <img src={twitter1}></img>
      <img src={facebook1}></img>  
      <img src={linkedin}></img>
      <img src={whatsapp}></img>
      </S.ImgRedesSociais>
  

    </S.Container>



  )
}

export default Footer;