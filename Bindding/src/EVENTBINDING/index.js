import React, { Component } from 'react'

// export default class EVENTBINDING extends Component {
 
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count :0
//       }
//     }
//     // ER6 a korle prblm hy na..kintu norlam vabe krle hy ty bindding krte hy
//     // handleClick=()=>{
//     //     this.setState({
//     //         count: this.state.count+1
//     //     })
//     // }


//     //normal function
//     handleClick(){
//         this.setState({
//             count: this.state.count+1
//         })
//     }
 
//     render() {
//     return (
//       <div>
//       <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick(this)}>increase</button> //extra this ta bindding
//       </div>
//     )
//   }
// }



export default class EVENTBINDING extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }

     // constructor bindding
      this.handleClick=this.handleClick.bind(this);

    }
   
    handleClick(){
        this.setState({
            count: this.state.count+1
        })
    }
 
    render() {
    return (
      <div>
      <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>increase</button> 
      </div>
    )
  }
}
