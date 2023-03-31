import React, { useState, useEffect } from "react";

const InputBar = ({
  list,
  setList,
  setPercent,
  countChecked,
  percent,
  totalItem,
  setTotalItem,
}) => {
  const [value, setValue] = useState("");

  //紀錄我們在 Input_bar 裡輸入的 value
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const addHandler = () => {
    //let 宣告一個 newItem 的物件，裡面放一個名為 content 的屬性，賦予其值為剛剛紀錄的 value
    let newItem = {
      content: value,
    };
    //let 宣告一個 updateList 用來裝現有的 list ，並將新加入的 newItem 推進 updateList 裡 ， 再透過 SetList 更新 list 裡的 Item
    let updateList = [...list];
    updateList.push(newItem);
    console.log(updateList);
    setList(updateList);
    setTotalItem(updateList.length);
  };

  //將Input裡的value儲存，並在儲存後將Value變回空字串
  const saveHandler = () => {
    value === "" ? alert("請輸入內容") : addHandler(value);
    setValue("");
  };

  //用 useEffect 將更新完的 state(totalItem,countChecked) 在裡面做百分比的計算 ， 並用 setPercent 將 percent 的值更新
  useEffect(() => {
    console.log("totalItem數量:" + totalItem);
    console.log("Checked數量:" + countChecked);
    setPercent(Math.round((countChecked / totalItem) * 100));
    console.log("百分比" + percent);
  }, [countChecked, totalItem, percent]);

  return (
    <div className="inputBar">
      <input onChange={changeHandler} value={value} />
      <button onClick={saveHandler}></button>
    </div>
  );
};

export default InputBar;
