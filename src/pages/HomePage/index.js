import React from 'react';
import * as S from './styles';
import viagemespacial from '../../assets/viagemespacial.jpeg'
import { Link } from "react-router-dom";
import detail from "../../../src/assets/detail.png";
import {useTripslist} from '../../hooks/useTripslist'
import { useProtectPage } from '../../hooks/useProtectPage'
import { useHistory } from "react-router-dom";
import PageTitle from "../../components/PageTitle";



function HomePage(props) {

  return (
<>
<PageTitle title={'Detalhes da viagem'}/>


    <S.Container>
       

   <S.Info>     
  <h3><b>Viagem:</b>{props.name}</h3>
  <p><b>Data:</b> {props.date}</p>
  <p><b>Duração:</b> {props.durationInDays} dias</p>
  <p><b>Descrição:</b> {props.description}</p>
   </S.Info>


    </S.Container>
    </>
  )
}

export default HomePage;