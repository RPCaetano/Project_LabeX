import React from 'react';
import * as S from './styles';
import viagem from '../../assets/viagem.png'


function TripInfo() {
  return (
      <S.Card>
      <img src={viagem} alt="espacosideral" />
       <S.Info>
      <h4><b>Viagem 1</b></h4> 
      <p>Viagem para Lua</p> 
      </S.Info>
    </S.Card>

   );
}

export default TripInfo;