import React from 'react';
import ReactDom from 'react-dom';
import App from './container/App';
// const element  = <div>
//                     <h1> Hello it is in react </h1>
//                     <h1> hi again </h1>
//                   </div>


class Index extends React.Component{
  render(){

    return(
      <div>
          <h1> Hello from index</h1>
          <App />
      </div>
    );
  }


}

ReactDom.render(
<Index />,document.getElementById('root')
);


  //
  // reactDom.render(
  //   element,document.getElementById('root')
  // );
