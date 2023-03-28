import React, { useState } from "react";
import InputBar from "./InputBar";
import ScrollView from "./ScrollView";
import ProgressBar from "./ProgressBar";
import ItemList from "./ItemList";
import Item from "./Item";

const TodoList = () => {
  const [list, setList] = useState("");

  const addItem = (value) => {
    const newArray = [...list, value];
    setList(newArray);
  };

  return (
    <div className="todoList">
      <h1 className="title">Todo List</h1>
      <ProgressBar />

      {/* 先用 Array.from 將 list 轉成陣列 */}
      <ScrollView>
        <ItemList>
          {Array.from(list).map((item, index) => {
            return <Item item={item} key={index} />;
          })}
        </ItemList>
      </ScrollView>
      <InputBar addItem={addItem} />
    </div>
  );
};

export default TodoList;
