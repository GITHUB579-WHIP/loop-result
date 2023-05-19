import {component} from 'react'
import './index.css'

class Speedometer extends component {
  state = {
    count: 0,
  }

  onIncrease = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  onDecrease = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="speedometer-container">
          <h1 className="title">SPEEDOMETER</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1 className="heading">Speed is {count}mph</h1>
          <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              className="accButton Button"
              type="button"
              onClick={this.onIncrease}
            >
              Accelerate
            </button>
            <button
              className="brakeButton Button"
              type="button"
              onClick={this.onDecrease}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
