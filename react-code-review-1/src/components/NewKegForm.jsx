import React from 'react';






//will need to import new keg form

export default function NewKegForm(){

  const textCenter = {
    textAlign: 'center',
    fontSize: '1.5vh'
  }
  const newBeerHeader = {
    marginBottom: '6vh'

  }

  return(

    <div style={textCenter}>
      <h1 style={newBeerHeader}>Add a new beer </h1>
      <form>
        <label>
          Name of Beer:
          <input type="text" name="name" />
        </label>
        <label>
          Brand:
          <input type="text" name="name" />
        </label>
        <label>
          Price per Pint:
          <input type="text" name="name" />
        </label>
        <label>
          Alcohol Content:
          <input type="text" name="name" />
        </label>
        <label>
          Keg Volume:
          <input type="number" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>


    </div>
  );
}
