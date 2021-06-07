import React from "react";
import PageTitle from "../../components/PageTitle";
import * as S from "./styles";
import CandidateItem from "./CandidateItem";

function CandidatesList(props) {
  return (
    <S.Card>
      <h3>
        Lista dos candidatos<hr></hr>
      </h3>
      {props.candidates.map((candidate) => {
        return (
          <CandidateItem
            candidate={candidate}
            decideCandidate={props.decideCandidate}
          />
        );
      })}
    </S.Card>
  );
}
export default CandidatesList;
