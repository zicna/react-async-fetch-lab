// create your App component here
import React, { Component } from "react";

export default class App extends Component {

    state ={
        people: []
    }
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((data) => {
        //   console.log(data.people)
        this.setState({people: data.people})
        // console.log(this.state)
        });
  }
  render() {
    return (
        <ul>
            {this.state.people.map(p=><li>{p.name}</li>)}
        </ul>);
  }
}
