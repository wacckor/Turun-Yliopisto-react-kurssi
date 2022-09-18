import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      times: 0,
      keskiarvo: 0,
      positiiviPros: 0
    }
  }

  klikHyva = () => {

    this.setState({
      hyva: this.state.hyva + 1,
      times: this.state.times +1,
    });
    this.setState((state) => {
      return {positiiviPros: (state.hyva/state.times)*100}
    });
    this.keskiarvoLaskuri(1);
  }

  klikNeutraali = () => {
    
    this.setState({
      neutraali: this.state.neutraali + 1,
      times: this.state.times +1,
    });
    this.setState((state) => {
      return {positiiviPros: (state.hyva/state.times)*100}
    });
    this.keskiarvoLaskuri(0);
    
  }

  klikHuono = () => {
    
    this.setState({
      huono: this.state.huono + 1,
      times: this.state.times + 1,
    });
    this.setState((state) => {
      return {positiiviPros: (state.hyva/state.times)*100}
    });
    this.keskiarvoLaskuri(-1);
  }

  keskiarvoLaskuri = (value) => {
    this.setState({
      keskiarvo: this.state.keskiarvo + value * 0.1,
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>anna palautetta</h1>
          <button onClick= {this.klikHyva}>hyvä</button>
          <button onClick= {this.klikNeutraali}>neutraali</button>
          <button onClick= {this.klikHuono}>huono</button>
          
          <h1>statistiikka</h1>

          <div>hyvä {this.state.hyva}</div>
          <div>neutraali {this.state.neutraali}</div>
          <div>huono {this.state.huono}</div>
          <div>keskiarvo {this.state.keskiarvo.toFixed(1)}</div>
          <div>positiivisia {this.state.positiiviPros.toFixed(1)} %</div>
          

        </div>
      </div>
    )
  }

  
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
