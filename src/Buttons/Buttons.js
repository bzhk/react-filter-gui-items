import React from "react";
import Button from "./Button/Button";

const Buttons = ({ tags, filterByTag, activeTag }) => {
  return (
    <>
      {tags.map(tag => (
        <Button
          key={tag}
          tag={tag}
          filterByTag={filterByTag}
          isActive={activeTag === tag}
        />
      ))}
    </>
  );
};

export default Buttons;
