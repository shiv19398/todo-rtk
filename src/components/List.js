import React from "react";

const List = ({ list, moveToRight, moveToLeft }) => {
  return (
    <div
      style={{ border: "2px solid blue", margin: "1em 0.2em", width: "25%" }}
    >
      <h3>{list.title}</h3>
      {list.cards.map((item) => (
        <div key={item.cid}>
          {item.name}
          <button onClick={() => moveToLeft(item, list.id)}>Left</button>
          <button onClick={() => moveToRight(item, list.id)}>Right</button>
        </div>
      ))}
    </div>
  );
};

export default List;
