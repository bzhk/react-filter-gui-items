import React from "react";
import PropTypes from "prop-types";
import Buttons from "./Buttons/Buttons";
import Content from "./Content/Content";
import "./main.css";
const MainGrid = ({ data, updateActiveTags }) => {
  const [tags, setTags] = React.useState([]);
  const [activeTags, setActiveTags] = React.useState([]);

  React.useEffect(() => {
    updateActiveTags(activeTags);
  }, [activeTags]);

  React.useEffect(() => {
    const tags = data.reduce((start, next) => {
      const tags = next.tags.split(",").filter(tag => !start.includes(tag));
      start.push(...tags);
      return start;
    }, []);

    setTags(tags);
  }, [data]);

  const filterByTag = ev => {
    const { tag } = ev.target.dataset;
    setActiveTags([...activeTags, tag]);
  };

  const removeTag = ev => {
    const { tag } = ev.target.dataset;
    const forDef = activeTags.indexOf(tag);
    setActiveTags(activeTags.filter((item, index) => index !== forDef));
  };

  return (
    <div id="main-grid" className="main-grid">
      <Buttons
        tags={tags}
        filterByTag={filterByTag}
        activeTags={activeTags}
        removeTag={removeTag}
      />
      <Content data={data} activeTags={activeTags} />
    </div>
  );
};

MainGrid.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default MainGrid;
