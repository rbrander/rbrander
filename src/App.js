import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="pt5 w-100 cf">
          <div className="fl w-20">&nbsp;</div>
          <div className="fl w-60">
            { this.props.children }
            <Footer />
          </div>
          <div className="fl w-20"></div>
        </div>
      </div>
    );
  }
}

export default App;
