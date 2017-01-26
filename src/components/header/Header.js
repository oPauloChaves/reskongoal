import React from 'react'
import { Link, IndexLink } from 'react-router'

const Header = () => (
  <div>
    <ul>
      <li><IndexLink to="/">Home</IndexLink></li>
      <li><Link to="/main">Main</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
)

export default Header
