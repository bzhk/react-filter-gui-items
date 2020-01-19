import React from "react";
import ReactDOM from "react-dom";
import MainGrid from "../src/MainGrid";
import { data } from "./data.js";
import Filter from "../src/Filter";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      tags: []
    };
    this.filter = React.createRef();
  }

  componentDidMount() {
    this.setState({
      data: data.map(elem => ({
        ...elem,
        Component: () => (
          <div style={{ width: "200px ", height: "200px", overflow: "hidden" }}>
            <img
              src={elem.link}
              alt={elem.alt}
              style={{
                height: "100%",
                width: "100%"
              }}
            />
          </div>
        )
      }))
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div
        style={{
          width: "800px"
        }}
      >
        <div>
          <button
            onClick={() =>
              this.setState({ tags: this.filter.current.state.activeTags })
            }
          >
            Check current array
          </button>
          <div>{this.state.tags.join(", ")}</div>
        </div>

        <Filter data={data} ref={this.filter} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
