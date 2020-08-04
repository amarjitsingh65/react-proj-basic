import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';
class App extends Component {

  state = {
    
    myData: [
      {
        fName: 'Jaspinder',
        lName: 'Kaur'
      },
      {
        fName: 'Gurleen',
        lName: 'Kaur'
      },
      {
        fName: 'Sukhman',
        lName: 'Singh'
      }
    ]
  }

 removeItem = (index) =>{
const {myData} = this.state;
  this.setState({
    myData:  myData.filter((item,i)=>{
      return i != index;
    })
  })
}

formSubmit = (item) => {
  this.setState({ myData: [... this.state.myData, item]})
}

  render(){
    /*const myData = [
      {
        fName: 'Jaspinder',
        lName: 'Kaur'
      },
      {
        fName: 'Gurleen',
        lName: 'Kaur'
      },
      {
        fName: 'Sukhman',
        lName: 'Singh'
      }
    ]*/

const {myData} = this.state;

    return(
      <div>
        <Table tabData = {myData}  removeItem = {this.removeItem}/>
        <Form submitForm = {this.formSubmit}/>
      </div>
    )
  }
}


export default App;
/*
function App() {

  const myData = [
    {
      fName: 'Jaspinder',
      lName: 'Kaur'
    },
    {
      fName: 'Gurleen',
      lName: 'Kaur'
    },
    {
      fName: 'Sukhman',
      lName: 'Singh'
    }
  ]


  


  return (
    <Table tabData = {myData}/>
  );
}

export default App;
*/