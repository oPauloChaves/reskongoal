import React from 'react'
import { Link } from 'react-router'

const Header = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/main">Main</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
)

export default Header
