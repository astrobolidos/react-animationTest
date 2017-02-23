import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  state = {
    items:  ['hello', 'world', 'click', 'me']
  }
  

handleAdd = () => {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove = (i) => {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleAdd}>Add Item</button>        
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>          
          {items}
        </ReactCSSTransitionGroup>


      </div>
    );
  }
}

export default App;
