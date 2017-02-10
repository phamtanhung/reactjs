import React, { Component } from 'react'

class Hello extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  render() {
    var sDate = this.state.date.toLocaleDateString();
    return (<div>
        <h1>
          Hello, {this.props.name}
        </h1>
        <h2>{sDate}</h2>
      </div>
    );
  }
}

class LikeToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {

    this.setState( prevState => ({
      liked: !prevState.liked
    }));
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>
         {this.state.liked ? "Liked" : "Like me!!!"}
      </button>
    );
  }
}

class CombineComponent extends React.Component {
  render() {
    return (
  <div>
    <Hello name="Cuong 123" />
    <LikeToggle />
  </div>
  );
  }
}

const Element = () => <CombineComponent />;
export default Element;