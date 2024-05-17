import {Component} from 'react'
import Header from '../Header'
import LoaderingView from '../Loader'
import './style.css'

const apiStatus = {
  initial: 'initial',
  loading: 'loader',
  sucess: 'sucess',
  failed: 'failed',
}

class CourseItemDetails extends Component {
  state = {apiState: apiStatus.initial, details: {}}

  componentDidMount() {
    this.getCourseItemDetails()
  }

  retryBtn = () => {
    this.getCourseItemDetails()
  }

  getCourseItemDetails = async () => {
    this.setState({apiState: apiStatus.loading})
    const {id} = this.props.match.params

    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }
    const reponse = await fetch(url, options)
    if (reponse.ok) {
      const jsonData = await reponse.json()
      this.setState({
        details: jsonData.course_details,
        apiState: apiStatus.sucess,
      })
    } else {
      this.setState({apiState: apiStatus.failed})
    }
  }

  renderSuccessView = () => {
    const {details} = this.state
    console.log(details)
    return (
      <div className="Div">
        <img className="Img" alt={details.name} src={details.image_url} />
        <div className="Para">
          <h1>{details.name}</h1>
          <p>{details.description}</p>
        </div>
      </div>
    )
  }
  renderFailedVIew = () => {
    return (
      <div className="DivForFailedView">
        <img
          className="Img"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <h1>Opps! Somthing Went Wrong</h1>
        <p>We cannot Seem to find the page that you are looking for.</p>
        <button className="retry-btn" onClick={this.retryBtn}>
          Retry
        </button>
      </div>
    )
  }
  renderView = () => {
    const {apiState} = this.state
    console.log(apiState)
    switch (apiState) {
      case apiStatus.loading:
        return <LoaderingView />
      case apiStatus.sucess:
        return this.renderSuccessView()
      case apiStatus.failed:
        return this.renderFailedVIew()
      default:
        return null
    }
  }
  render() {
    return (
      <>
        <Header />
        <div className="main-container">{this.renderView()}</div>
      </>
    )
  }
}

export default CourseItemDetails
