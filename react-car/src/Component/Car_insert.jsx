import React, { Component } from 'react';
import "../CSS/Car_insert.css";

class Car_insert extends Component {
    id  = 1;
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
        localStorage.setItem(this.id, JSON.stringify(this.state));
        this.setState({id : ++this.id});
        const { onCreate } = this.props;
        onCreate(this.state);
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

export default Car_insert;

