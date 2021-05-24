import React from 'react';

// import { Container } from './styles';

const TripInfoItem = (props)=> {
  return (
    <div>
    <strong>{props.infoName}</strong>: {props.info}
    </div>
    );
  
}
export default TripInfoItem
