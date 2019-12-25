import React from "react";
import PropTypes from "prop-types";

const MainGrid = React.memo(({ tags }) => {
  return <div id="main-grid">Teast</div>;
});

MainGrid.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default MainGrid;
