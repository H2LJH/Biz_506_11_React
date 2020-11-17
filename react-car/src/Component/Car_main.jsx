import React, { Component } from 'react';
import CarInput from "./Car_input";
import CarList from "./Car_list";
import "../CSS/Car_list.css";

class Car_main extends Component {
  id = 0
  state = {
    carList: [],
    item : {},
  };

  componentDidMount(){
      const localList = JSON.parse(localStorage.getItem("carList"));
        this.setState( {carList : localList} );
  }

  componentDidUpdate(preProps, preState){
      const preString = JSON.stringify(preState.carList);
      const CurString = JSON.stringify(this.state.carList); 
      if(preString !== CurString)
        localStorage.setItem("carList", CurString);

        console.log(this.state.item + "asdasdasdasda");
  }

  onUpdate = (e) =>{
    const updateList = this.state.carList.map((item) =>{
        if(item.id === Number(e.id)){
            item = e;
            return this.state.carList;
        }
        else return null;
    });
    if(updateList != null)
      this.setState( {carList : updateList} );
  }

  onCreate = (e) => {
        e.id = this.id++;
        this.setState( { carList: [...this.state.carList, e] } );
      };

  fetchItem(e){
    this.setState( { e });
  }

  render() {
    return (
      <div>
        <CarInput onCreate={this.onCreate} onUpdate={this.onUpdate} />
        <CarList carList= {this.state.carList} fetchItem = {this.fetchItem}  />
      </div>
    );
  }
}

export default Car_main;