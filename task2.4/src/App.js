import React from 'react';

const List = ({ name }) => {
    return (
      <li>{name.name}</li>
    )
}  
class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        persons: [
          { name: 'Arto Hellas' }
        ],
        newName: ''
      }
    }
    addName = (event) => {
        event.preventDefault()
        const nameObject = {
          name: this.state.newName,
        }
        const names = this.state.persons.concat(nameObject)
    
        this.setState({
          persons: names,
          newName: ''
        })
      }
    handleNameChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
    }
  
    render() {
      return (
        <div>
          <h2>Puhelinluettelo</h2>
          <form onSubmit={this.addName}>
            <div>
              nimi: <input value={this.state.newName} 
                        onChange={this.handleNameChange}/>
            </div>
            <div>
              <button type="submit">lisää</button>
            </div>
          </form>
          <h2>Numerot</h2>
          <ul>
            {this.state.persons.map(name => <List key={name.name} name={name} />)}
          </ul>
        </div>
      )
    }
  }
  
  export default App
  