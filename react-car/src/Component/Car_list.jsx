import React, { Component } from 'react';
import CarItem from "./Car_item";

class Car_list extends Component {

  fetchItem = (item) =>{
    console.log(JSON.stringify(item));
      this.props.fetchItem(item);
  }

    render() {
        const { carList, fetchItem } = this.props;
        const carItem = carList.map( (carItem) => { return <CarItem item = {carItem} fetchItem={this.fetchItem} />; });
        return (
          <table className="car_table">
            <thead>
              <th>No</th>
              <th>구분</th>
              <th>시작일시</th>
              <th>종료일시</th>
              <th>현재거리</th>
              <th>소모비용</th>
              <th>장소</th>
            </thead>
            <tbody>
              {carItem}
            </tbody>
          </table>
        );
    }
}

export default Car_list;