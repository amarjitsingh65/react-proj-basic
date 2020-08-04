import React, {Component} from 'react';

class Form extends Component{

    intitialState = {
        fName:'',
        lName:''
    }


 state = this.intitialState;

 update = (event)=>{
     const {name, value } = event.target;
     this.setState({
         [name] : value

     })
 }

 submitForm = () => {
     this.props.submitForm(this.state);
     this.setState(this.intitialState);
 }

 render(){
     const {fName, lName} = this.state;
     return (
         <form>
               <label htmlFor='fName'>First Name</label> 
               <input 
               type='text'
               name='fName'
               id = 'fName'
               value = {fName}
                onChange = {this.update}
               />
                <br/>
                <br/>
               <label htmlFor = 'lName'> Last Name</label>
               <input
               type= 'text'
               name='lName'
               id = 'lName'
               value = {lName}
               onChange = {this.update}
               />
                <br/>
                <br/>
            
            <input type="button"  value = "Submit" onClick = {this.submitForm}/>
         </form>

         
     )
 }

}
export default Form;