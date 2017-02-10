import React from 'react';
import Header from './Header';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="mt5 pa3">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
