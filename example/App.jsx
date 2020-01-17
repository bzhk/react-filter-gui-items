import React from "react";
import ReactDOM from "react-dom";
import MainGrid from "../src/MainGrid";
import { data } from "./data.js";
class App extends React.Component {
  render() {
    return (
      <div>
        <MainGrid gallery={data} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
