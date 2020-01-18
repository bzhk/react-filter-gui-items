import React from "react";
import Item from "./Item/Item";

const Content = ({ data, activeTags }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        width: "300px",
        overflow: "hidden"
      }}
    >
      {data.map(item => (
        <Item key={item.id} item={item} activeTags={activeTags} />
      ))}
    </div>
  );
};

export default Content;
