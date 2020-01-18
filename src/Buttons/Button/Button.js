import React from "react";

const Button = ({ tag, action, isActive }) => {
  return (
    <button onClick={action} data-tag={tag}>
      {tag}
      {isActive ? "*" : ""}
    </button>
  );
};

export default Button;
