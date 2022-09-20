import React, { Component } from "react";
import '../style.css'

class Shop extends Component {
    
  render() {
    return (
      <React.Fragment>
        <h1 style={ {
            fontSize: '20px',
            color: 'green',
        } }>Hello React World!</h1>
        <div className="hello">Hello from here too...</div>
        <img src="images/user-1.png" alt="" />
        <input type="submit" className="btn btn-primary btn-lg" value="Click Me!" />
      </React.Fragment>
    );
  }
}

export default Shop