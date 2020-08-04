import React, {Component} from 'react';
import {TableHeader} from './TableHeader';
import {Tbody} from './Tbody';
/*
const Tbody = () =>{
    return (
        <tbody>
            <tr>
                <td>Amarjit</td>
                <td>Singh</td>
            </tr>
        </tbody>
    )
    
}

const  TableHeader = () =>  {
  

    return (
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last name</th>
            </tr>
        </thead>
            
    )
}
*/

class Table extends Component{

    

    render(){
        const {tabData, removeItem} = this.props;
        return(
            <table>
                <TableHeader/>
                <Tbody thData = {tabData} removeItem2 = {removeItem}/>
            </table>
        )
    }

}
export default Table;
