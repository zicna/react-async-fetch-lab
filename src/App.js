// create your App component here
import React, { Component } from "react";

export default class App extends Component {

    state ={
        people: []
    }
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then(({people}) => {
        //   console.log(data.people)
        this.setState({people: people})
        // console.log(this.state)
        });
  }
  render() {
    return (
        <ul>
            {this.state.people.map((p,i)=><li key={i}>{p.name}</li>)}
        </ul>);
  }
}
