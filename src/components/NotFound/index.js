import Header from '../Header'
import {Div, Img} from './Css'
import './style.css'

const NotFound = () => {
  return (
    <>
      <Header />
      <Div>
        <Img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          alt="not found"
        />
        <h1 className="head-style">Page Not Found</h1>
        <p className="para-style">We are sorry, the page you are requested could not be found.</p>
      </Div>
    </>
  )
}

export default NotFound
