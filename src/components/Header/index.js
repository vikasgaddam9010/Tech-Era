import {Link} from 'react-router-dom'

import {Div} from './Css'
import './style.css'

const Header = () => (
  <Div>
    <Link to="/">
      <img
        className="img-style"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </Div>
)
export default Header
