import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: "mon1",
        },
        {
          name: "Dracula",
          id: "mon2",
        },
        {
          name: "Zombie",
          id: "mon3",
        },
        {
          name: "Mummy",
          id: "mon4",
        },
        {
          name: "Werewolf",
          id: "mon5",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    );
  }
}

export default App;
