import React from 'react';
import AppGC1 from './AppGC1';
class AppChild1 extends React.Component{

  constructor(props){
      super(props);
      this.state={msg: 'money from AppChild1 to AppGC1 '}

  }
  render(){

    return(
      <div>
        <button type="submit" onClick= {this.props.handle1}>AppChild1 </button>


        <h2> in child1 </h2>
        <h3>{this.props.msg} money is
         {this.props.money} </h3>
        <AppGC1 msg={this.state.msg}  money2={this.props.money}/>



      </div>
    );
  }

}

export default AppChild1;
