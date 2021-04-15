import React from 'react';
import{Link} from 'react-router-dom'
import detail from '../../../src/assets/detail.png'
import * as S from './styles';

function TripListPage() {
  return (
      <S.Container>
    <h1>Lista de viagens</h1>
    <section>
    <Link to={'/viagens/criar'}>
        <button>Criar viagem</button>
        </Link>
    </section>
   <section>
    <Link to={'/viagens/detalhe'}>
        <img src={detail} alt = 'lupa'></img>
    </Link>
    </section>
</S.Container>
  );
}

export default TripListPage;