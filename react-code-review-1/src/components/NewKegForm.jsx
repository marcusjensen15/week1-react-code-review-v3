import React from 'react';






//will need to import new keg form

export default function NewKegForm(){

  const textCenter = {
    textAlign: 'center',
    fontSize: '1.5vh'
  }
  const newBeerHeader = {
    marginBottom: '4vh'
  }

  const formWrap = {
    backgroundColor: '#E6F9D0',
    border: 'thick solid #D8F2BB',
    borderRadius: '20px',
    padding: '0 40px',
    boxShadow: '-2px 10px 20px #40403F',
    color: 'navy',
    marginLeft: '30%',
    marginRight: '30%',
    marginTop: '6%'
  }

  return(

    <div style={textCenter}>
      <div style={formWrap}>
        <h1 style={newBeerHeader}>Add a new beer </h1>
        <form>
          <ul>
            <li>
              <label>
                Name of Beer:
                <input type="text" name="name" />
              </label>
            </li>
            <li>
              <label>
                Brand:
                <input type="text" name="name" />
              </label>
            </li>
            <li>
              <label>
                Price per Pint:
                <input type="text" name="name" />
              </label>
            </li>
            <li>
              <label>
                Alcohol Content:
                <input type="text" name="name" />
              </label>
            </li>
            <li>
              <label>
                Keg Volume:
                <input type="number" name="name" />
              </label>
            </li>
            <li><input type="submit" value="Submit" /></li>

          </ul>
        </form>

      </div>
    </div>
  );
}
