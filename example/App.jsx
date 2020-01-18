import React from "react";
import ReactDOM from "react-dom";
import MainGrid from "../src/MainGrid";
import { data } from "./data.js";
import Filter from "../src/Filter";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.filter = React.createRef();
  }

  componentDidMount() {
    this.setState({
      data: data.map(elem => ({
        ...elem,
        Component: () => (
          <img
            src={elem.link}
            alt={elem.alt}
            style={{ width: "100px ", height: "auto" }}
          />
        )
      }))
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <button onClick={() => console.log(this.filter.current.state)}>
          Check current array
        </button>
        <Filter data={data} ref={this.filter} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
