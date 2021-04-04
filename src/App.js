
import './App.css';
import {Component} from 'react';
import CardList from '../src/components/card-list/card-list.component';
import { SearchBox } from '../src/components/search-box/search-box.component';


class App extends Component{
  constructor(){
    super();
    //The super calls the constructor of the component class 
    //Then we can have access to something called state
    this.state={
      monsters:[],
      searchField:''
    }
    
  }

  //After react places the component on our page this function gets called
  //We use fetch api to go to the end point & return a promise
  //& then we return another promise which is json object & update monsters with the users
  componentDidMount(){
      fetch("http://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>this.setState({ monsters:users}))
  }


  handleChange=(e)=>{
      this.setState({searchField:e.target.value},()=>{console.log(this.state)});

  }


  render(){

      const { monsters,searchField } =this.state;
      const filteredMonsters=monsters.filter(monster=>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
    
    return(

      <div className="App">

        <SearchBox 
          placeholder="search monsters"
          handleChange={this.handleChange}
          />

        <CardList monsters={filteredMonsters} />
        
  
       
      </div>
    )
      
  }
}
export default App;
