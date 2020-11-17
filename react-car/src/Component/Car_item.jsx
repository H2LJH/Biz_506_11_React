import React, { Component } from 'react';

class Car_item extends Component 
{

    test = (e) =>{    
        localStorage.setItem(e + "", );
    }

    render() {
         const { item } = this.props;
         const id = item.id;
        return (
          <tr onClick = {() => this.test( id )}>
            <td>{item.id}</td>
            <td>{item.ischeck}</td>
            <td>{item.startDay}</td>
            <td>{item.endDay}</td>
            <td>{item.curDrive}</td>
            <td>{item.cost}</td>
            <td>{item.place}</td>
          </tr>
        );
    }
}

export default Car_item;