import React from 'react';






//will need to import new keg form

export default function NewKegForm(){

  const textCenter = {
    textAlign: 'center'
  }


  return(
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>


    </div>
  );
}
