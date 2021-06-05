import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import CandidatesList from './CandidatesList';
import TripInfo from './TripInfoCard';
import * as S from './styles'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useProtectPage } from ".../../../src/hooks/useProtectPage";

const TripDetailPage=()=> {
  const [trip, setTrip] = useState();
  const params = useParams();

  useProtectPage();

  const getTripDetail = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-caetano-dumont/trip/${params.tripId}`,
        {
          headers: {
            auth: window.localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setTrip(response.data.trip);
      }).catch((err) => {
        window.alert("Detalhes não encontrados ", err);
      });
  };
  
  useEffect(() => {
    getTripDetail();
  }, []);

  const decideCandidate = (approve, candidateId) => {
    const body = {
      approve: approve,
    };

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-caetano-dumont/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then(() => {
      getTripDetail()
    }).catch(() => {
    });
};
  return (
   <>
    <PageTitle title={'Detalhes da viagem'}/>
      {trip ? <S.Container>

  <TripInfo info={trip}/>
  <CandidatesList 
   candidates={trip.candidates} 
   decideCandidate={decideCandidate}
   />    
    </S.Container>
    :<div>CARREGANDO.....</div>}
   </>
  );
}

export default TripDetailPage;