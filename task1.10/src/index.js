import React from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return(
    <button onClick= {props.handle}>{props.text}</button>
  )
}

const Statistics = (props) => {
   return(
    <div>
      <h1>{props.header}</h1>
      {
        props.times === 0?
            <em>ei yhtään palautetta annettu</em>  
            :
            <table>
              <tbody>
                {props.row}
              </tbody>
            </table>
      } 
    </div>
  )
}

const Statistic = (props) => {
  return(
    <tr>
      <td>{props.text}</td><td>{props.value}</td>
    </tr>
  ) 
}

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
          <Button handle = {this.klikHyva} text = {"hyvä"}/>
          <Button handle = {this.klikNeutraali} text = {"neutraali"}/>
          <Button handle = {this.klikHuono} text = {"huono"}/>
          
          <Statistics header = {"statistiikka"} 
              times = {this.state.times}
              row = {[<Statistic key = "1" text = {"hyvä"} value = {this.state.hyva}/>, 
                      <Statistic key = "2" text = {"neutraali"} value = {this.state.neutraali}/>,
                      <Statistic key = "3" text = {"huono"} value = {this.state.huono}/>,
                      <Statistic key = "4" text = {"keskiarvo"} value = {this.state.keskiarvo.toFixed(1)}/>,
                      <Statistic key = "5" text = {"positiivisia"} value = {this.state.positiiviPros.toFixed(1)}/> ]}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
