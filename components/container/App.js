import React from 'react';
import AppChild1 from './AppChild1';
import Child2 from './Child2';
//import ReactDom from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={msg:'msg form App.js'};
    this.handle=this.handle.bind(this);
    this.handle1=this.handle1.bind(this);
    this.handleChild2=this.handleChild2.bind(this);
  }


  render(){
    return(
            <div>
            <button  type="submit" onClick = {this.handle}>click </button>
              <h1> hi this is in App </h1>
              <AppChild1   msg={this.state.msg} handle1={this.handle1} money='200'/>
              <Child2 money = '100' handleChild2={this.handleChild2}/>
            </div>
          );
        }
        handle1(){
          this.setState({msg: 'handle1 called from AppChild1'})

        }
            handle(){
              this.setState({msg : 'handle is used'});
        }
        handleChild2(){
          this.setState(money = '199');
        }

}

export default App;
