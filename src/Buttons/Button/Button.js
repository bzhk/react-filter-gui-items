import React from "react";

const Button = ({ tag, filterByTag, isActive }) => {
  return (
    <button onClick={filterByTag} data-tag={tag}>
      {tag}
      {isActive ? "*" : ""}
    </button>
  );
};

export default Button;
