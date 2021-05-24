import React from "react";

import * as S from "./styles";
import CandidateItem from "./CandidateItem"

function CandidatesList() {
  return (
  <S.Card>
    <h4><b>Lista de Candidatos</b></h4> 
    <CandidateItem infoName={'Manu'}/>
    <CandidateItem infoName={'Leo'}/>
    <CandidateItem infoName={'Bless'}/>
    <CandidateItem infoName={'Romeu'}/>
    </S.Card>
    );
}

export default CandidatesList;
