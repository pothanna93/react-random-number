import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: '0',
  }

  randomNum = () => Math.ceil(Math.random() * 100)

  onGenerateRandomNumber = () => {
    const randomNumber = this.randomNum()
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    console.log(count)
    return (
      <div className="random-bg-container">
        <div className="random-num-card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="gen-button"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="random-value">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
