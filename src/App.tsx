import React, { Component } from "react";
import { Card } from "./Card/Card";

class App extends Component {
  render() {
    return (
      <Card
        name="Unit Name"
        ancestry="Human"
        type="Infantry"
        experience="Green"
        equipment="Light"
        size="d6"
      />
    );
  }
}

export default App;
