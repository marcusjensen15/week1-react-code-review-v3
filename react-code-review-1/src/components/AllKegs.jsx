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
        brand= "Budweiser"
        price= "$5/pint"
        alcoholContent="3.2% ABV"
        kegVolume = "125"
        />
        <Keg
          name= "Coors Light"
          brand= "Coors"
          price= "$5/pint"
          alcoholContent="3.5% ABV"
          kegVolume = "125"
          />
          <Keg
            name= "Widmer Hef"
            brand= "Widmer Bros"
            price= "$6/pint"
            alcoholContent="5% ABV"
            kegVolume = "125"
            />
            <Keg
              name= "Cream Ale"
              brand= "Pelican Brewing"
              price= "$6/pint"
              alcoholContent="6.2% ABV"
              kegVolume = "125"
              />
    </div>
  );
}
