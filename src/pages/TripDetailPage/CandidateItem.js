import React from 'react';
import checked from "../../assets/checked.png"
import cancel from "../../assets/cancel.png"
// import { Container } from './styles';

const CandidateItem=(props)=> {
  const approveCandidate = () => {
    props.decideCandidate(true, props.candidate.id)
  }

  const rejectCandidate = () => {
    props.decideCandidate(false, props.candidate.id)
  }

  return(
  <div>
   
  <img src={checked} onClick={approveCandidate}/>  <img src={cancel} onClick={rejectCandidate}/>  <strong>{props.candidate.name}</strong>

  </div>
  );
}

export default CandidateItem;