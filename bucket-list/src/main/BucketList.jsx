import React, { Component } from 'react';
import BucketItem from "./BucketItem";

class BucketList extends Component 
{
    render() 
    {
        // Parent Compomnet에서 보낸 변수를 받아서 분해한후 사용할 준비하기
        const { bucketList, handleFlagClick } = this.props;
        const bItemList = bucketList.map((bucket) =>
        {
           return (
             <BucketItem bucket={bucket} handleFlagClick={handleFlagClick} />
           );
        });

        return (
          <section className="w3-container-fluid w3-margin">
            <table className="w3-table w3-table-all">
              <tr>
                <th>FLAG</th>
                <th>DATE</th>
                <th>BUCKET</th>
                <th>SUCCESS</th>
                <th>CANCEL</th>
              </tr>  
                {bItemList}
            </table>
          </section>
        );
    }
}

export default BucketList;