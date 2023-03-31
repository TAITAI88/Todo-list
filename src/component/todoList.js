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

  const deleteHandler = (index) => {
    //let 宣告一個 deleteList 用來裝現有的 list , 並且用 splice 透過 index 刪除該 Item，最後用 setList 更新 list 裡
    let deleteList = [...list];
    deleteList.splice(index, 1);
    console.log(deleteList);
    setList(deleteList);
    //計算減少後的 Item 總個數，後面算百分時用來當分母
    setTotalItem(deleteList.length);
  };

  //判斷 checkBox 是否有打勾
  const checkHandler = (index) => (e) => {
    //若有打勾則透過 useRef 操作 Item 裡的 content，將該 Item 中的文本畫線，並且將計算打勾數量的 countChecked + 1
    if (e.target.checked) {
      console.log(" Checkbox is checked");
      contentRef.current[index].style.textDecoration = "line-through";
      setCountChecked((prev) => prev + 1);
    }
    //若沒打勾則透過 useRef 操作 Item 裡的 content，將該 Item 中文本畫的線移除，並且將計算打勾數量的 countChecked - 1
    else {
      console.log(" Checkbox is NOT checked");
      contentRef.current[index].style.textDecoration = "none";
      setCountChecked((prev) => prev - 1);
    }
  };

  //用 useEffect 將更新完的 state(totalItem,countChecked) 在裡面做百分比的計算 ， 並用 setPercent 將 percent 的值更新
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
