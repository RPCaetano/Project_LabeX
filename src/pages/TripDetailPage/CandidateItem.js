import React from 'react';
import aceitar from "../../assets/aceitar.png"
import rejeitar from "../../assets/rejeitar.png"
// import { Container } from './styles';

const CandidateItem=(props)=> {
  return(
  <div>
  <img src={aceitar}/>  <img src={rejeitar}/>  <strong>{props.infoName}</strong>

  </div>
  );
}

export default CandidateItem;