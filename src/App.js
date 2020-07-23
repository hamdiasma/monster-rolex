import React from "react";

import "./App.css";
import CardList from "./components/card-list/CardList";

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
        <CardList monstsers={this.state.monstsers}/>
      </div>
    );
  }
}

export default App;
