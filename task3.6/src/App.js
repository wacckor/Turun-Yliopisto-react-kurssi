import React from 'react';
//import axios from 'axios';
import personsServices from './services/persons'



const List = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.number}</td>   
            <td><button onClick={props.deleteRow} >Poista</button></td>
        </tr>    
    )
} 
const Form = (props) => {
    return (
        <form onSubmit={props.addName}>
            <div>
              nimi: <input value={props.newName} 
                        onChange={props.handleNameChange}/>
            </div>
            <div>
                numero: <input value={props.newNumber}
                        onChange={props.handleNumberChange}/>
            </div>
            <div>
              <button type="submit">lisää</button>
            </div>
          </form>
    )
} 
class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        persons: [],
        newName: '',
        newNumber:'',
      }
    }

    componentDidMount() {
        console.log('did mount')
        /*axios
          .get('http://localhost:3001/persons')
          .then(response => {
            console.log('promise fulfilled')
            this.setState({ persons: response.data })
             })
            */
        personsServices
            .getAll()
            .then(response => {
              this.setState({persons:response})
            })  
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
          /*
            axios.post('http://localhost:3001/persons', nameObject)
            .then(response => {
              console.log(response)
              this.setState({
                persons: this.state.persons.concat(response.data),
                newName: '',
                newNumber: ''
              })
            })
          */
           personsServices
            .addNew(nameObject)
            .then(addName => 
              this.setState({
                persons: this.state.persons.concat(addName),
                newName: '',
                newNumber: ''
              })
            )
        }
      }

    
    handleNameChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        console.log(event.target.value)
        this.setState({ newNumber: event.target.value })
    }
    
    deleteRow = (id, name) => {
        return() => {
            //console.log("id:" + id)
            //const baseUrl = 'http://localhost:3001/persons'
            let pois = window.confirm("Poistetaanko " + name + "?")
          
            if (pois){
                personsServices
                .deleteById(id)
                .then(() => {
                  
                    let deleteDone = this.state.persons.filter(person => person.id !== id)
                    console.log(deleteDone)
                 this.setState({
                     persons: deleteDone} )  
                 })
                
                
            }
        }
        
    }
  
    render() {
      return (
        <div>
          <h2>Puhelinluettelo</h2>
          <Form addName = {this.addName} newName = {this.state.newName} handleNameChange = {this.handleNameChange} newNumber = {this.state.newNumber} handleNumberChange = {this.handleNumberChange}/>
          <h2>Numerot</h2>
          <table>
            <tbody>
                    {this.state.persons.map(person => <List key={person.id} name={person.name} number={person.number} deleteRow = {this.deleteRow(person.id, person.name)}/>)}
            </tbody>
          </table>
        </div>
      )
    }
  }
  
  export default App