import React from 'react';
import * as S from './styles';
import viagem from '../../assets/viagem.png'
import TripInfoItem from './TripInfoItem'

function TripInfoCard(props) {
  return (
      <S.Card>
    
      <h4><b>Informações da viagem</b></h4> 
     <TripInfoItem infoName={'Nome'}info={'Viagem para Marte'}/>
     <TripInfoItem infoName={'Planeta'}info={'Marte'}/>
     <TripInfoItem infoName={'Data'}info={'01/07/2021'}/>
     <TripInfoItem infoName={'Descrição'}info={'Viagem legal para colonizar Marte'}/>
     <TripInfoItem infoName={'Duração em dias'}info={'250'}/>
     
     
    </S.Card>

   );
}

export default TripInfoCard;