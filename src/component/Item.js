import React from "react";

const Item = ({ item, index, list, setList }) => {
  const deleteHandler = (index) => {
    let deleteItem = [...list];
    deleteItem.splice(index);

    localStorage.setItem("todolist", JSON.stringify(deleteItem));
    setList(deleteItem);
  };

  return (
    <div className="item" key={index}>
      <div className="content">{item.content}</div>
      <button className="delBtn" onClick={() => deleteHandler(index)}></button>
    </div>
  );
};

export default Item;
