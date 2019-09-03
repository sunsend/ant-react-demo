import React, {Component} from 'react';
import logo from './logo.svg';
import Button from 'antd/es/button';
import './App.css';

class App extends Component {
  render(){
    return (<div className="App">
      <Button type="primary">新建项目</Button>
    </div>);
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          welcome to react.
        </a>
      </header>
    </div>
  );
}*/

export default App;
