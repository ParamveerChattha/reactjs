import React from 'react';

class AppGC1 extends React.Component{
//money=    {this.props.msg
  render(){
    return(
        <div>
          <h3>this is a Grand CHild1 </h3>
          {this.props.msg}
          {this.props.money2}
        </div>
    );
  }
}

export default AppGC1;
