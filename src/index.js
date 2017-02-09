
import React from 'react';
import {render} from 'react-dom';

// Define MyToggle sub-component
class MyToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'You like this. Click to toggle.' : 'You haven`t liked this. Click to toggle.'}
      </button>
    );
  }
}

// Define NameForm sub-component
class MyNameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.name = 'Dustin Vo';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    // update label name
    if(this.state.value.trim() != '') {
      this.name = this.state.value;
    }
    
    // clear input
    this.state = {value: ''};
    
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>What is your name? </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <label> (Please press Enter to update message)</label>
        </form>
        <h1>Hello! My name is {this.name}</h1>
      </div>
    );
  }
}

// Define MyClock parent component
class MyClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <MyNameForm />
        <h2>Current time is {this.state.date.toLocaleTimeString()}</h2>
        <MyToggle />
      </div>
    );
  }
}

// render Clock component
render(
    <MyClock />,
    document.getElementById('root')
);