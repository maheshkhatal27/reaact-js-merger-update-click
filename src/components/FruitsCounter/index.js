import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatBananas = () => {
    const {bananas} = this.state
    this.setState(prevState => ({
      bananas: prevState.bananas + 1,
    }))
  }

  eatMangoes = () => {
    const {mangoes} = this.state
    this.setState(prevState => ({
      mangoes: prevState.mangoes + 1,
    }))
  }

  render() {
    const {mangoes} = this.state
    const {bananas} = this.state
    return (
      <div className="main-bg-container">
        <div className="items-container">
          <h1 className="heading">
            Bob ate <span className="fruit">{mangoes}</span> mangoes
            <span className="fruit"> {bananas}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="mango-container">
              <img
                className="img-resize"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoes"
              />
              <button className="button" onClick={this.eatMangoes}>
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                className="img-resize"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="bananas"
              />
              <button className="button" onClick={this.eatBananas}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
