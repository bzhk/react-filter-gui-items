import React from "react";
import Button from "./Button/Button";

const Buttons = ({ tags, filterByTag, activeTags, removeTag }) => {
  return (
    <div>
      {tags.map(tag => {
        const isActive = activeTags.indexOf(tag) > -1;
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
