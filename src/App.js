import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monstsers: [],
    };
  }
  componentDidMount = () => {
    fetch("http://jsonplaceholder.typicode.com/users").then((response) =>
      response.json()
    ).then(users=> this.setState({monstsers:users}))
  };
  render() {
    console.log(this.state.monstsers)
    return (
      <div className="App">
        {this.state.monstsers.map((monster) => (
          <p key={monster.id}>{monster.name}</p>
        ))}
      </div>
    );
  }
}

export default App;
