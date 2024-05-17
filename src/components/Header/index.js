import {Link} from 'react-router-dom'

import './style.css'

const Header = () => (
  <nav className="div-header">
    <Link to="/">
      <img
        className="img-style"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </nav>
)
export default Header
