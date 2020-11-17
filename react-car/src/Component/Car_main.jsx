import React, { Component } from 'react';
import CarInsert from "./Car_insert";
import CarList from "./Car_list";
import "../CSS/Car_list.css";

class Car_main extends Component {
  state = {
    carList: [
    ],
  };

  componentDidMount(){
      const index = localStorage.length;
      for(let i = 0; i < index; ++i){
        const item = JSON.parse(localStorage.getItem(i + ""));
        this.setState( {carList : [...this.state.carList, item]});
      }
  }


  onCreate = (e) => {
        this.setState( { carList: [...this.state.carList, e] } );
      };

  render() {
    return (
      <div>
        <CarInsert onCreate={this.onCreate} />
        <CarList carList= {this.state.carList} />
      </div>
    );
  }
}

export default Car_main;