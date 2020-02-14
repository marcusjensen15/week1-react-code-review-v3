import React from 'react';
import PropTypes from 'prop-types';

export default function Keg(props){
  var kegTextStyle = {
    fontSize: '16px',
    float: 'right',
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%'
  }


  return(
    <div>
      <div style={kegTextStyle}>

        <h3>{props.name}</h3>
        <h4>{props.brand}</h4>
        <p>{props.price}</p>
        <p>{props.alcoholContent}</p>
        <p>{props.kegVolume}</p>

      </div>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  kegVolume: PropTypes.number.isRequired
}
