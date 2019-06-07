import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Actions from "./Actions";
import Projects from "./Projects";

class App extends Component {
  state = {
    actions: [],
    projects: []
  };
  componentDidMount() {
    axios
      .get("https://deployed-node-sprint.herokuapp.com/api/actions")
      .then(res => {
        console.log(res);
        this.setState({ actions: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("https://deployed-node-sprint.herokuapp.com/api/projects")
      .then(res => {
        console.log(res);
        this.setState({ projects: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <Projects projects={this.state.projects} />
        <Actions actions={this.state.actions} />
      </div>
    );
  }
}

export default App;
