import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const activeStyle = { color: 'orange' };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      {' | '}
      <NavLink to="/function" activeStyle={activeStyle}>
        Courses Function Component
      </NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
}
