
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  const navLinks = {
    textAlign: 'center',
    paddingTop: '3%',
    fontSize: '2vh'
  }

  const noUnderline ={
    textDecoration: 'none'

  }

  const hrStyle = {
    marginTop: "2%",


  }

  return(
    <div style={navLinks}>
      <Link style ={noUnderline} to='/aboutapp'> About The App</Link> |
        <Link style ={noUnderline} to='/newkegform'> Add a New Keg</Link> |
          <Link style ={noUnderline} to='/'> All Kegs</Link>


          <div style={hrStyle}><hr/></div>
        </div>
      );
    }
