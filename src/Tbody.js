import React from 'react';
export const Tbody = (props) =>{
    const rows= props.thData.map((row,index) => {

        return (
                <tr key = {index}>
                    <td>{row.fName}</td>
                    <td>{row.lName}</td>
                    <td><button onClick = {()=> props.removeItem2(index)}>Delete</button></td>
                </tr>
        )
    })

    return <tbody>{rows}</tbody>
    /*
        return (
            <tbody>
                <tr>
                    <td>Amarjit</td>
                    <td>Singh</td>
                </tr>
            </tbody>
        )
    */
    
}

