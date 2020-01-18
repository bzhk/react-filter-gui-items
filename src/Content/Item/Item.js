import React from "react";

const Item = ({ item, activeTags }) => {
  const [render, setRender] = React.useState(true);
  React.useEffect(() => {
    if (!activeTags.length) return setRender(true);
    let render = false;
    for (const tag of activeTags) {
      if (item.tags.includes(tag)) {
        render = true;
        break;
      }
    }
    setRender(render);
  }, [activeTags]);
  if (render) return <item.Component />;
  return null;
};

export default Item;
