import React from "react";

const Item = ({ item, activeTags }) => {
  const itemRef = React.createRef();
  const [render, setRender] = React.useState(true);
  const [size, setSize] = React.useState({});
  React.useEffect(() => {
    if (!activeTags.length) {
      return setRender(true);
    }
    let render = false;
    for (const tag of activeTags) {
      if (item.tags.includes(tag)) {
        render = true;
        break;
      }
    }
    setRender(render);
  }, [activeTags]);

  React.useEffect(() => {
    const size = {
      width: itemRef.current.children[0].clientWidth,

      transform: "translateY(0)",
      opacity: "100%"
    };
    setSize(size);
  }, []);

  const sizeStyle = render
    ? size
    : { width: "0", opacity: "0%", transform: "translateY(-73px)" };
  return (
    <div ref={itemRef} style={{ transition: "1s", ...sizeStyle }}>
      <item.Component />
    </div>
  );
};

export default Item;
