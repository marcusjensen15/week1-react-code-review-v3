import React from 'react';






//will need to import new keg form

export default function NewKegForm(){

  const textCenter = {
    textAlign: 'center',
    fontSize: '2vh'
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

  const listStyle = {
    listStyle: 'none'
  }

  const submitButtonStyle = {

    marginTop: '4%',
    border: 'none',
    textAlign: 'center',
    fontSize: '20px'

  }

  const buttonSize = {
    fontSize: '50px'
  }
  const inputPadding = {
    marginBottom: '60px'

  }

  return(

    <div style={textCenter}>
      <div style={formWrap}>
        <h1 style={newBeerHeader}>Add a new beer </h1>
        <form>
          <ul style={listStyle}>
            <li style={inputPadding}>
              <label>
                Name of Beer
                <br></br>
                <input type="text" name="name" />
              </label>
            </li>
            <li style={inputPadding}>
              <label>
                Brand
                <br></br>
                <input type="text" name="name" />
              </label>
            </li>
            <li style={inputPadding}>
              <label>
                Price per Pint
                <br></br>
                <input type="text" name="name" />
              </label>
            </li>
            <li style={inputPadding}>
              <label>
                Alcohol Content
                <br></br>
                <input type="text" name="name" />
              </label>
            </li>
            <li style={inputPadding}>
              <label>
                Keg Volume
                <br></br>
                <input type="number" name="name" />
              </label>
            </li>
            <div  style={submitButtonStyle}><li><input style={buttonSize}type="submit" value="Submit" /></li> </div>

          </ul>
        </form>

      </div>
    </div>
  );
}
