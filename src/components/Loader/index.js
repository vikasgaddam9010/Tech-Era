import Loader from 'react-loader-spinner'

import './style.css'

const LoaderingView = () => (
  <div className="div" data-testid="loader">
    <Loader type="ThreeDots" color="BLUE" height={50} width={50} />
  </div>
)

export default LoaderingView
