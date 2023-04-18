import React, { useState } from "react";
import InputBar from "./InputBar";
import ProgressBar from "./ProgressBar";
import ItemList from "./ItemList";

const TodoList = () => {
  //給 list 初始值，讓畫面剛進去就有 Item
  const [list, setList] = useState([
    { content: "This is example 01.", id: `${Date.now()}`, checked: false },
    {
      content: "This is example 02.",
      id: `${Date.now() + 0.1}`,
      checked: false,
    },
    {
      content: "This is example 03.",
      id: `${Date.now() + 0.2}`,
      checked: false,
    },
    {
      content: "This is example 04.",
      id: `${Date.now() + 0.3}`,
      checked: false,
    },
  ]);
  const [totalItem, setTotalItem] = useState(4);
  const [percent, setPercent] = useState(0);
  const [countChecked, setCountChecked] = useState(0);

  return (
    <div className="todoList">
      <h1 className="title">Todo List</h1>
      <ProgressBar percent={percent} />
      <ItemList
        list={list}
        totalItem={totalItem}
        countChecked={countChecked}
        setList={setList}
        setTotalItem={setTotalItem}
        setPercent={setPercent}
        setCountChecked={setCountChecked}
      />
      <InputBar
        list={list}
        totalItem={totalItem}
        countChecked={countChecked}
        setList={setList}
        setTotalItem={setTotalItem}
        setPercent={setPercent}
      />
    </div>
  );
};

export default TodoList;
