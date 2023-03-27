import React from "react";
import Input from "./input";
import ItemList from "./itemList";

const todo_list = () => {
  return (
    <div className="todo">
      <h1 className="title">Todo List</h1>
      <span>Add things to do</span>
      <ItemList />
      <p className="input_desc">Add to list</p>
      <Input />
    </div>
  );
};

export default todo_list;
