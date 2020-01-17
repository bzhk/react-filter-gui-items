import React from "react";
import PropTypes from "prop-types";
import Buttons from "./Buttons/Buttons";

const MainGrid = React.memo(({ gallery }) => {
  const [tags, setTags] = React.useState([]);
  const [activeTag, setActiveTag] = React.useState("");
  React.useEffect(() => {
    const tags = gallery.reduce((start, next) => {
      const tags = next.tags
        .split(",")
        .filter(tag => start.indexOf(tag) === -1);
      start.push(...tags);
      return start;
    }, []);
    setTags(tags);
  }, []);

  const filterByTag = ev => {
    const { tag } = ev.target.dataset;
    setActiveTag(tag);
  };
  return (
    <div id="main-grid">
      <Buttons tags={tags} filterByTag={filterByTag} activeTag={activeTag} />
    </div>
  );
});

MainGrid.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default MainGrid;
