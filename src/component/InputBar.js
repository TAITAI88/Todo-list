import React, { useState, useEffect } from "react";

const InputBar = ({
  list,
  setList,
  setPercent,
  countChecked,
  totalItem,
  setTotalItem,
}) => {
  const [value, setValue] = useState("");

  //紀錄我們在 Input_bar 裡輸入的 value
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  //將Input裡的value儲存，並在儲存後將Value變回空字串
  const saveHandler = () => {
    value === "" ? alert("請輸入內容") : addHandler(value);
    setValue("");
  };

  const addHandler = () => {
    //let 宣告一個 newItem 的物件，並將 content 設為剛剛紀錄的 value， id 設為現在時間， checked 為 false
    let newItem = {
      content: value,
      id: `${Date.now()}`,
      checked: false,
    };
    //let 宣告一個 updateList 用來裝現有的 list ，並將新加入的 newItem 推進 updateList 裡 ， 再透過 SetList 更新 list 裡的 Item，並計算Item總個數。
    let updateList = [...list];
    updateList.push(newItem);
    setList(updateList);
    setTotalItem(updateList.length);
    console.log(updateList);
  };

  //用 useEffect 將更新完的 state(totalItem,countChecked) 在裡面做百分比的計算 ， 並用 setPercent 將 percent 的值更新
  useEffect(() => {
    setPercent(Math.round((countChecked / totalItem) * 100));
  }, [countChecked, totalItem, setPercent]);

  return (
    <div className="inputBar">
      <input onChange={changeHandler} value={value} />
      <button onClick={saveHandler}></button>
    </div>
  );
};

export default InputBar;
