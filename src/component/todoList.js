import React, { useState } from "react";
import InputBar from "./InputBar";
import ScrollView from "./ScrollView";
import ProgressBar from "./ProgressBar";
import ItemList from "./ItemList";

const TodoList = () => {
  const [list, setList] = useState("");
  const [percent, setPercent] = useState(0);
  const [isChecked, setIsChecked] = useState(0);

  const deleteHandler = (index) => {
    let deleteItem = [...list];
    deleteItem.splice(index, 1);
    console.log(deleteItem);
    setList(deleteItem);
    setPercent(Math.round((isChecked / deleteItem.length) * 100));
    console.log(deleteItem.length);
    console.log(isChecked);
    console.log(percent);
  };

  const checkHandler = (e) => {
    if (e.target.checked) {
      console.log(" Checkbox is checked");
      setIsChecked((prev) => ++prev);
    } else {
      console.log(" Checkbox is NOT checked");
      setIsChecked((prev) => --prev);
    }
    console.log(isChecked);
    console.log(percent);
  };

  // const calcPercent = () => {
  //   let totalArr = [...list];
  //   setPercent(totalArr.length * 100);
  //   console.log(isChecked / totalArr.length);
  // };

  return (
    <div className="todoList">
      <h1 className="title">Todo List</h1>
      <ProgressBar percent={percent} />
      <ItemList>
        <ScrollView>
          {Array.from(list).map((item, index) => {
            return (
              <div className="item" key={index}>
                <input type="checkbox" name="done" onChange={checkHandler} />
                <div className="content">{item.content}</div>
                <button
                  className="delBtn"
                  onClick={() => deleteHandler(index)}
                ></button>
              </div>
            );
          })}
        </ScrollView>
      </ItemList>
      <InputBar
        list={list}
        setList={setList}
        percent={percent}
        setPercent={setPercent}
        isChecked={isChecked}
      />
    </div>
  );
};

export default TodoList;
