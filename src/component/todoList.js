import React, { useState, useRef, useEffect } from "react";
import InputBar from "./InputBar";
import ScrollView from "./ScrollView";
import ProgressBar from "./ProgressBar";
import ItemList from "./ItemList";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [percent, setPercent] = useState(0);
  const [countChecked, setCountChecked] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const contentRef = useRef([]);

  //let 宣告一個 deleteList 用來裝現有的 list , 並且用 splice 透過 index 刪除該 Item，最後用 setList 傳回 list 裡
  const deleteHandler = (index) => {
    let deleteList = [...list];
    deleteList.splice(index, 1);
    console.log(deleteList);
    setList(deleteList);
    setTotalItem(deleteList.length);
  };

  const checkHandler = (index) => (e) => {
    if (e.target.checked) {
      console.log(" Checkbox is checked");
      contentRef.current[index].style.textDecoration = "line-through";
      setCountChecked((prev) => prev + 1);
    } else {
      console.log(" Checkbox is NOT checked");
      contentRef.current[index].style.textDecoration = "none";
      setCountChecked((prev) => prev - 1);
    }
  };

  useEffect(() => {
    console.log("totalItem數量:" + totalItem);
    console.log("Checked數量:" + countChecked);
    setPercent(Math.round((countChecked / totalItem) * 100));
    console.log("百分比" + percent);
  }, [countChecked, totalItem, percent]);

  return (
    <div className="todoList">
      <h1 className="title">Todo List</h1>
      <ProgressBar percent={percent} />
      <ItemList>
        <ScrollView>
          {/*透過 map 方法將 list 存的 Item 個別印出來，並賦予其專屬的 key*/}
          {Array.from(list).map((item, index) => {
            return (
              <div className="item" key={index}>
                <input
                  type="checkbox"
                  name="done"
                  onChange={checkHandler(index)}
                />
                <div
                  className="content"
                  ref={(el) => (contentRef.current[index] = el)}
                >
                  {item.content}
                </div>
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
        totalItem={totalItem}
        setTotalItem={setTotalItem}
        countChecked={countChecked}
      />
    </div>
  );
};

export default TodoList;
