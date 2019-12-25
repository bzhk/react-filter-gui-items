import React from "react";
import ReactDOM from "react-dom";
import MainGrid from "../src/MainGrid";

class App extends React.Component {
  render() {
    return (
      <div>
        <MainGrid />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
