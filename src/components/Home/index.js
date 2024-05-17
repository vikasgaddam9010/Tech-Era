import {Component} from 'react'
import Header from '../Header'
import LoaderingView from '../Loader'

import {Link} from 'react-router-dom'

import './style.css'

const apiStatus = {
  initial: 'initial',
  loading: 'loader',
  sucess: 'sucess',
  failed: 'failed',
}

class Home extends Component {
  state = {apistate: apiStatus.initial, list: []}

  componentDidMount() {
    this.getCoursesList()
  }

  retryBtn = () => {
    this.getCoursesList()
  }

  getCoursesList = async () => {
    this.setState({apistate: apiStatus.loading})
    const courseDetailsApiUrl = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(courseDetailsApiUrl, options)
    if (response.ok) {
      const jsonData = await response.json()
      this.setState({list: jsonData.courses, apistate: apiStatus.sucess})
    } else {
      this.setState({apistate: failed})
    }
  }

  renderSuccessView = () => {
    const {list} = this.state
    return (
      <>
        <h1>Courses</h1>
        <ul className="UnorderList">
          {list.map(each => (
            <li className="list-item" key={each.id}>
              <Link className="link-style" to={`/courses/${each.id}`}>
                <img className="img-logo" alt={each.name} src={each.logo_url} />
                <p className="para-name">{each.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  }

  renderFailedVIew = () => {
    return (
      <div className="DivForFailedViewHome">
        <img
          className="failed-img-logo"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <h1 className="head-style">Oops! Something Went Wrong</h1>
        <p>We cannot seem to find the page you are looking for</p>
        <button className="retry-btn" onClick={this.retryBtn}>
          Retry
        </button>
      </div>
    )
  }
  renderViwe = () => {
    const {apistate} = this.state
    switch (apistate) {
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
        <div className="HomeContainer">{this.renderViwe()}</div>
      </>
    )
  }
}

export default Home
