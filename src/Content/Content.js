import React from "react";
import Item from "./Item/Item";
import "./content.css";

const Content = ({ data, activeTags }) => {
  return (
    <div className="filter-content">
      {data.map(item => (
        <Item key={item.id} item={item} activeTags={activeTags} />
      ))}
    </div>
  );
};

export default Content;
