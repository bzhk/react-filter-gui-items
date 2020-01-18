import React from "react";
import MainGrid from "./MainGrid";

class Filter extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTags: []
    };

    this.updateActiveTags = this.updateActiveTags.bind(this);
  }

  updateActiveTags(activeTags) {
    this.setState({
      activeTags
    });
  }
  render() {
    const { data } = this.props;
    return <MainGrid updateActiveTags={this.updateActiveTags} data={data} />;
  }
}

export default Filter;
