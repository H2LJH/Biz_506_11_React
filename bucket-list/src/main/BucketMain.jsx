import React, { Component } from 'react';
import BucketInsert         from "./BucketInsert";
import BucketList           from "./BucketList";

class BucketMain extends Component {
  id = 1; // 일반형 변수는 코드내에서 자유롭게 값을 변경하여 사용할수 있고, 여기에서는 bucketList의 b_id 값의 PK값을 만들기 위해 사용한다.

  // React에서는 state형 변수는 절대 직접 변경하지 않는다.
  state = {
    bucketList: [
      {
        b_id: 0,
        b_flag: 0,
        b_start_date: "2020-11-12",
        b_title: "리액트 정복",
        b_end_date: "",
        b_end_check: false,
        b_cancel: false,
      },
      {
        b_id: 1,
        b_flag: 1,
        b_start_date: "2020-11-12",
        b_title: "제주도 여행가기",
        b_end_date: "2020-11-12",
        b_end_check: true,
        b_cancel: false,
      },
    ],
  };
  // 화면이 이미 완성된 상태에서
  // 데이터가 변화 했을때 reRendering하려고 할때 실행되는 method
  // insert, update, delete 되었을때 실행될 메서드
  // 실제 DB와 연동을 하면 이 method에서 AJAX로 서버에 데이터를 전송하고
  // 서버에서는 CRUD를 수행한다.
  // 이 메서드가 React에 의해 호출될때
  // State변수의 변화를  감지할 수 있다.
  // state변수에 변화가 있어서 화면이 rendering 될때
  // 변화되기 이전 데이터가 pre** 매개변수에 담겨서 전달이 된다.
  // 이 데이터와 현재 데이터를 비교하여 달라졌을 경우
  // DB에 저장하거나 하는 일을 수행하여 효율을 높일 수 있다.
  componentDidUpdate(preProps, preState) {
    const preString = JSON.stringify(preState.bucketList);
    const thisString = JSON.stringify(this.state.bucketList);
    if (preString !== thisString) {
      localStorage.setItem("bucketList", thisString);
    }
  }

  // 현재 컴포넌트가 모두 마운트가 되고
  // Rendering이 되기 바로직전에 호출되는 method
  // 서버로부터 데이터를 요청하여 가져오는 코드를 추가
  componentDidMount() {
    const loadBucketList = localStorage.getItem("bucketList"); // String
    if (loadBucketList) {
      // 문자열 : null, ""이 아니면 논리적으로 true
      const jsonBucketList = JSON.parse(loadBucketList);
      this.setState({ bucketList: jsonBucketList });
      this.id = jsonBucketList.length;
    }
  }

  BucketInsert = (bucket_title) => {
    const date = new Date();
    const bucket = {
      b_id: ++this.id,
      b_flag: 9,
      b_start_date: date.toString(),
      b_title: bucket_title,
      b_end_date: "",
      b_end_check: false,
      b_cancel: false,
    };
    // this.setState ({ bucketList : this.state.bucketList.concat({ ...bucket }) });
    this.setState({ bucketList: [...this.state.bucketList, bucket] }); // 전개 연산자를 사용하는 방법
  };

  handleFlagClick = (id) =>
  {
    const flagBucketList = this.state.bucketList.map((bucket) =>
    {
        if(bucket.b_id === Number(id))
        {
            const flag = bucket.b_id + 1;
            return { ...bucket, b_flag : flag}
        }
        else return bucket;
        
    });
     
    this.setState( {bucketList : flagBucketList} );
  };

  /*
        class Commonet 에서 child Component에 state형 변수를 보낼때는
        전송 변수명 = {this.state.변수}
        
        함수를 보낼때 
        전송 함수명 = {this.함수명}
    */
  render() {
    return (
      <div>
        <p>
          <BucketInsert BucketInsert={this.BucketInsert} />
        </p>

        <p>
          <BucketList
            bucketList={this.state.bucketList}
            handleFlagClick={this.handleFlagClick}
          />
        </p>
      </div>
    );
  }
}

export default BucketMain;