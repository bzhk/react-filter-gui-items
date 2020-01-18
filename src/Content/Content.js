import React from "react";
import Item from "./Item/Item";

const Content = ({ data, activeTags }) => {
  return data.map(item => (
    <Item key={item.id} item={item} activeTags={activeTags} />
  ));
};

export default Content;
