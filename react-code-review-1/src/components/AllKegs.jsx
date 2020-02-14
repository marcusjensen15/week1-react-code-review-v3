import React from 'react';
import Keg from './Keg';

//will need to import new keg form

export default function AllKegs(){

  const textCenter = {
    textAlign: 'center'
  }

  return(
    <div>
      <h1 style={textCenter}>All Available Kegs</h1>
      <Keg
        name= "Bud Light"
        brand= "Budweiser"
        price= "$5/pint"
        alcoholContent="3.2 ABV"
        kegVolume = "125"
        />
    </div>
  );
}
