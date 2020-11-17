import React, { Component } from 'react';
import CarItem from "./Car_item";
import "../CSS/Car_insert.css";

class Car_input extends Component {
  state = {
        id : 0,
        startDay : "",
        endDay : "",
        curDrive : "",
        cost : "",
        place : ""
  };
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  onSave = () =>{     
        const { onCreate } = this.props;
        onCreate(this.state);
  }

  test = (e) =>{
    this.setState({e});
  }

  render() {
    return (
      <div className="car_div">
        <input name="startDay" onChange={this.onChange} placeholder="시작일시" />
        <input name="endDay"   onChange={this.onChange} placeholder="종료일시" />
        <input name="curDrive" onChange={this.onChange} placeholder="현재거리" />
        <input name="cost"     onChange={this.onChange} placeholder="소모비용" />
        <input name="place"    onChange={this.onChange} placeholder="장소" />
        <button onClick={this.onSave}>Save</button>
      </div>
    );
  }
}

export default Car_input;

