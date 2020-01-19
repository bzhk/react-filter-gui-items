import React from "react";
import Button from "./Button/Button";
import "./buttons.css";

const Buttons = ({ tags, filterByTag, activeTags, removeTag }) => {
  return (
    <div className="tags-container">
      {tags.map(tag => {
        const isActive = activeTags.includes(tag);
        return (
          <Button
            key={tag}
            tag={tag}
            action={isActive ? removeTag : filterByTag}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default Buttons;
