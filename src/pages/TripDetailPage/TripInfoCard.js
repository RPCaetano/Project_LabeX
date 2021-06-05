import React from 'react';
import * as S from './styles';
import viagem from '../../assets/viagem.png'
import TripInfoItem from './TripInfoItem'
import PageTitle from "../../components/PageTitle";

function TripInfoCard(props) {
  const {name, planet, description, date, durationInDays} = props.info
  return (
      <S.Card>
    
    <h3>Informações da viagem<hr></hr></h3>

     <TripInfoItem infoName={'Nome'}info={name}/>
     <TripInfoItem infoName={'Planeta'}info={planet}/>
     <TripInfoItem infoName={'Data'}info={date}/>
     <TripInfoItem infoName={'Descrição'}info={description}/>
     <TripInfoItem infoName={'Duração em dias'}info={durationInDays}/>
     
     
    </S.Card>

   );
}

export default TripInfoCard;