import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
    })
  }

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
    })
  }

  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1,
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>anna palautetta</h1>
          <button onClick={this.klikHyva}>hyvä</button>
          <button onClick={this.klikNeutraali}>neutraali</button>
          <button onClick={this.klikHuono}>huono</button>
          
          <h1>statistiikka</h1>

          <div>hyvä {this.state.hyva}</div>
          <div>neutraali {this.state.neutraali}</div>
          <div>huono {this.state.huono}</div>

        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)