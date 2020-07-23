import React from "react";

import "./App.css";
import CardList from "./components/card-list/CardList";
import Search from "./components/search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monstsers: [],
      serchField: "",
    };
  }
  componentDidMount = () => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monstsers: users }));
  };

  render() {
    const monstersFilter = this.state.monstsers.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(this.state.serchField.toLowerCase());
    });

    return (
      <div className="App">
        <Search
          plachoder="Monster Name"
          handelChange={(e) => {
            this.setState({ serchField: e.target.value });
          }}
        />
        <CardList monstsers={monstersFilter} />
      </div>
    );
  }
}

export default App;
