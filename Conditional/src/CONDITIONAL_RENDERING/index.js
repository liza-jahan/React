import React, { Component } from 'react'
import HomePage from './HomePage'
import LogInPage from './LogInPage'

 class CONDITIONAL_RENDERING extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        isLoggedIn : true
    }
  }
  
  
    render() {
        const {isLoggedIn}=this.state;
        let element;
        
//     if(isLoggedIn){
//         element= <HomePage /<>
//     }
//     else{
//         element= <LogInPage />
//     }

        // ternary
       
    return(
        //   <div>   element=isLoggedIn ? <HomePage /> : <LogInPage /> </div>

        //short circuit
        <div>{isLoggedIn && <HomePage/> }</div>
    )
  }
 }

export default CONDITIONAL_RENDERING