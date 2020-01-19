import React from "react";
import "./button.css";

const Button = ({ tag, action, isActive }) => {
  const styles = isActive ? "tag tag-active" : "tag";

  return (
    <div onClick={action} data-tag={tag} className={styles}>
      {tag}
    </div>
  );
};

export default Button;
