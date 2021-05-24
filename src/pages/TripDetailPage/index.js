import React from 'react';
import PageTitle from '../../components/PageTitle';
import CandidatesList from './CandidatesList';
import TripInfo from './TripInfoCard';
import * as S from './styles'


function TripDetailPage() {
  return (
    <>
      <PageTitle title={'Detalhes da viagem'}/>
      <S.Container>
  <TripInfo/>
  <CandidatesList/>    
    </S.Container>
    </>
  );
}

export default TripDetailPage;