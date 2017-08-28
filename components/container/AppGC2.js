import React from 'react';

class AppGC1 extends React.Component{

  render(){
    return(
        <div>
          <h3>this is a Grand CHild2 </h3>
            {this.props.money}
        </div>
    );
  }
}

export default AppGC1;
