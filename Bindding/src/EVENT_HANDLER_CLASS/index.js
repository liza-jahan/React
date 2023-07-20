import React, { Component } from "react";

class EVENT_HANDLER_CLASS extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       changedvalue: ''
    }
  }
  


  handleOnChange = (e) => {
   this.setState({
    changedvalue : e.target.value
   },()=>{
     //console.log(e.target.value)
   })
  
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleOnChange}/>
        <p>{this.state.changedvalue}</p>
      </div>
    );
  }
}
export default EVENT_HANDLER_CLASS;
