import React from 'react';
import AppGC2 from './AppGC2'
class Child2 extends React.Component{

  render(){
    return(
      <div>

        <h2> Hello from CHild 2 </h2>
        {this.props.money}
        <button type="submit" onClick={this.props.handleChild2} >Child2</button
        < AppGC2 money='50'/>
      </div>
    );
  }
}

export default Child2;
