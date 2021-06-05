import React from 'react';
import * as S from './styles';
import PageTitle from "../../components/PageTitle";

function Mission() {
  return (
      <S.Container>
         <PageTitle title={"Nossa missão"} />

         <p>   A LabeX tem a missão de te proporcionar as melhores viagens espaciais.</p>
         <p>Aqui você encontra tudo o que precisa para a maior experiência da sua vida.
          Viajar é uma das melhores coisas que existem, se não a melhor.
         E quando somos mordidos por um mosquitinho chamado ESPAÇO e PLANETAS, 
         não tem jeito: vivemos contando os dias pra próxima viagem chegar e não há antídoto que faça isso passar.
          Pra manter sempre acesa essa chama separamos as melhores experiência em um único lugar.
        </p>
      <p>Vamos nessa?</p>
      </S.Container>
  );
}

export default Mission;