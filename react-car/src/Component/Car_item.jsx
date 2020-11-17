import React, { Component } from 'react';

class Car_item extends Component 
{
  onExportItem = (item) => {
    this.props.fetchItem(item);
  }

    render() {
        const { item } = this.props;
        return (
          <tr onClick={()=> this.onExportItem(item)} style = { {cursor : "pointer"} }>
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