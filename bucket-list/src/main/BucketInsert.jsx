import React, { Component } from 'react';

class BucketInsert extends Component 
{
    state = {
        
    }

    handleOnchange = (e) =>
    {
      this.setState( { [e.target.name] : e.target.value} );
    };

    handleKeyPress = (e) =>
    {
        if(e.key === "Enter")
            alert(e.target.value);
    }
    render() 
    {
        return (
            <section className="w3-container-fluid">
                <div className="w3-form-control w3-margin">
                    <input 
                        name="bucket_title"
                        // value={this.state.bucket_title}
                        onChange={this.handleOnchange}
                        onKeyPress={this.handleKeyPress}
                        className="w3-input w3-border w3-hover-gray w3-round" 
                        placeholder="버킷에 추가할 내용 입력"/>
                </div>
            </section>
        );
    }
}

export default BucketInsert;