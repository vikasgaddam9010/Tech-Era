import Header from '../Header'

import './style.css'

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="div-not-found">
        <img
          className="img-not-found"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
          alt="not found"
        />
        <h1 className="head-style">Page Not Found</h1>
        <p className="para-style">
          We are sorry, the page you are requested could not be found.
        </p>
      </div>
    </>
  )
}

export default NotFound
