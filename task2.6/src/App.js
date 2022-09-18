import React from 'react';

//If the directory already includes the name that user tries to add, prevent adding it.

const List = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.number}</td>   
        </tr>    
    )
}  
class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        persons: [
          { name: 'Arto Hellas' ,
            number: '050-4568908'}
        ],
        newName: '',
        newNumber: '',
      }
    }
    addName = (event) => {
        event.preventDefault()
        
        const nameObject = {
            name: this.state.newName,
            number: this.state.newNumber
        }
        
        let repeatName = false;  
        
        function preventRepeat(name){
            //console.log("name: " + name);
            //console.log("nameObject.name: " + nameObject.name);
            if (name.name === nameObject.name){
                repeatName = true;
                alert("This name is already on the list.");
            }
        }
        //this.state.persons.forEach(element => console.log(element.name));
        this.state.persons.forEach(preventRepeat);  

        if(!repeatName){
            const names = this.state.persons.concat(nameObject)
            this.setState({persons: names})
        }
        this.setState({newName: '',
                       newNumber: ''})
      }

    
    handleNameChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        console.log(event.target.value)
        this.setState({ newNumber: event.target.value })
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
                numero: <input value={this.state.newNumber}
                        onChange={this.handleNumberChange}/>
            </div>
            <div>
              <button type="submit">lisää</button>
            </div>
          </form>
          <h2>Numerot</h2>
          <table>
            <tbody>
                    {this.state.persons.map(person => <List key={person.name} name={person.name} number={person.number}/>)}
            </tbody>
          </table>
        </div>
      )
    }
  }
  
  export default App
  