import React, { Component } from 'react';
import Momonet from "react-moment";

class BucketItem extends Component 
{
  b_flag_text = ["일반", "중요", "매우중요", "긴급"];
  cursorStyle = { cursor: "pointer" };
  state = 
  {
      title : "",
      isEdit : false,
  }
  handleFlagClick = (e)=>
  {
    
  }
  render() {
    const { bucket, handleFlagClick } = this.props;
    return (
      <tr>
        <td style={this.cursorStyle} onClick={()=>{ handleFlagClick(bucket.b_id); } }>
          {this.b_flag_text[bucket.b_flag % 4]}
        </td>

        <td>
          <Momonet format="YYYY-MM-DD HH:mm:ss">{bucket.b_start_date}</Momonet>
        </td>

        {this.state.isEdit ? (<td style   = { { cursor: "pointer", color: "blue" } } 
                                  onclick = { (e) => { 
                                                       this.setState( { isEdit : true} );
                                                       this.setState( { title : bucket.b_title} );
                                                     }
                                }>      
        {bucket.b_title}</td>) : (<td> 
                                    <input value={this.state.title}
                                            onChange = {(e) => {this.setState( {title : e.target.value} )}}
                                            updateBucket
                                    />
                                  </td>) };
        
        <td>
          {bucket.b_end_check ? (<Momonet format="YYYY-MM-DD HH:mm:ss">{bucket.b_end_date}</Momonet> ) : ( "ⓞ" )};
        </td>

        <td>
          <input type="checkbox" />
        </td>
      </tr>
    );
  }
}

export default BucketItem;