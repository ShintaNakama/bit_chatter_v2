import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//Appクラスを削除して、import App from './App'; という形でApp.jsを読み込むように修正
import App from './App';

// class App extends React.Component {
//   render () {
//     return (
//       <h1>Hello, React!</h1>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('app'));