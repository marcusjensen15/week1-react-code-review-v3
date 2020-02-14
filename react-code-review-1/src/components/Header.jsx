
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  const navLinks = {
    textAlign: 'center',
    paddingTop: '3%'
  }

  const hrStyle = {
    marginTop: "5%"
  }

  return(
      <div style={navLinks}>
        <p> <Link to='/aboutapp'>About The App </Link></p>
      </div>
  );
}
